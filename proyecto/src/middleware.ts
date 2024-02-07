import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(req: NextRequest) {
    const tokenCookie = await req.cookies.get("myToken");
    if (!tokenCookie) {
        return redirectToPrivatePage(req);
    }
    try {
        const { payload } = await jwtVerify(tokenCookie.value, new TextEncoder().encode(process.env.JWT_SECRET_SEED));
        const isDriver = req.nextUrl.pathname.includes("/driver") && payload.type === "driver";
        const isAdmin = req.nextUrl.pathname.includes("/admin") && payload.type === "admin";
        const isApi = req.nextUrl.pathname.includes("/api");
        if (isDriver || isAdmin || isApi) {
            return NextResponse.next();
        } else {
            return redirectToPrivatePage(req);
        }
    } catch (error) {
        return redirectToPrivatePage(req);
    }
}
export const config = {
    matcher: ["/private/admin/:path*", "/private/driver/:path*", "/api/users/", "/api/payments/:path*", "/api/buses/"],
};

function redirectToPrivatePage(req: NextRequest) {
    const requestedPage = req.nextUrl.pathname;
    const url = req.nextUrl.clone();
    url.pathname = `/private`;
    url.search = `p=${requestedPage}`;
    return NextResponse.redirect(url);
}
