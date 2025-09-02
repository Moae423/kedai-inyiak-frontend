import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export const middleware = (request: NextRequest) => {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;
  // 🔹 Kalau belum login dan coba masuk /dashboard → tendang ke /
  if (!token && pathname.startsWith("/dashboard")) {
    if (pathname !== "/") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  // 🔹 Kalau udah login dan coba masuk /login atau /register → tendang ke /dashboard
  if (token && (pathname.startsWith("/") || pathname.startsWith("/register"))) {
    if (pathname !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
  return NextResponse.next();
  // const isLogin = false;
  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   if (!isLogin) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  // }
};

export const config = {
  matcher: ["/dashboard/:path*", "/dashboard", "/register", "/"],
};
