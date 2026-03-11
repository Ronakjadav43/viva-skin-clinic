import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert the file data to a Buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename to prevent overwriting
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    // Sanitize the original filename to remove spaces and special characters. Let's just keep alphanumeric and dots
    const sanitizedOriginalName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const filename = `${uniquePrefix}-${sanitizedOriginalName}`;

    // Define the upload directory
    const uploadDir = path.join(process.cwd(), "public", "images", "uploads");
    const filepath = path.join(uploadDir, filename);

    // Write the file to the public directory
    await fs.writeFile(filepath, buffer);

    // Return the public URL that can be used in the src attribute
    const publicUrl = `/images/uploads/${filename}`;

    return NextResponse.json({ success: true, url: publicUrl });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "Failed to upload file" }, { status: 500 });
  }
}
