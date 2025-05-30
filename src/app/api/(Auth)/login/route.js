import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        // Basic validation
        if (
            !email || !password ||
            email.length > 20 ||
            password.length > 20
        ) {
            return NextResponse.json(
                { success: false, message: "Invalid input data" },
                { status: 400 }
            );
        }

        // Check if user exists with given email and password
        const [users] = await db.query(
            "SELECT name, email FROM user WHERE email = ? AND password = ?",
            [email, password]
        );

        if (users.length === 0) {
            return NextResponse.json(
                { success: false, message: "Invalid email or password" },
                { status: 401 }
            );
        }

        // You can add session/token logic here if needed
 const SuccessResponse= NextResponse.json(
            { success: true, user: users[0] },
            { status: 200 }
        );
         SuccessResponse.cookies.set({
                name:"token",
                value:"auth_token",
                secure:true,
                httpOnly:true,
                maxAge: 60 * 60 , // 1 hr Session
                path:"/"
            })
        return SuccessResponse; 

    } catch (error) {
        console.error("❌ Login Failed:", error.message);
        return NextResponse.json(
            { success: false, message: "Failed to login" },
            { status: 500 }
        );
    }
}