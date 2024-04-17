import { connectToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.json();
  const { email, username, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    !username ||
    password.trim().length < 7
  ) {
    return NextResponse.json(
      {
        message:
          "Invalid input - password should also be at least 7 characters long",
      },
      {
        status: 422,
      }
    );
  }

  const client = await connectToDatabase();
  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email: email });

  if (existingUser) {
    client.close();
    return NextResponse.json(
      {
        message: "User exist already!",
      },
      {
        status: 422,
      }
    );
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    username: username,
    password: hashedPassword,
    email: email,
  });

  client.close();

  return NextResponse.json(
    {
      message: "User Created",
    },
    {
      status: 200,
    }
  );
}
