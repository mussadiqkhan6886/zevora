import { connectDB } from "@/lib/config/database";
import ProductSchema from "@/lib/models/ProductSchema";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();

    const products = await ProductSchema.find().lean();

    const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
<channel>
<title>Zevora Products</title>
<link>${siteUrl}</link>
<description>Zevora Product Feed</description>

${products
  .map((product) => {
    const price =
      product.onSale && product.salePrice
        ? product.salePrice
        : product.price;

    return `
<item>
<g:id>${product._id}</g:id>

<g:title><![CDATA[${product.name}]]></g:title>

<g:description><![CDATA[
${product.description}
]]></g:description>

<g:link>${siteUrl}/products/${product.slug}</g:link>

<g:image_link>${product.images[0]}</g:image_link>

<g:availability>${
      product.variants?.some((v: {stock: number}) => v.stock > 0)
        ? "in stock"
        : "out of stock"
    }</g:availability>

<g:condition>new</g:condition>

<g:price>${price.toFixed(2)} PKR</g:price>

<g:brand>Zevora</g:brand>

<g:product_type>${product.category}</g:product_type>

</item>
`;
  })
  .join("")}

</channel>
</rss>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to generate feed",
      },
      {
        status: 500,
      }
    );
  }
}