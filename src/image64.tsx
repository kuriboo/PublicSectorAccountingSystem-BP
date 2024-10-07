import React from 'react';

// Define types for the component props
type TaxTableProps = {
  title: string;
  data: {
    section: string;
    subSections: Array<{
      name: string;
      values: number[];
    }>;
  }[];
};

// Reusable TaxTable component
const TaxTable: React.FC<TaxTableProps> = ({ title, data }) => {
  return (
    <div className="p-4 border rounded-lg">
      {/* Table Title */}
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      
      {/* Table */}
      <table className="min-w-full border-collapse">
        <thead>
          {/* Table Headers */}
          <tr className="bg-gray-200">
            <th className="border p-2">区分</th>
            <th className="border p-2">税率3%適用分</th>
            <th className="border p-2">税率4%適用分</th>
            <th className="border p-2">税率6.3%適用分</th>
            <th className="border p-2">税率部分合計</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {/* Main Section */}
              <tr className="bg-gray-100">
                <td className="border p-2" colSpan={5}>{item.section}</td>
              </tr>
              {item.subSections.map((subItem, subIndex) => (
                <tr key={subIndex}>
                  {/* Sub Sections and Values */}
                  <td className="border p-2">{subItem.name}</td>
                  {subItem.values.map((value, valueIndex) => (
                    <td className="border p-2" key={valueIndex}>{value.toLocaleString()}</td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaxTable;

// Example usage of the TaxTable component
/*
<TaxTable
  title="付表1-2 税率別消費税額計算表"
  data={[
    {
      section: '職税標準額',
      subSections: [
        { name: '租税控除前', values: [1000000, 196000, 6464295000, 6465491000] },
        // Add more subsections and values as needed
      ],
    },
    // Add more sections as needed
  ]}
/>
*/
```