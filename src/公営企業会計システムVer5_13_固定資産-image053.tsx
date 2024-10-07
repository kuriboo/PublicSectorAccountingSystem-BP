import React from 'react';

type AssetDataInputProps = {
  registrationYear: string;
  registrationMonth: string;
  registrationFiscalYear: string;
  assetNumber: string;
  subsection: string;
  detail: string;
  assetName: string;
  location: string;
  acquisitionYear: string;
  department: string;
  usefulLife: number;
  price: number;
  accumulatedDepreciation: number;
  netBookValue: number;
  depreciationAmount: number;
  financialSourceDetails: { sourceName: string; amount: number }[];
  onRegister: () => void;
  onClear: () => void;
  onEnd: () => void;
};

const AssetDataInput: React.FC<AssetDataInputProps> = ({
  registrationYear,
  registrationMonth,
  registrationFiscalYear,
  assetNumber,
  subsection,
  detail,
  assetName,
  location,
  acquisitionYear,
  department,
  usefulLife,
  price,
  accumulatedDepreciation,
  netBookValue,
  depreciationAmount,
  financialSourceDetails,
  onRegister,
  onClear,
  onEnd
}) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">減損予測データ入力</h1>
      {/* Registration Information */}
      <div className="flex mb-4">
        <div className="mr-4">
          <span>減損年月: </span>
          <span>{registrationYear}년 {registrationMonth}월</span>
        </div>
        <div>
          <span>減損年度: </span>
          <span>{registrationFiscalYear}</span>
        </div>
      </div>
      {/* Asset Information */}
      <div className="mb-4">
        <label className="block mb-2">資産番号</label>
        <input type="text" value={assetNumber} readOnly className="p-2 border rounded w-full" />
      </div>
      <div className="mb-4">
        <p>資産名称: {assetName}</p>
        <p>所在地: {location}</p>
      </div>
      <div className="flex mb-4">
        <div className="mr-4">取得年月: {acquisitionYear}</div>
        <div>部門: {department}</div>
      </div>
      {/* Financial Information */}
      <div className="mb-4">
        <h2 className="font-semibold mb-2">財源内訳</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border px-4 py-2">財源名称</th>
              <th className="border px-4 py-2">減損額</th>
            </tr>
          </thead>
          <tbody>
            {financialSourceDetails.map((source, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{source.sourceName}</td>
                <td className="border px-4 py-2">{source.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Depreciation Information */}
      <div className="flex mb-4">
        <div className="mr-4"><strong>財源金額:</strong> {price}</div>
        <div className="mr-4"><strong>減損額:</strong> {depreciationAmount}</div>
        <div><strong>帳簿価額:</strong> {netBookValue}</div>
      </div>
      {/* Buttons */}
      <div className="flex space-x-4">
        <button onClick={onRegister} className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded">クリア</button>
        <button onClick={onEnd} className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default AssetDataInput;
