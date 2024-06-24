import Connect from "@/dbconfig/connect";
import User from "@/dbmodels/usermodel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await Connect();
    const {
      email,
      firstname,
      lastname,
      address,
      city,
      state,
      district,
      zipCode,
      phoneNumber,
      selectedDate,
    } = await request.json();
    const filter = { email: email };
    const update = {
      firstName: firstname,
      lastName: lastname,
      address: {
        street: address,
        city: district,
        state: state,
        postalCode: zipCode,
        country: "India",
      },
      dateOfBirth: selectedDate,
      contactNumber: phoneNumber,
    };
    const user = await User.findOneAndUpdate(filter, update, { new: true });

    if (!user) {
      return NextResponse.json({ message: "Unauthorized user", status: 401 });
    }

    return NextResponse.json({ message: "ok", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
      error,
    });
  }
}
