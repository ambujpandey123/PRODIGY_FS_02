import { db } from "@/app/lib/db"; 
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const payload = await request.json();
        const [result] = await db.query(
            'INSERT INTO employee (name, salary, department, destination) VALUES (?, ?, ?, ?)',
            [payload.name, payload.salary, payload.department, payload.destination]
        );
        return NextResponse.json({ result, success: true }, { status: 201 });
    } catch (error) {
        console.error('❌ Insert Failed:', error.message);
        return NextResponse.json({ success: false, message: "failed to insert data" }, { status: 500 });
    }
}

export async function GET() {
    try {
        const [rows] = await db.query('SELECT * FROM employee');
        // console.log('✅ MySQL Connected. Result:', rows);
        return NextResponse.json({ result: rows, success: true }, { status: 200 });
    } catch (error) {
        console.error('❌ Connection Failed:', error.message);
        return NextResponse.json({ success: false, message: "failed to fetch data" }, { status: 500 });
    }

}