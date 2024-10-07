import React from 'react';

// 祝日の型定義
type Holiday = {
  date: string;
  name: string;
};

// プロパティの型定義
interface HolidayListProps {
  holidays: Holiday[];
}

// HolidayListコンポーネント
const HolidayList: React.FC<HolidayListProps> = ({ holidays }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">日本の祝日一覧</h2>
      <ul className="space-y-2">
        {holidays.map((holiday, index) => (
          <li key={index} className="flex justify-between border-b pb-2">
            <span className="font-medium">{holiday.date}</span>
            <span>{holiday.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// サンプルデータ
const holidays: Holiday[] = [
  { date: '2020/1/1', name: '元日' },
  { date: '2020/1/13', name: '成人の日' },
  { date: '2020/2/11', name: '建国記念の日' },
  { date: '2020/2/23', name: '天皇誕生日' },
  { date: '2020/2/24', name: '振替休日' },
  { date: '2020/3/20', name: '春分の日' },
  { date: '2020/4/29', name: '昭和の日' },
  { date: '2020/5/3', name: '憲法記念日' },
  { date: '2020/5/4', name: 'みどりの日' },
  { date: '2020/5/5', name: 'こどもの日' },
  { date: '2020/5/6', name: '振替休日' },
  { date: '2020/7/23', name: '海の日' },
  { date: '2020/7/24', name: 'スポーツの日' },
  { date: '2020/8/10', name: '山の日' },
  { date: '2020/9/21', name: '敬老の日' },
  { date: '2020/9/22', name: '秋分の日' },
  { date: '2020/11/3', name: '文化の日' },
  { date: '2020/11/23', name: '勤労感謝の日' },
  { date: '2021/1/1', name: '元日' },
  { date: '2021/1/11', name: '成人の日' },
  { date: '2021/2/11', name: '建国記念の日' },
  { date: '2021/2/23', name: '天皇誕生日' },
  { date: '2021/3/20', name: '春分の日' },
  { date: '2021/4/29', name: '昭和の日' },
  { date: '2021/5/3', name: '憲法記念日' },
  { date: '2021/5/4', name: 'みどりの日' },
  { date: '2021/5/5', name: 'こどもの日' },
  { date: '2021/7/19', name: '海の日' },
  { date: '2021/8/11', name: '山の日' },
  { date: '2021/9/20', name: '敬老の日' },
  { date: '2021/9/23', name: '秋分の日' },
  { date: '2021/11/3', name: '文化の日' },
  { date: '2021/11/23', name: '勤労感謝の日' }
];

// 使用例
const App: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <HolidayList holidays={holidays} />
    </div>
  );
}

export default App;
