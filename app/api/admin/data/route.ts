import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const ALLOWED_FILES = [
  "about.json",
  "contact.json",
  "data.json",
  "gallery.json",
  "services.json",
  "the-specialist.json",
];

function getFilePath(filename: string) {
  if (!ALLOWED_FILES.includes(filename)) {
    return null;
  }
  return path.join(process.cwd(), "app", filename);
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const filename = searchParams.get("file");

  if (!filename) {
    return NextResponse.json({ error: "Filename is required" }, { status: 400 });
  }

  const filePath = getFilePath(filename);

  if (!filePath) {
    return NextResponse.json({ error: "File not allowed" }, { status: 403 });
  }

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error reading ${filename}:`, error);
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { filename, data } = body;

    if (!filename || !data) {
      return NextResponse.json(
        { error: "Filename and data are required" },
        { status: 400 }
      );
    }

    const filePath = getFilePath(filename);

    if (!filePath) {
      return NextResponse.json({ error: "File not allowed" }, { status: 403 });
    }

    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf8");
    
    return NextResponse.json({ success: true, message: "File updated successfully" });
  } catch (error) {
    console.error("Error writing file:", error);
    return NextResponse.json({ error: "Failed to write file" }, { status: 500 });
  }
}
