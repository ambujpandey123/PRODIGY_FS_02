import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();

        // Basic validation
        if (
            !name || !email || !password ||
            name.length > 15 ||
            email.length > 20 ||
            password.length > 20
        ) {
            return NextResponse.json(
                { success: false, message: "Invalid input data" },
                { status: 400 }
            );
        }

        // Check if email already exists
        const [existing] = await db.query(
            "SELECT * FROM user WHERE email = ?",
            [email]
        );
        if (existing.length > 0) {
            return NextResponse.json(
                { success: false, message: "Email already exists" },
                { status: 409 }
            );
        }

        // Insert new user
        const [result] = await db.query(
            "INSERT INTO user (name, email, password) VALUES (?, ?, ?)",
            [name, email, password]
        );

        return NextResponse.json({ result, success: true }, { status: 201 });
    } catch (error) {
        console.error("❌ Signup Failed:", error.message);
        return NextResponse.json(
            { success: false, message: "Failed to signup" },
            { status: 500 }
        );
    }
}