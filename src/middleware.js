import { NextResponse } from "next/server";

export function middleware(request) {
  const auth = request.cookies.get("auth");

  if (request.nextUrl.pathname.startsWith("/add-item") && !auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
