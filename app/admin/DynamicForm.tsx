"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type DynamicFormProps = {
  data: any;
  onChange: (newData: any) => void;
  path?: string;
};

// Helper function to deep clone data
const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

export default function DynamicForm({ data, onChange, path = "root" }: DynamicFormProps) {
  const [uploadingPath, setUploadingPath] = useState<string | null>(null);

  const handleUpload = async (file: File, currentPath: string) => {
    setUploadingPath(currentPath);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const json = await res.json();
      
      if (json.success) {
        onChange(json.url);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to upload file.");
    } finally {
      setUploadingPath(null);
    }
  };

  // Helper to determine if a string path implies it's a media file
  const isMediaField = (p: string) => {
    const lower = p.toLowerCase();
    return lower.includes("image") || lower.includes("img") || lower.includes("icon") || lower.includes("video") || lower.includes("photo") || lower.includes("url");
  };

  // Handle Primitives
  if (typeof data === "string") {
    const mediaField = isMediaField(path);

    return (
      <div className="flex flex-col space-y-2 w-full">
        {mediaField && data && (
           <div className="relative w-32 h-32 rounded border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
             <img src={data.startsWith('/') || data.startsWith('http') ? data : `/${data}`} alt="Preview" className="object-contain w-full h-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
           </div>
        )}
        <div className="flex space-x-2">
          <Input
            type="text"
            value={data}
            onChange={(e) => onChange(e.target.value)}
            placeholder={mediaField ? "/images/uploads/filename.jpg" : ""}
          />
          {mediaField && (
            <div className="shrink-0 relative">
              <input 
                type="file" 
                className="absolute inset-0 w-[100px] h-full opacity-0 cursor-pointer z-10"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleUpload(file, path);
                }}
              />
              <Button 
                type="button" 
                variant="outline"
                disabled={uploadingPath === path}
              >
                {uploadingPath === path ? "Uploading..." : "Upload"}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (typeof data === "number") {
    return (
      <Input
        type="number"
        value={data}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    );
  }

  if (typeof data === "boolean") {
    return (
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        checked={data}
        onChange={(e) => onChange(e.target.checked)}
      />
    );
  }

  if (data === null) {
    return <span className="text-gray-500 italic">null</span>;
  }

  // Handle Arrays
  if (Array.isArray(data)) {
    // If it's an array of objects, use the DataTable
    const isArrayOfObjects = data.length > 0 && typeof data[0] === "object" && data[0] !== null && !Array.isArray(data[0]);
    // If empty array, default to DataTable since usually arrays in this config structure hold objects (like sliders, faqs, etc)
    const renderTable = isArrayOfObjects || data.length === 0;

    if (renderTable) {
      // Need lazy import to avoid circular dependency since DataTable imports DynamicForm
      const DataTable = require('./DataTable').default;
      return <DataTable data={data} onChange={onChange} path={path} />;
    }

    // Fallback for arrays of primitives (e.g. simple lists of strings/numbers)
    return (
      <div className="space-y-4 border-l-4 border-blue-200 pl-4 py-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col space-y-2 bg-white p-3 rounded shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-2 z-10">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Item {index + 1}</span>
              <button
                type="button"
                className="text-red-500 hover:text-red-700 text-sm font-medium"
                onClick={() => {
                  const newData = deepClone(data);
                  newData.splice(index, 1);
                  onChange(newData);
                }}
              >
                Remove
              </button>
            </div>
            <DynamicForm
              data={item}
              onChange={(newVal) => {
                const newData = deepClone(data);
                newData[index] = newVal;
                onChange(newData);
              }}
              path={`${path}[${index}]`}
            />
          </div>
        ))}

        <button
          type="button"
          className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => {
            const newData = deepClone(data);
            newData.push(""); // Assuming strings for primitive lists based on the json shapes
            onChange(newData);
          }}
        >
          + Add Primitive Item
        </button>
      </div>
    );
  }

  // Handle Objects
  if (typeof data === "object") {
    return (
      <div className="space-y-4 pt-2 border-l-4 border-orange-200 pl-4 py-2">
        {Object.keys(data).map((key) => (
          <div key={key} className="flex flex-col space-y-1.5">
            <Label className="text-sm font-medium text-gray-700 capitalize">
              {key}
            </Label>
            <DynamicForm
              data={data[key]}
              onChange={(newVal) => {
                const newData = deepClone(data);
                newData[key] = newVal;
                onChange(newData);
              }}
              path={`${path}.${key}`}
            />
          </div>
        ))}
      </div>
    );
  }

  return <div>Unsupported data type</div>;
}
