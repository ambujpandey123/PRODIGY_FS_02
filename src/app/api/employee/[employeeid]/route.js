import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    try {
        const { employeeid } = await params;
        if (!employeeid) {
            return NextResponse.json({ success: false, message: "Employee ID is required" }, { status: 400 });
        }
        const payload = await request.json();
        const [result] = await db.query(
            'UPDATE employee SET name = ?, salary = ?, department = ?, destination = ? WHERE id = ?',
            [payload.name, payload.salary, payload.department, payload.destination, employeeid]
        );
        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error('❌ Update Failed:', error.message);
        return NextResponse.json({ success: false, message: "failed to update data" }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    try {
        const { employeeid } = await params;
        if (!employeeid) {
            return NextResponse.json({ success: false, message: "Employee ID is required" }, { status: 400 });
        }
        const [rows] = await db.query(
            'SELECT * FROM employee WHERE id = ?',
            [employeeid]
        );
        return NextResponse.json({ data: rows[0], success: true });
    } catch (error) {
        console.error('❌ Fetch Failed:', error.message);
        return NextResponse.json({ success: false, message: "failed to fetch data" }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { employeeid } = await params;
        if (!employeeid) {
            return NextResponse.json({ success: false, message: "Employee ID is required" }, { status: 400 });
        }
        const [result] = await db.query(
            'DELETE FROM employee WHERE id = ?',
            [employeeid]
        );
        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error('❌ Delete Failed:', error.message);
        return NextResponse.json({ success: false, message: "failed to delete data" }, { status: 500 });
    }
}