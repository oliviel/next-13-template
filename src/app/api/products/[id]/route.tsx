import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "../../../../../prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params: { id } }: Props) {
  const demo = request;

  console.log("REQUEST ===", demo);

  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "product not found" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params: { id } }: Props) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }

  const product = await prisma.product.update({
    where: {
      id: Number(id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "product not found" },
      {
        status: 404,
      }
    );
  }

  return NextResponse.json(product);
}

export async function DELETE(request: NextRequest, { params: { id } }: Props) {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!product) {
    return NextResponse.json(
      { error: "product not found" },
      {
        status: 404,
      }
    );
  }

  const deletedProduct = await prisma.product.delete({
    where: {
      id: Number(id),
    },
  });

  return NextResponse.json(deletedProduct);
}
