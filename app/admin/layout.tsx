import React from "react";

export const metadata = {
  title: "Admin Panel - JSON Editor",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
        <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      </nav>
      <main className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">{children}</main>
    </div>
  );
}
