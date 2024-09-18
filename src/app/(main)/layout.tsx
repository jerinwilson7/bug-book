import { validateRequest } from "@/auth";
import { Header } from "@/components/organisms";
import SessionProvider from "@/providers/session-provider";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");
  return <SessionProvider value={session}>
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="max-w-7xl mx-auto p-5">
    {children}
      </div>
    </div>
    </SessionProvider>;
}
