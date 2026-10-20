import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/admin-auth";
import LoginForm from "@/components/admin/LoginForm";

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");

  return (
    <main className="flex min-h-dvh items-center justify-center px-4">
      <div className="w-full max-w-sm rounded-2xl border border-[#E8E4DC] bg-white p-8">
        <p className="label-en text-[#6B7280]">Chat Admin</p>
        <h1 className="mt-2 text-[22px]">チャット管理</h1>
        <p className="mt-2 text-[13px] leading-relaxed text-[#6B7280]">
          AI相談チャットの会話ログとKPIを確認します。
        </p>
        <LoginForm />
      </div>
    </main>
  );
}
