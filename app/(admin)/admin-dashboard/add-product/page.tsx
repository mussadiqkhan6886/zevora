'use client'
import { categories } from '@/lib/constants'
import Image from 'next/image'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import imageCompression from "browser-image-compression";
import axios from "axios"

export default function AddProductUI() {
  const [data, setData] = useState({
      name: '',
      slug: '',
      category: 'watches',
      price: '',
      salePrice: '',
      onSale: false,
      stock: '',
      description: '',
      keywords: '',
      sizes: '',
      volume: '',
      fragranceType: '',
  })

  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => formData.append(key, JSON.stringify(item)));
        } else if (value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      for (const file of files) {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1200,
          useWebWorker: true,
        });
        formData.append("images", compressedFile);
      }

      const res = await axios.post("/api/products", formData);


      if (res.status === 201) {
        setResult("✅ Product added successfully!");
        setData({
          name: '',
          slug: '',
          category: 'watches',
          price: '',
          salePrice: '',
          onSale: false,
          stock: '',
          description: '',
          keywords: '',
          sizes: '',
          volume: '',
          fragranceType: '',
        });
        setFiles([]);
        setPreviews([]);
      }
    } catch (err) {
      console.error(err);
      setResult("❌ Failed to add product. Try again.");
    } finally {
      setLoading(false);
    }
  };

   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);

    const newPreviews = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };



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
            <input required id='volume' type='number' placeholder='volume in ml' name='volume' value={data.volume} onChange={handleChange} className='input' />
          </div>

          <div className='div'>
            <label htmlFor="fragranceType">Fragrance Type:</label>
            <input required id='fragranceType' type='text' placeholder='Unisex, Male, Women' name='fragranceType' value={data.fragranceType} onChange={handleChange} className='input' />
          </div>
        </>}

        <div className='div'>
          <label htmlFor="price">Price:</label>
         <input required id='price' name="price" value={data.price} onChange={handleChange} placeholder="Price" type="number" className="input" />
        </div>

        {data.onSale &&  <input required name="salePrice" value={data.salePrice} onChange={handleChange} placeholder="Sale Price" type="number" className="input" />}
          
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
            <input required name="keywords" value={data.keywords} onChange={handleChange} placeholder="Keywords (comma separated)" className="input" />
          </div>
          
          <div className='div'>
            <label htmlFor="sizes">Sizes: </label>
            <input required id='sizes' name="sizes" value={data.sizes} onChange={handleChange} placeholder="Sizes (rings only, comma separated)" className="input" />
          </div>

          <div>
            <label className="block font-semibold mb-1">Product Images</label>
            <input type="file" multiple accept="image/*" required onChange={handleImageChange} className="w-full border rounded-lg p-2" />
            {previews.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-4">
                {previews.map((url, idx) => (
                  <Image key={idx} src={url} width={80} height={80} alt={`Preview ${idx}`} className="w-28 h-28 object-cover rounded-lg border" />
                ))}
              </div>
            )}
          </div>

          <button type='submit' disabled={loading} className="w-full mt-4 bg-black text-white py-2 rounded">
            {loading ? "Loading..." : "Add Product"}
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
