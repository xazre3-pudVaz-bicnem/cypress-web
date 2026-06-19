import { readFileSync, writeFileSync } from 'fs';

// From SITE_IMAGES — exact image pools per industry in order
const imagePools = {
  'restaurant': [
    '/ChatGPT Image 2026年6月19日 08_54_07 (1).png',
    '/ChatGPT Image 2026年6月19日 08_56_24 (1).png',
    '/ChatGPT Image 2026年6月19日 08_54_08 (2).png',
    '/ChatGPT Image 2026年6月19日 08_56_25 (3).png',
    '/ChatGPT Image 2026年6月19日 08_54_09 (4).png',
    '/ChatGPT Image 2026年6月19日 08_56_26 (5).png',
    '/ChatGPT Image 2026年6月19日 08_54_10 (7).png',
    '/ChatGPT Image 2026年6月19日 08_56_29 (10).png',
    '/ChatGPT Image 2026年6月19日 08_54_09 (3).png',
    '/ChatGPT Image 2026年6月19日 08_56_24 (2).png',
  ],
  'beauty-salon': [
    '/ChatGPT Image 2026年6月19日 08_59_57 (1).png',
    '/ChatGPT Image 2026年6月19日 09_03_12 (1).png',
    '/ChatGPT Image 2026年6月19日 08_59_57 (2).png',
    '/ChatGPT Image 2026年6月19日 09_03_12 (2).png',
    '/ChatGPT Image 2026年6月19日 08_59_59 (3).png',
    '/ChatGPT Image 2026年6月19日 09_03_12 (3).png',
    '/ChatGPT Image 2026年6月19日 09_00_02 (4).png',
    '/ChatGPT Image 2026年6月19日 09_03_13 (4).png',
    '/ChatGPT Image 2026年6月19日 09_00_02 (5).png',
    '/ChatGPT Image 2026年6月19日 09_03_14 (5).png',
  ],
  'relaxation': [
    '/ChatGPT Image 2026年6月14日 21_08_56 (1).png',
    '/ChatGPT Image 2026年6月19日 09_05_29 (5).png',
    '/ChatGPT Image 2026年6月14日 21_08_56 (1).png',
    '/ChatGPT Image 2026年6月19日 09_05_30 (6).png',
    '/ChatGPT Image 2026年6月14日 21_08_56 (1).png',
    '/ChatGPT Image 2026年6月19日 09_05_30 (7).png',
    '/ChatGPT Image 2026年6月14日 21_08_56 (1).png',
  ],
  'dental': [
    '/ChatGPT Image 2026年6月19日 09_05_27 (1).png',
    '/ChatGPT Image 2026年6月19日 09_05_28 (4).png',
    '/ChatGPT Image 2026年6月19日 09_05_30 (7).png',
    '/ChatGPT Image 2026年6月19日 09_05_32 (10).png',
  ],
  'clinic': [
    '/ChatGPT Image 2026年6月19日 09_05_27 (2).png',
    '/ChatGPT Image 2026年6月19日 09_05_29 (5).png',
    '/ChatGPT Image 2026年6月19日 09_05_31 (8).png',
  ],
  'construction': [
    '/ChatGPT Image 2026年6月19日 09_09_57 (1).png',
    '/ChatGPT Image 2026年6月19日 09_10_07 (1).png',
    '/ChatGPT Image 2026年6月19日 09_09_59 (2).png',
    '/ChatGPT Image 2026年6月19日 09_10_07 (2).png',
    '/ChatGPT Image 2026年6月19日 09_10_02 (3).png',
    '/ChatGPT Image 2026年6月19日 09_10_08 (3).png',
    '/ChatGPT Image 2026年6月19日 09_10_04 (4).png',
    '/ChatGPT Image 2026年6月19日 09_10_08 (5).png',
    '/ChatGPT Image 2026年6月19日 09_10_05 (5).png',
    '/ChatGPT Image 2026年6月19日 09_10_11 (10).png',
  ],
  'real-estate': [
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
    '/ChatGPT Image 2026年6月19日 09_10_07 (1).png',
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
    '/ChatGPT Image 2026年6月19日 09_10_11 (10).png',
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
  ],
  'cleaning': [
    '/ChatGPT Image 2026年6月13日 19_20_52.png',
    '/ChatGPT Image 2026年6月13日 19_20_52.png',
    '/ChatGPT Image 2026年6月13日 19_20_52.png',
    '/ChatGPT Image 2026年6月13日 19_20_52.png',
    '/ChatGPT Image 2026年6月13日 19_20_52.png',
    '/ChatGPT Image 2026年6月13日 19_20_52.png',
    '/ChatGPT Image 2026年6月13日 19_20_52.png',
  ],
  'logistics': [
    '/ChatGPT Image 2026年6月19日 09_26_23 (1).png',
    '/ChatGPT Image 2026年6月19日 09_26_25 (2).png',
    '/ChatGPT Image 2026年6月19日 09_26_27 (3).png',
    '/ChatGPT Image 2026年6月19日 09_26_29 (4).png',
    '/ChatGPT Image 2026年6月19日 09_26_33 (5).png',
    '/ChatGPT Image 2026年6月19日 09_26_45 (10).png',
  ],
  'pet': [
    '/ChatGPT Image 2026年6月19日 09_26_40 (1).png',
    '/ChatGPT Image 2026年6月19日 09_26_42 (2).png',
    '/ChatGPT Image 2026年6月19日 09_26_48 (4).png',
    '/ChatGPT Image 2026年6月19日 09_26_55 (6).png',
    '/ChatGPT Image 2026年6月19日 09_27_01 (9).png',
  ],
  'school': [
    '/ChatGPT Image 2026年6月19日 09_27_09 (1).png',
    '/ChatGPT Image 2026年6月19日 09_27_11 (2).png',
    '/ChatGPT Image 2026年6月19日 09_27_13 (3).png',
    '/ChatGPT Image 2026年6月19日 09_27_17 (4).png',
    '/ChatGPT Image 2026年6月19日 09_27_21 (6).png',
    '/ChatGPT Image 2026年6月19日 09_27_28 (9).png',
    '/ChatGPT Image 2026年6月19日 09_27_30 (10).png',
  ],
  'retail': [
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
    '/ChatGPT Image 2026年6月19日 08_56_29 (10).png',
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
    '/ChatGPT Image 2026年6月19日 08_56_26 (5).png',
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
  ],
  'accommodation': [
    '/ChatGPT Image 2026年6月14日 21_10_24 (1).png',
    '/ChatGPT Image 2026年6月14日 21_10_24 (1).png',
    '/ChatGPT Image 2026年6月14日 21_10_24 (1).png',
    '/ChatGPT Image 2026年6月14日 21_10_24 (1).png',
  ],
  'professional': [
    '/ChatGPT Image 2026年6月14日 21_09_21 (7).png',
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
    '/ChatGPT Image 2026年6月14日 21_09_21 (7).png',
    '/ChatGPT Image 2026年6月14日 21_09_20 (5).png',
    '/ChatGPT Image 2026年6月14日 21_09_21 (7).png',
  ],
  'other': [
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月14日 21_09_09 (6).png',
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月14日 21_09_09 (6).png',
    '/ChatGPT Image 2026年6月13日 19_22_31.png',
    '/ChatGPT Image 2026年6月14日 21_09_09 (6).png',
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月14日 21_09_09 (6).png',
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月14日 21_09_09 (6).png',
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月13日 20_01_28.png',
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月13日 20_02_56.png',
    '/ChatGPT Image 2026年6月14日 21_09_09 (5).png',
  ],
};

const path = 'lib/data/caseStudies.ts';
let content = readFileSync(path, 'utf-8');
const lines = content.split('\n');

const counters = {};
let currentIndustry = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const slugMatch = line.match(/"industrySlug":\s*"([^"]+)"/);
  if (slugMatch) {
    currentIndustry = slugMatch[1];
    if (!(currentIndustry in counters)) {
      counters[currentIndustry] = 0;
    }
  }

  const imageMatch = line.match(/(\s*"image":\s*)"([^"]+)"/);
  if (imageMatch && currentIndustry) {
    const pool = imagePools[currentIndustry];
    if (pool) {
      const idx = counters[currentIndustry] % pool.length;
      const newImage = pool[idx];
      counters[currentIndustry]++;
      lines[i] = line.replace(/"image":\s*"[^"]+"/, `"image": "${newImage}"`);
    }
  }
}

writeFileSync(path, lines.join('\n'), 'utf-8');
console.log('Done! Industry counters:', counters);
