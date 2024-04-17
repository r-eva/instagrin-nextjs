"use client";
import { useRef } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

function LoginForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const enteredPasswordInputRef = passwordInputRef.current.value;
    const enteredEmailInputRef = emailInputRef.current.value;
    const result = await signIn("credentials", {
      redirect: false,
      email: enteredEmailInputRef,
      password: enteredPasswordInputRef,
    });
    if (!result.error) {
      /// set some auth tokens with react contex / redux
    }
  }

  return (
    <section className="flex flex-col items-center max-w-sm p-11 rounded overflow-hidden border border-gray-300">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
        className=" w-28 item-center"
      ></img>
      <form className=" flex flex-col gap-3" onSubmit={(e) => submitHandler(e)}>
        <input
          placeholder="email"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black"
          ref={emailInputRef}
        />
        <input
          placeholder="password"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black"
          ref={passwordInputRef}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Login
        </button>
        <Link href="" className="text-blue-500">
          {" "}
          Forget password?{" "}
        </Link>
      </form>
      <p className=" mt-4 ">Don't have an account?</p>
      <Link href="/register" className=" text-blue-500 ">
        Sign up
      </Link>
    </section>
  );
}

export default LoginForm;
