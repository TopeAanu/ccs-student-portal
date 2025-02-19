// app/api/auth/signup/route.js
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

const client = new MongoClient(process.env.MONGODB_URI);

export async function POST(request) {
  try {
    const { username, password } = await request.json();
    
    await client.connect();
    const db = client.db();
    
    const existingUser = await db.collection("student-portal").findOne({ username });
    
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    await db.collection("student-portal").insertOne({
      username,
      password: hashedPassword,
    });
    
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}