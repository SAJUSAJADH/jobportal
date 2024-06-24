import Connect from "@/dbconfig/connect";
import User from "@/dbmodels/usermodel";
import { NextRequest, NextResponse, userAgent } from "next/server";
import bcryptjs from "bcryptjs";
export async function POST(request) {
  try {
    await Connect();
    const { email, password, role } = await request.json();
    const salt = await bcryptjs.genSalt(5);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const isExist = await User.findOne({ email: email });
    if (isExist) {
      return NextResponse.json({
        message: "User Already Exist",
        status: 205,
      });
    }
    const newUser = new User({
      email: email,
      userType: role,
      password: hashedPassword,
    });
    await newUser.save();

    return NextResponse.json({
      message: "User Created",
      status: 200,
      newUser,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error Occured",
      status: 400,
      error,
    });
  }
}
