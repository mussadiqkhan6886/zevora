import AddToCartButton from '@/components/customer/AddToCartButton';
import CardTwo from '@/components/customer/CardTwo';
import Images from '@/components/customer/Images';
import { connectDB } from '@/lib/config/database';
import { serif } from '@/lib/fonts';
import ProductSchema from '@/lib/models/ProductSchema';
import { productType } from '@/type';
import { Metadata } from 'next';
import React from 'react';

/* ---------------- METADATA ---------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  await connectDB();
  const { slug } = await params;

  const product = await ProductSchema.findOne({ slug }).lean();

  if (!product) {
    return {
      title: 'Product Not Found | Zevora',
      description: 'This product could not be found.',
    };
  }

  const ogImage = product.images?.[0] || '/logo.png';

  return {
    title: product.name,
    description: product.description?.slice(0, 160),
    alternates: {
      canonical: `/collections/${product.category}/${product.slug}`,
    },
    keywords: product.keywords,
    openGraph: {
      title: `${product.name} | Zevora`,
      description: product.description?.slice(0, 160),
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      images: [ogImage],
    },
  };
}

/* ---------------- PAGE ---------------- */

const Page = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  await connectDB();
  const { slug } = await params;

  const product = await ProductSchema.findOne({ slug }).lean();
  const productClient = JSON.parse(JSON.stringify(product))

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-medium">Product Not Found</h1>
      </main>
    );
  }

  const relatedProducts = await ProductSchema.aggregate([
    {
      $match: {
        category: product.category,
        _id: { $ne: product._id },
      },
    },
    { $sample: { size: 8 } },
  ]);


  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto">
      {/* PRODUCT SECTION */}
     <section className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-screen">
  {/* IMAGES */}
  <div>
    <Images images={product.images} name={product.name} />
  </div>

  {/* STICKY WRAPPER */}
  <div className="relative">
    <div className="sticky top-20 self-start flex flex-col gap-6 lg:pt-4">
      <h1 className={`${serif.className} text-4xl capitalize tracking-wide`}>
        {product.name}
      </h1>

      {/* PRICE */}
      <div className="flex items-center gap-4">
        <span
          className={`${
            product.onSale
              ? 'line-through text-zinc-400'
              : 'text-xl font-medium'
          }`}
        >
          Rs.{product.price}
        </span>

        {product.onSale && product.salePrice && (
          <>
            <span className="text-xl font-semibold">
              Rs.{product.salePrice}
            </span>
            <span className="text-xs px-3 py-1 rounded-full border">
              Sale
            </span>
          </>
        )}
      </div>

      {/* PERFUME INFO */}
      {product.category.includes('perfume') && (
        <div className="text-sm space-y-1">
          <p>
            <span className="font-semibold">Volume:</span>{' '}
            {product.variants?.[0]?.label}
          </p>
          <p>
            <span className="font-semibold">Fragrance Type:</span>{' '}
            {product.fragranceType}
          </p>
        </div>
      )}

      <AddToCartButton product={productClient} />

      {/* DESCRIPTION */}
      <div>
        <h3 className="font-semibold mb-1">Description</h3>
        <p className="text-zinc-800">{product.description}</p>
      </div>

      <p className="text-sm text-zinc-500">
        Shipping calculated at checkout
      </p>
    </div>
  </div>
</section>


      {/* RELATED PRODUCTS */}
      <section className="mt-20">
        <h3
          className={`${serif.className} text-2xl md:text-3xl mb-10`}
        >
          You May Also Like
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item: productType) => (
            <CardTwo
              key={item._id}
              collectionSlug={item.category}
              {...item}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
