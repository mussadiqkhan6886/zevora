import { connectDB } from "@/lib/config/database"
import ProductSchema from "@/lib/models/ProductSchema"
import { NextRequest, NextResponse } from "next/server"

export const runtime = "nodejs";

export const GET = async () => {
    await connectDB()
    
    try{
        const products = await ProductSchema.find({})

        if(products){
            return NextResponse.json({message: "Fetched Successfully", data: products}, {status: 200})
        }else{
            return NextResponse.json({message: "Failed to fetched data", data: []}, {status: 404})
        }
    }catch(err){
        return NextResponse.json({message: "Failed fetching Products"})
    }
}

export const POST = async (req: NextRequest) => {
    await connectDB()

    try{
        const formData = await req.formData()

        const 
    }catch(err){

    }

    
}