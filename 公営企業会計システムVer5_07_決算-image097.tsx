```tsx
// Import necessary React and Next.js dependencies
import { FC } from 'react';

// Define the types for the component props
interface AccountingPeriodProps {
  fiscalYear: string;
  onFiscalYearChange: (year: string) => void;
  taxPeriod: string;
}

// Define a reusable component using TypeScript and Tailwind CSS
const AccountingPeriod: FC<AccountingPeriodProps> = ({ fiscalYear, onFiscalYearChange, taxPeriod }) => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold text-center mb-4">範囲指定</h2>
      
      <div className="flex justify-around items-center mb-6">
        <label className="text-sm font-semibold">会計年度</label>
        <div className="flex items-center space-x-2">
          <input
            value={fiscalYear}
            onChange={(e) => onFiscalYearChange(e.target.value)}
            className="border rounded-md p-1 text-center"
            type="text"
            placeholder="年度"
          />
          <span>年度</span>
        </div>
      </div>

      <div className="flex justify-around items-center">
        <div className="text-sm font-semibold">課税期間</div>
        <div className="text-center">
          <span>{taxPeriod}</span>
        </div>
      </div>
    </div>
  );
};

export default AccountingPeriod;

// Usage Example:

// import { useState } from 'react';
// import AccountingPeriod from './AccountingPeriod';

// const ExampleUsage = () => {
//   const [fiscalYear, setFiscalYear] = useState('平成31年');
//   const taxPeriod = '平成31年04月01日 ～ 令和02年03月31日';

//   return (
//     <AccountingPeriod 
//       fiscalYear={fiscalYear} 
//       onFiscalYearChange={setFiscalYear} 
//       taxPeriod={taxPeriod} 
//     />
//   );
// };
```