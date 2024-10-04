import { FC } from 'react';

// 型定義
interface YearSelectProps {
  // 現在の値
  year: number;
  // 年度の最小値
  minYear: number;
  // 年度の最大値
  maxYear: number;
  // 年度が選択された時のハンドラ
  onYearChange: (year: number) => void;
}

// コンポーネント
const YearSelect: FC<YearSelectProps> = ({ year, minYear, maxYear, onYearChange }) => {
  // 年度変更時の処理
  const handleYearChange = (newYear: number) => {
    if (newYear >= minYear && newYear <= maxYear) {
      onYearChange(newYear);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="bg-blue-100 px-2 rounded">平成</span>
      <input
        type="number"
        value={year}
        min={minYear}
        max={maxYear}
        onChange={(e) => handleYearChange(Number(e.target.value))}
        className="w-16 border rounded px-1"
      />
      <span>年度</span>
    </div>
  );
};

export default YearSelect;