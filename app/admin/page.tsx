"use client";

import React, { useState, useEffect } from "react";
import DynamicForm from "./DynamicForm";

const PAGE_MAPPING = [
  { file: "data.json", title: "Home Page" },
  { file: "about.json", title: "About Us" },
  { file: "services.json", title: "Services Page" },
  { file: "the-specialist.json", title: "The Specialist" },
  { file: "gallery.json", title: "Gallery" },
  { file: "contact.json", title: "Contact Us" },
];

export default function AdminPage() {
  const [selectedFile, setSelectedFile] = useState<string>(PAGE_MAPPING[0].file);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchData = async (filename: string) => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/data?file=${filename}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const json = await res.json();
      setData(json);
    } catch (err: any) {
      console.error(err);
      setMessage({ type: "error", text: "Error loading data" });
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedFile);
  }, [selectedFile]);

  const handleSave = async () => {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch(`/api/admin/data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filename: selectedFile, data }),
      });
      if (!res.ok) throw new Error("Failed to save data");
      setMessage({ type: "success", text: "Data saved successfully!" });
    } catch (err: any) {
      console.error(err);
      setMessage({ type: "error", text: "Error saving data" });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">JSON Files</h2>
          <ul className="space-y-2">
            {PAGE_MAPPING.map(({ file, title }) => (
              <li key={file}>
                <button
                  onClick={() => setSelectedFile(file)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-colors shadow-sm flex flex-col ${
                    selectedFile === file
                      ? "bg-indigo-50 border-indigo-200 border-2"
                      : "bg-gray-50 border border-gray-200 hover:bg-white hover:border-gray-300"
                  }`}
                >
                  <span className={`font-semibold ${selectedFile === file ? "text-indigo-700" : "text-gray-800"}`}>
                    {title}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">{file}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 min-w-0">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800">
              Editing: {PAGE_MAPPING.find(p => p.file === selectedFile)?.title || selectedFile}
            </h2>
            <div className="flex items-center space-x-4">
              {message && (
                <span className={`text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
                  {message.text}
                </span>
              )}
              <button
                onClick={handleSave}
                disabled={loading || saving || !data}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : data ? (
              <DynamicForm data={data} onChange={setData} />
            ) : (
              <div className="text-center py-12 text-gray-500">No data available or error loading file.</div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
