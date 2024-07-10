import db from "@/database";
import Blog from "@/models/blogModel";

import { NextResponse } from "next/server";


// db();



export async function POST(req){

    const reqBody = await req.json();
    console.log(reqBody);
    const {title, description} = reqBody;
    
    const newBlog = await Blog.create({
        title,
        description
    });

    return NextResponse.json({
        message:"welcome to post method",
        data:newBlog
    })
}
