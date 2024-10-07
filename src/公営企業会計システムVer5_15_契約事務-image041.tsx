import React, { useState, ChangeEvent } from 'react';

// TypeScriptの型定義
interface ReceptionFormProps {
  onSubmit: () => void;
  onClear: () => void;
  onClose: () => void;
}

const ReceptionForm: React.FC<ReceptionFormProps> = ({ onSubmit, onClear, onClose }) => {
  const [year, setYear] = useState<string>('平成29年');
  const [category, setCategory] = useState<string>('工事');
  const [outputOrder, setOutputOrder] = useState<string>('予算担当課順');
  const [selectedIndustry, setSelectedIndustry] = useState<string[]>([]);
  const [department, setDepartment] = useState<string>('総務課');
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({
    start: '平成29年08月06日',
    end: '平成29年08月08日',
  });
  const [number, setNumber] = useState<string>('0000000');

  // 表示される業種リスト
  const industries = [
    '土木一式工事',
    '建築一式工事',
    '大工工事',
    '左官工事',
    'とび・土工・コンクリート工事',
  ];

  const handleIndustryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedIndustry((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  return (
    <div className="p-4 bg-gray-100">
      <div className="mb-4">
        <label className="block text-sm">年度</label>
        <select value={year} onChange={(e) => setYear(e.target.value)} className="border rounded">
          <option value="平成29年">平成29年</option>
          <option value="平成30年">平成30年</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm">受付区分</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border rounded">
          <option value="工事">工事</option>
          <option value="サービス">サービス</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm">出力順序</label>
        <div>
          <label>
            <input
              type="radio"
              name="outputOrder"
              value="予算担当課順"
              checked={outputOrder === '予算担当課順'}
              onChange={(e) => setOutputOrder(e.target.value)}
            />予算担当課順
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="outputOrder"
              value="受付番号順"
              checked={outputOrder === '受付番号順'}
              onChange={(e) => setOutputOrder(e.target.value)}
            />受付番号順
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm">業種</label>
        <div>
          {industries.map((industry) => (
            <div key={industry}>
              <label>
                <input
                  type="checkbox"
                  value={industry}
                  checked={selectedIndustry.includes(industry)}
                  onChange={handleIndustryChange}
                />{industry}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm">所属</label>
        <input
          type="text"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm">登録年月日</label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={dateRange.start}
            onChange={(e) => setDateRange((prev) => ({ ...prev, start: e.target.value }))}
            className="border rounded"
          />
          <span>〜</span>
          <input
            type="text"
            value={dateRange.end}
            onChange={(e) => setDateRange((prev) => ({ ...prev, end: e.target.value }))}
            className="border rounded"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm">受付番号</label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="border rounded"
        />
      </div>
      <div className="flex space-x-2">
        <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white px-4 py-2 rounded">クリア</button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">終了</button>
      </div>
    </div>
  );
};

export default ReceptionForm;
