import db from "@/database";
import Blog from "@/models/blogModel";
import { NextResponse } from "next/server";







export async function GET(req){
    const findUser = await Blog.find();
    return NextResponse.json(
        {
        message:"user fined done",
        data:findUser

    })
}
