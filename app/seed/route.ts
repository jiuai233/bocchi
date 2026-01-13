import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await sql`
      CREATE TABLE IF NOT EXISTS guestbook (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
        return NextResponse.json({ message: "Database created successfully! (表创建成功)" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
