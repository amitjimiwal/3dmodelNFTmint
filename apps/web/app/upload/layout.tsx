import { redirect } from "next/navigation";
import { isLoggedIn } from "../actions/login";
import { useActiveAccount } from "thirdweb/react";
export default  async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  if (!(await isLoggedIn())) {
    redirect("/");
  }
  return (
    <div>{children}</div>
  );
}
