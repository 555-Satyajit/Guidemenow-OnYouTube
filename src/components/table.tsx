'use client';
import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';

export default function TopMics() {
  const data = React.useMemo(
    () => [
      { mic: 'Rode NT-USB', price: '$149', bestFor: 'Podcasts' },
      { mic: 'Shure SM7B', price: '$399', bestFor: 'Pro gear' },
      { mic: 'Fifine K669', price: '$35', bestFor: 'Starters' },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { header: 'Mic', accessorKey: 'mic' },
      { header: 'Price', accessorKey: 'price' },
      { header: 'Best For', accessorKey: 'bestFor' },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🥇 Top 3 Microphones for YouTube</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-left">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="px-4 py-2 border">
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-4 py-2 border">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
