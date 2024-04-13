import Link from "next/link";
import AuthForm from "@/components/auth/auth-form";
import getUser from "@/app/helper/action";
export default async function Home() {
  const user = await getUser();
  console.log(user);
  return <AuthForm />;
}
