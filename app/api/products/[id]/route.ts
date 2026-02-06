import { connectDB } from "@/lib/config/database";
import ProductSchema from "@/lib/models/ProductSchema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    await connectDB()

    const {id} = (await params)

    try{
        const res = await ProductSchema.findById(id)
        return NextResponse.json({success: true, message: "Product Found", data: res}, {status: 200})
    }catch(err){
        return NextResponse.json({success: false, message: "Failed to fetch data"}, {status: 500})
    }   


}