import { NextResponse, type NextRequest } from "next/server";
import {
  DEFAULT_EXPERIENCE,
  EXPERIENCE_COOKIE,
  EXPERIENCE_COOKIE_MAX_AGE,
  EXPERIENCE_PARAM,
  isExperience,
  isPublicPath,
  toInternalPath,
} from "@/experiences/experience";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (!isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const param = searchParams.get(EXPERIENCE_PARAM);
  const cookie = request.cookies.get(EXPERIENCE_COOKIE)?.value;
  const paramExperience = isExperience(param) ? param : null;
  const experience =
    paramExperience ?? (isExperience(cookie) ? cookie : DEFAULT_EXPERIENCE);

  const url = request.nextUrl.clone();
  url.pathname = toInternalPath(pathname, experience);

  const response = NextResponse.rewrite(url);

  // The same URL renders different HTML depending on the cookie.
  response.headers.append("Vary", "Cookie");

  if (paramExperience) {
    response.cookies.set(EXPERIENCE_COOKIE, paramExperience, {
      path: "/",
      maxAge: EXPERIENCE_COOKIE_MAX_AGE,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/", "/impact-stories"],
};
