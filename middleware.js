import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import arcjet, { detectBot, shield } from "@arcjet/next";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

// Clerk authentication middleware
const clerkAuthMiddleware = clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn();
  }

  return NextResponse.next();
});

// Arcjet middleware
const arcjetMiddleware = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    shield({ mode: "LIVE" }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
    }),
  ],
});

// Main middleware function
export async function middleware(req) {
  // Arcjet: security checks
  const arcjetResult = await arcjetMiddleware(req);
  if (arcjetResult) return arcjetResult;

  // Clerk: auth checks
  const clerkResult = await clerkAuthMiddleware(req);
  return clerkResult ?? NextResponse.next(); // ✅ always return a valid response
}

// Ensure it runs only on the correct paths
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
