import React from "react";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";
import LoginForm from "../components/auth/login-form";
import StartingPageContent from "../components/starting-page/starting-page";
import { useSession } from "next-auth/react";

export default async function Home() {
  const session = await getServerSession(options);

  return <>{session ? <StartingPageContent /> : <LoginForm />}</>;
}
