import cloudinary from "@/lib/config/cloudinary";
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

        const name = formData.get("name") as string
        const slug = formData.get("slug") as string
        const category = formData.get("category") as string
        const price = Number(formData.get("price"))
        const salePrice = Number(formData.get("salePrice"))
        const onSale = formData.get("onSale") === "true"
        const stock = Number(formData.get("stock"))
        const description = formData.get("description") as string
        const keywords = formData.getAll("keywords").filter((x): x is string => typeof x === "string").map(x => JSON.parse(x))
        const sizes = formData.getAll("sizes").filter((x): x is string => typeof x === "string").map(x => JSON.parse(x))
        const volume = formData.get("volume") as string
        const fragranceType = formData.get("fragranceType") as string

        const files = formData.getAll("images")


        if(!name || !description || !slug || !price){
            throw new Error("Missing required fields")
        }

        if(!files || files.length === 0){
            throw new Error("No Images Uploaded")
        }

        const uploadedImages: string[] = []

        for(const file of files){
            if(!(file instanceof File)){
                throw new Error("Invalid File Format")
            }

            const arrayBuffer = await file.arrayBuffer()
            const buffer = Buffer.from(arrayBuffer)

            const uploadResult = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream({
                        folder: "zevora",
                        resource_type: "image"
                    },
                    (error, result) => {
                        if(error) reject(error)
                        else resolve(result)
                    }
                )
                .end(buffer)
            })

            uploadedImages.push(uploadResult.secure_url)
        }

        const newProduct = new ProductSchema({
            name,
            category,
            slug,
            price,
            salePrice,
            onSale,
            stock,
            description,
            keywords,
            sizes,
            volume,
            fragranceType,
            images: uploadedImages
        })

        await newProduct.save()

        console.log(newProduct)
        return NextResponse.json({success:true, message: "Product Added Successfully", data: newProduct}, {status: 201})
        
    }catch(err){
        console.error("❌ Upload error:", err);
        return NextResponse.json({success: false, message: err.message || "Product Failed to Add"}, {status: 500})
    }

    
}