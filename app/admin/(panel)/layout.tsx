import { requireAdmin } from "@/lib/admin-auth";
import { logoutAction } from "@/app/admin/actions";
import AdminNav from "@/components/admin/AdminNav";

export default async function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="md:flex md:min-h-dvh">
      <aside className="bg-[#0B1628] px-4 py-4 text-white md:sticky md:top-0 md:flex md:h-dvh md:w-56 md:shrink-0 md:flex-col md:px-4 md:py-6">
        <div className="mb-3 flex items-center justify-between md:mb-8 md:block">
          <div>
            <p className="text-[15px] font-medium text-white">Cypress Chat</p>
            <p className="text-[11px] text-white/50">チャット管理</p>
          </div>
          <form action={logoutAction} className="md:hidden">
            <button type="submit" className="text-[12px] text-white/60 hover:text-white">
              ログアウト
            </button>
          </form>
        </div>
        <AdminNav />
        <form action={logoutAction} className="mt-auto hidden md:block">
          <button type="submit" className="px-3 text-[12px] text-white/60 hover:text-white">
            ログアウト
          </button>
        </form>
      </aside>
      <main className="min-w-0 flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
    </div>
  );
}
