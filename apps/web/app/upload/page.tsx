import { isLoggedIn } from "../actions/login";
import { redirect } from "next/navigation";

async function UploadPage(): Promise<JSX.Element> {
  if (!(await isLoggedIn())) {
    redirect("/");
  }
  // redirect back if user is not logged in
  return (
    <div>
      <h1>Logged In Page</h1>
      <p>You are logged in, so you can see this page!</p>
    </div>
  );
}
export default UploadPage;
