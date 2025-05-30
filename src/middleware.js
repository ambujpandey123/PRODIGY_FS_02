import { NextRequest, NextResponse } from 'next/server';  

export async function middleware(request) {
  const token = request.cookies.get('token')?.value;
  console.log("middleware Runs", token);
  
  try {
    if(!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    NextResponse.next();
    
  } catch (err) {
    console.error("Middleware error:", err);
    return NextResponse.redirect(new URL('/login ', request.url));
  }
}

// Protect these routes
export const config = {
  matcher: ['/',
    // '/addemployee',"/employee/:path*"    //commented out to fast rendering
  ]
};
