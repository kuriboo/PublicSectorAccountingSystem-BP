```tsx
import React, { FC } from 'react';

// Props interface
interface ContractInquiryFormProps {
  fiscalYearOptions: string[];
  receptionDivisionOptions: string[];
  industryOptions: { code: string; name: string }[];
  areaOptions: { code: string; name: string }[];

  // Callbacks
  onSearch: () => void;
  onClear: () => void;
  onOk: () => void;
  onEnd: () => void;
}

// Tailwind CSS classes used to style the component
const styles = {
  container: 'flex flex-col space-y-4 p-4 bg-gray-100',
  header: 'text-lg font-bold text-blue-900',
  formGroup: 'flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0',
  label: 'w-32 text-gray-700',
  input: 'border border-gray-300 rounded-md p-2',
  table: 'min-w-full border border-gray-300 bg-white',
  tableHeader: 'bg-blue-900 text-white',
  tableCell: 'border-b border-gray-300 p-2',
  buttonGroup: 'flex space-x-2 mt-4',
  button: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition',
};

// Functional Component
const ContractInquiryForm: FC<ContractInquiryFormProps> = ({
  fiscalYearOptions,
  receptionDivisionOptions,
  industryOptions,
  areaOptions,
  onSearch,
  onClear,
  onOk,
  onEnd,
}) => (
  <div className={styles.container}>
    <header className={styles.header}>契約実績問合せ</header>

    <div className={styles.formGroup}>
      <label className={styles.label}>実績年度</label>
      <select className={styles.input}>
        {fiscalYearOptions.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>

    <div className={styles.formGroup}>
      <label className={styles.label}>受付区分</label>
      <select className={styles.input}>
        {receptionDivisionOptions.map((division) => (
          <option key={division} value={division}>
            {division}
          </option>
        ))}
      </select>
    </div>

    <div className={styles.formGroup}>
      <label className={styles.label}>業種</label>
      <select className={styles.input}>
        {industryOptions.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>

    <div className={styles.formGroup}>
      <label className={styles.label}>地区</label>
      <select className={styles.input}>
        {areaOptions.map(({ code, name }) => (
          <option key={code} value={code}>
            {code} : {name}
          </option>
        ))}
      </select>
    </div>

    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <th className={styles.tableCell}>No.</th>
          <th className={styles.tableCell}>業者コード</th>
          <th className={styles.tableCell}>業者名</th>
          {/* ...Other headers... */}
        </tr>
      </thead>
      <tbody>
        {/* Data rows would be iteratively inserted here */}
      </tbody>
    </table>

    <div className={styles.buttonGroup}>
      <button className={styles.button} onClick={onSearch}>表示</button>
      <button className={styles.button} onClick={onClear}>クリア</button>
      <button className={styles.button} onClick={onOk}>OK</button>
      <button className={styles.button} onClick={onEnd}>終了</button>
    </div>
  </div>
);

export default ContractInquiryForm;
```