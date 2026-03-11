"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import DynamicForm from "./DynamicForm";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type DataTableProps = {
  data: any[];
  onChange: (newData: any[]) => void;
  path: string;
};

// Helper function to deep clone data
const deepClone = (obj: any) => JSON.parse(JSON.stringify(obj));

export default function DataTable({ data, onChange, path }: DataTableProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [temporaryData, setTemporaryData] = useState<any>(null);

  // We infer the table columns based on the keys of the first item
  const columns = data.length > 0 && typeof data[0] === "object" && data[0] !== null
    ? Object.keys(data[0])
    : [];

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setTemporaryData(deepClone(data[index]));
    setIsModalOpen(true);
  };

  const handleDelete = (index: number) => {
    if (confirm("Are you sure you want to delete this row?")) {
      const newData = deepClone(data);
      newData.splice(index, 1);
      onChange(newData);
    }
  };

  const handleAddNew = () => {
    // Infer type of new item from first item or default to empty object
    let template: any = {};
    if (data.length > 0) {
      const firstItem = data[0];
      if (typeof firstItem === "object" && firstItem !== null) {
        template = Object.keys(firstItem).reduce((acc: any, key) => {
          const val = firstItem[key];
          if (typeof val === "string") acc[key] = "";
          else if (typeof val === "number") acc[key] = 0;
          else if (typeof val === "boolean") acc[key] = false;
          else if (Array.isArray(val)) acc[key] = [];
          else if (typeof val === "object" && val !== null) acc[key] = {};
          else acc[key] = null;
          return acc;
        }, {});
      }
    }
    setEditingIndex(data.length); // Next index
    setTemporaryData(template);
    setIsModalOpen(true);
  };

  const handleSaveModal = () => {
    const newData = deepClone(data);
    if (editingIndex !== null && editingIndex < newData.length) {
      newData[editingIndex] = temporaryData;
    } else {
      newData.push(temporaryData);
    }
    onChange(newData);
    setIsModalOpen(false);
    setEditingIndex(null);
    setTemporaryData(null);
  };

  return (
    <div className="w-full">
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddNew} className="bg-indigo-600 hover:bg-indigo-700">
          + Add New Row
        </Button>
      </div>

      <div className="rounded-md border bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              {columns.map((col) => (
                <TableHead key={col} className="uppercase text-xs font-semibold text-gray-500">
                  {col}
                </TableHead>
              ))}
              <TableHead className="text-right w-[150px] uppercase text-xs font-semibold text-gray-500">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + 2} className="h-24 text-center text-gray-500">
                  No data available. Click "Add New Row" to create an entry.
                </TableCell>
              </TableRow>
            ) : (
              data.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  <TableCell className="font-medium text-gray-500">
                    {rowIndex + 1}
                  </TableCell>
                  {columns.map((col) => {
                    const cellData = row[col];
                    // Very simple render for objects/arrays to keep table clean
                    let displayValue = cellData;
                    if (typeof cellData === "object" && cellData !== null) {
                      displayValue = Array.isArray(cellData) ? `[Array (${cellData.length})]` : "[Object]";
                    } else if (typeof cellData === "string" && cellData.length > 50) {
                      displayValue = cellData.substring(0, 50) + "...";
                    }

                    return (
                      <TableCell key={col} className="max-w-xs truncate" title={typeof cellData === "string" ? cellData : ""}>
                        {displayValue === "" ? <span className="text-gray-300 italic">empty</span> : String(displayValue)}
                      </TableCell>
                    );
                  })}
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(rowIndex)}
                      className="text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 mr-2"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(rowIndex)}
                      className="text-red-600 hover:text-red-900 hover:bg-red-50"
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingIndex !== null && editingIndex < data.length ? `Edit ${path.split('[')[0] || "Item"}` : "Add New Item"}
        description="Make changes to your data here. Click save when you're done."
        footer={
          <div className="flex justify-end gap-3 w-full">
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleSaveModal}
            >
              Save changes
            </Button>
          </div>
        }
      >
        <div className="py-2 space-y-4">
          <DynamicForm
            data={temporaryData}
            onChange={setTemporaryData}
            path={`${path}[${editingIndex}]`}
          />
        </div>
      </Modal>
    </div>
  );
}
