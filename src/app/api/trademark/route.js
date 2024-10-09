import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  // Backend ile iletişim ve dosya kaydetme işlemleri burada yapılacak.

  return NextResponse.json({ message: "Başvurunuz başarıyla alındı." });
}
