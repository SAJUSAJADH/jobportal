import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(request) {
    const path = request.nextUrl.pathname;
    const token = await request.nextauth.token;

    if (path.startsWith("/candidate") && token?.role !== "candidate") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (path.startsWith("/employer") && token?.role !== "employer") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
);

export const config = {
  matcher: ["/happy"],
};
