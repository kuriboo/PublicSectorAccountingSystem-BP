import React from 'react';

type Segment = {
  code: string;
  name: string;
};

type SegmentTableProps = {
  segments: Segment[];
  title: string;
  filterText?: string;
  onSegmentClick?: (segment: Segment) => void;
  className?: string;
};

const SegmentTable: React.FC<SegmentTableProps> = ({
  segments,
  title,
  filterText = '',
  onSegmentClick,
  className = '',
}) => {
  // Filter segments based on the filter text
  const filteredSegments = segments.filter((segment) =>
    segment.name.includes(filterText)
  );

  return (
    <div className={`p-4 bg-white shadow-lg ${className}`}>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-2 py-1">セグメント</th>
            <th className="border border-gray-300 px-2 py-1">名称</th>
          </tr>
        </thead>
        <tbody>
          {filteredSegments.map((segment) => (
            <tr
              key={segment.code}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => onSegmentClick && onSegmentClick(segment)}
            >
              <td className="border border-gray-300 px-2 py-1">{segment.code}</td>
              <td className="border border-gray-300 px-2 py-1">{segment.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SegmentTable;
