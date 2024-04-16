import LoginForm from "@/components/auth/login-form";
import getUser from "@/app/helper/action";

export default async function Home() {
  const data = await getUser();
  return <LoginForm />;
}
