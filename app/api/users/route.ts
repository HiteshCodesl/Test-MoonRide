import prismaClient from "@/app/config/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {

  const { email, name, phone } = await req.json()

  if (!email || !name || !phone) {
    return NextResponse.json('Email and password are required', { status: 400 })
  }

  const user = await prismaClient.profile.create({
    data: {
        name: name,
        email: email,
        phone: phone
    }
  })

  if(!user){
    return NextResponse.json('User not found', { status: 404 })
  } 
  return  NextResponse.json(user);

}

export async function GET(req: NextRequest) {

    const users = await prismaClient.profile.findMany();

    if(!users){ 
        return NextResponse.json('No users', { status: 404 })
    }
    return NextResponse.json(users);

}