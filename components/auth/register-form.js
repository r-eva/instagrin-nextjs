"use client";
import { useRef } from "react";
import Link from "next/link";

async function createUser(email, username, password) {
  const response = await fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify({ email, username, password }),
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

function RegisterForm() {
  const emailInputRef = useRef();
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredUserNameInputRef = userNameInputRef.current.value;

    //optional: add validation
    try {
      const result = await createUser(
        enteredEmail,
        enteredUserNameInputRef,
        enteredPassword
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className=" flex flex-col items-center max-w-sm p-11 rounded overflow-hidden border border-gray-300">
      <img
        src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
        className=" w-28 item-center"
      ></img>
      <h1 className=" font-semibold text-gray-500 mb-3">
        {" "}
        Sign up to see photos and videos from your friends.{" "}
      </h1>
      <form className=" flex flex-col gap-3" onSubmit={(e) => submitHandler(e)}>
        <input
          placeholder="Email address"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black "
          ref={emailInputRef}
        />
        <input
          placeholder="Username"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black "
          ref={userNameInputRef}
        />
        <input
          placeholder="Password"
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-grey-500 bg-gray-100 text-black "
          ref={passwordInputRef}
        />
        <p>
          People who use our service may have uploaded your contact information
          to Instagram.
        </p>
        <p>
          By signing up, you agree to our Terms, Privacy Policy and Cookies
          Policy.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Sign Up
        </button>
      </form>
      <p className=" mt-4 ">Have an account?</p>
      <Link href="/" className=" text-blue-500 ">
        Log in
      </Link>
    </section>
  );
}

export default RegisterForm;
