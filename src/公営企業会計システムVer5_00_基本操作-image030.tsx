import React from 'react';

// TypeScript interface for props
interface FileListProps {
  files: Array<{
    name: string;
    lastModified: string;
    size: string;
    type: "directory" | "file";
  }>;
  onFilterChange: (filterText: string) => void;
}

// FileList component
const FileList: React.FC<FileListProps> = ({ files, onFilterChange }) => {
  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">公営企業会計システムのヘルプ</h1>
      <input
        type="text"
        placeholder="filter contents"
        className="border p-2 mb-4 w-full"
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Last modified</th>
            <th className="py-2">Size</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">
                {file.type === "directory" ? "📁" : "📄"} {file.name}
              </td>
              <td className="py-2">{file.lastModified}</td>
              <td className="py-2">{file.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
```