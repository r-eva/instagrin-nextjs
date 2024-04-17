import Link from "next/link";
import AuthForm from "@/components/auth/auth-form";
import getUser from "@/app/helper/action";
import ProfilePage from "@/components/profile-page/profile-page";
export default async function Home() {
  const user = await getUser();
  // return <AuthForm />;
  return <ProfilePage/>
}
