import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { ordersTable } from "@/db/schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      address,
      city,
      postalCode,
      subtotal,
      discount,
      total,
      items,
    } = body;

    if (!name || !email || !address || !city || !postalCode || !items?.length) {
      return NextResponse.json(
        { error: "Please fill in all required shipping details" },
        { status: 400 }
      );
    }

    const orderNumber = "TK-" + Math.floor(100000 + Math.random() * 900000);

    const [newOrder] = await getDb()
      .insert(ordersTable)
      .values({
        orderNumber,
        customerName: name,
        customerEmail: email,
        shippingAddress: address,
        city,
        postalCode,
        phone: phone || "",
        subtotal: String(subtotal),
        discount: String(discount || 0),
        total: String(total),
        items,
        status: "confirmed",
      })
      .returning();

    return NextResponse.json({
      success: true,
      orderNumber: newOrder.orderNumber,
      orderId: newOrder.id,
    });
  } catch (error: unknown) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Failed to place order. Please try again." },
      { status: 500 }
    );
  }
}
