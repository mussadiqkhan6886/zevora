// nodemailer order email template function
export const getOrderConfirmationEmail = (order: any) => {
  const { userDetails, shippingAddress, paymentMethod, items, totalPrice, notes, productId } = order;

  const itemsHtml = items.map((item: any) => `
    <tr style="border-bottom:1px solid #ddd;">
      <td style="padding:8px;">
        <img src="${item.image}" width="50" height="50" style="object-fit:cover; border-radius:5px;" />
      </td>
      <td style="padding:8px;">${item.name}${item.variant !== "default" ? ` - ${item.variant}` : ''}</td>
      <td style="padding:8px;">${item.quantity}</td>
      <td style="padding:8px;">${item.onSale ? item.salePrice! * item.quantity : item.price * item.quantity} PKR</td>
    </tr>
  `).join("");

  return `
  <div style="font-family: Arial, sans-serif; color:#333; line-height:1.5; max-width:600px; margin:0 auto; padding:20px; background-color:#f9f9f9;">
    <h2 style="color:#222;">Thank you for your order!</h2>
    <p>Hi <strong>${userDetails.fullName}</strong>,</p>
    <p>We’ve received your order <strong>#${productId}</strong> and it is being processed.</p>

    <h3 style="margin-top:20px; border-bottom:1px solid #ddd; padding-bottom:5px;">Order Details</h3>
    <table style="width:100%; border-collapse:collapse;">
      <thead>
        <tr>
          <th style="text-align:left; padding:8px;">Item</th>
          <th style="text-align:left; padding:8px;">Name</th>
          <th style="text-align:left; padding:8px;">Qty</th>
          <th style="text-align:left; padding:8px;">Price</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>

    <div style="margin-top:20px;">
      <p><strong>Subtotal:</strong> ${totalPrice - (totalPrice >= 2000 ? 0 : 250)} PKR</p>
      <p><strong>Shipping:</strong> ${totalPrice >= 2000 ? "Free Shipping" : "250 PKR"}</p>
      <p style="font-size:18px;"><strong>Total:</strong> ${totalPrice} PKR</p>
    </div>

    <h3 style="margin-top:20px; border-bottom:1px solid #ddd; padding-bottom:5px;">Shipping Address</h3>
    <p>
      ${shippingAddress.address}, ${shippingAddress.city}<br />
      Postal Code: ${shippingAddress.postalCode || "N/A"}<br />
      Phone: ${userDetails.phone}<br />
      Email: ${userDetails.email || "N/A"}
    </p>

    <h3 style="margin-top:20px; border-bottom:1px solid #ddd; padding-bottom:5px;">Payment Method</h3>
    <p>${paymentMethod === "cod" ? "Cash on Delivery" : "Bank Transfer"}</p>

    ${notes ? `<h3 style="margin-top:20px;">Notes:</h3><p>${notes}</p>` : ''}

    <p style="margin-top:30px;">If you have any questions, feel free to reply to this email. Thank you for shopping with us!</p>
    <p style="margin-top:20px; color:#777; font-size:12px;">Zevora | Customer Service</p>
  </div>
  `;
};
