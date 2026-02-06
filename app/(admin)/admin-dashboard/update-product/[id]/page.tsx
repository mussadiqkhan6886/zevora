'use client';

import { categories } from '@/lib/constants';
import { productType } from '@/type'
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, {ChangeEvent, useEffect, useMemo, useState} from 'react'
import imageCompression from "browser-image-compression";

const page = ({params}: {params: Promise<{id: string}>}) => {

    const [data, setData] = useState({
        name: '',
        slug: '',
        category: 'watches',
        price: 0,
        salePrice: 0,
        onSale: false,
        stock: 0,
        description: '',
        keywords: [],
        sizes: [],
        volume: '',
        fragranceType: '',
    })

    const [files, setFiles] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [existingImages, setExistingImages] = useState<string[]>([]);
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const fetchData = async () => {
            try{
                const {id} = (await params)
                setLoading(true)
                const res = await axios.get(`/api/products/${id}`)
                const product = res.data.data

                setData({
                    name: product.name,
                    slug: product.slug,
                    category: product.category,
                    price: product.price,
                    salePrice: product.salePrice || 0,
                    onSale: product.onSale || false,
                    stock: product.stock,
                    description: product.description,
                    keywords: product.keywords,
                    sizes: product.sizes || [],
                    volume: product.volume,
                    fragranceType: product.fragranceType,
                })

                setExistingImages(product.images || [])
            }catch(err: any){
                console.log(err)
                setResult(err.message)
            }finally{
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const toSlug = (str: string) =>
        str
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "");

    
        const productSlug = useMemo(() => toSlug(data.name), [data.name]);
    
        useEffect(() => {
        setData((prev) => ({
            ...prev,
            slug: productSlug,
        }));
        }, [productSlug]);
    
    
      const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        // @ts-ignore
        const { name, value, type, checked } = e.target;
        setData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      };

      const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
          if (!e.target.files) return;
      
          const selectedFiles = Array.from(e.target.files);
          setFiles((prev) => [...prev, ...selectedFiles]);
      
          const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
          setPreviews((prev) => [...prev, ...newPreviews]);
        };

    const handleDeleteExistingImage = async (imgUrl: string) => {
        try {
        const id = (await params).id;
        setExistingImages((prev) => prev.filter((url) => url !== imgUrl));
        await axios.patch(`/api/products/${id}`, {
            action: "deleteImage",
            imageUrl: imgUrl,
        });
        } catch (err) {
        console.error("Error deleting image:", err);
        }
    };

     const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const { id } = await params;
        try {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (Array.isArray(value)) {
            value.forEach((item) => formData.append(key, JSON.stringify(item)));
            } else if (typeof value === "boolean") {
            formData.append(key, value.toString());
            } else if (value) {
            formData.append(key, value as string);
            }
        });

        for (const file of files) {
            const compressed = await imageCompression(file, {
            maxSizeMB: 1,
            maxWidthOrHeight: 1200,
            useWebWorker: true,
            });
            formData.append("images", compressed);
        }

        const res = await axios.patch(`/api/products/${id}`, formData);

        if (res.status === 200) {
            setResult("✅ Product updated successfully!");
            setTimeout(() => router.push("/admin-dashboard/products-list"), 1500);
        }
        } catch (err) {
        console.error("Update failed:", err);
        setResult("❌ Failed to update product");
        } finally {
        setLoading(false);
        }
    };

     const handleCommaSeparatedChange = (
      e: React.ChangeEvent<HTMLInputElement>,
      field: 'keywords' | 'sizes'
    ) => {
      const rawValue = e.target.value;
    
      setData(prev => ({
        ...prev,
        [field]: rawValue
          .split(',')
          .map(item => item.trim()),
      }));
    };

    if(!data){
        return <main>
            <h2>Failed to fetched data</h2>
        </main>
    }

  return (
   <main className="p-2 md:p-8 bg-gray-50 min-h-screen max-w-6xl mx-auto">
           <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow">
             <h1 className="text-3xl text-center font-bold mb-4">Add Product</h1>
   
             <div className='div'>
               <label htmlFor="name">Product Name:</label>
               <input required id='name' autoComplete='off' name="name" value={data.name} onChange={handleChange} placeholder="Product Name" className="input" />
             </div>
   
           <div className='div'>
               <label htmlFor='category' className='mb-2 ml-1'>Category:</label>
             <select required id='category' name="category" value={data.category} onChange={handleChange} className="input">
               {categories.map(cat => (
                 <option key={cat} value={cat}>{cat}</option>
               ))}
             </select>
           </div>
   
           {data.category.includes("perfumes") && <>
   
             <div className='div'>
               <label htmlFor="volume">Volume:</label>
               <input required id='volume' type='number' placeholder='volume in ml' name='volume' value={data.volume as string} onChange={handleChange} className='input' />
             </div>
   
             <div className='div'>
               <label htmlFor="fragranceType">Fragrance Type:</label>
               <input required id='fragranceType' type='text' placeholder='Unisex, Male, Women' name='fragranceType' value={data.fragranceType as string} onChange={handleChange} className='input' />
             </div>
           </>}
   
           <div className='div'>
             <label htmlFor="price">Price:</label>
            <input required id='price' name="price" value={data.price} onChange={handleChange} placeholder="Price" type="number" className="input" />
           </div>
   
           {data.onSale &&  <input required name="salePrice" value={data.salePrice as number} onChange={handleChange} placeholder="Sale Price" type="number" className="input" />}
             
             <label className="flex gap-2 items-center my-2">
               <input type="checkbox" name="onSale" checked={data.onSale} onChange={handleChange} />
               On Sale
             </label>
   
             <div className='div'>
               <label htmlFor="stock">Stock</label>
               <input required id='stock' name="stock" value={data.stock} onChange={handleChange} placeholder="Stock Quantity" type="number" className="input" />
             </div>
   
   
             <textarea required name="description" value={data.description} onChange={handleChange} placeholder="Description" className="input h-24" />
   
             <div className='div'>
               <label htmlFor="keywords">Keywords: </label>
               <input required name="keywords" value={data.keywords}  onChange={(e) => handleCommaSeparatedChange(e, "keywords")} placeholder="Keywords (comma separated)" className="input" />
             </div>
             
             <div className='div'>
               <label htmlFor="sizes">Sizes: </label>
               <input id='sizes' name="sizes" value={data.sizes} onChange={(e) => handleCommaSeparatedChange(e, "sizes")} placeholder="Sizes (rings only, comma separated)" className="input" />
             </div>
   
            {existingImages.length > 0 && (
             <div className="mt-4">
               <p className="font-semibold mb-2">Existing Images:</p>
               <div className="flex flex-wrap gap-3">
                 {existingImages.map((url, i) => (
                   <div key={i} className="relative">
                     <Image src={url} width={90} height={90} alt="Existing" className="rounded border object-cover w-24 h-24" />
                     <button
                       type="button"
                       onClick={() => handleDeleteExistingImage(url)}
                       className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs"
                     >
                       ✕
                     </button>
                   </div>
                 ))}
               </div>
             </div>
           )}

             <div>
               <label className="block font-semibold mb-1">Upload Product Images</label>
               <input type="file" multiple accept="image/*" onChange={handleImageChange} className="w-full border rounded-lg p-2" />
               {previews.length > 0 && (
                 <div className="flex flex-wrap gap-3 mt-4">
                   {previews.map((url, idx) => (
                     <Image key={idx} src={url} width={80} height={80} alt={`Preview ${idx}`} className="w-28 h-28 object-cover rounded-lg border" />
                   ))}
                 </div>
               )}
             </div>
   
             <button type='submit' disabled={loading} className="w-full mt-4 bg-black text-white py-2 rounded">
               {loading ? "Loading..." : "Updating Product"}
             </button>
             <p>{result}</p>
           </form>
   
         {/* Tailwind helper */}
         <style jsx>{`
           .input {
             width: 100%;
             padding: 8px;
             border: 1px solid #ddd;
             border-radius: 6px;
             margin-bottom: 10px;
           }
           .div {
           border: 1px solid #ddd;
           padding: 12px 12px ;
           margin: 10px 0px;
           border-radius: 10px;
           }
           .div label {
             font-weight: 600;
             margin-bottom: 5px;
             display: inline-block;
           }
         `}</style>
       </main>
  )
}

export default page
