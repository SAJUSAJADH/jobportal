import Connect from "@/dbconfig/connect";
import User from "@/dbmodels/usermodel";
import { Select } from "@headlessui/react";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await Connect();
    const { email } = await request.json();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "unauthorized user", status: 401 });
    }

    return NextResponse.json({ message: "ok", user });
  } catch (error) {
    return NextResponse.json({
      message: "Intrernal server error",
      status: 500,
      error,
    });
  }
}
