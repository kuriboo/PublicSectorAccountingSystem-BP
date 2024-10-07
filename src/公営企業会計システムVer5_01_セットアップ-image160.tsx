import React from 'react';

// Tailwind CSS classes for styling
const styles = {
  container: 'p-4 bg-white shadow rounded',
  titleBar: 'bg-blue-600 text-white p-2 rounded-t',
  section: 'p-2',
  table: 'w-full mt-4 border-t border-l',
  tableHeader: 'bg-blue-800 text-white border-b',
  tableRow: 'border-b',
  button: 'bg-blue-500 text-white py-1 px-3 rounded mr-2 hover:bg-blue-600',
  input: 'border p-1 rounded',
};

// TypeScript interface for component props
interface DocumentEditProps {
  documentId: string;
  executionPosition: number;
  selectedText: string;
  lines: string[];
  onEditLine: (index: number) => void;
  onDeleteLine: (index: number) => void;
  onAddLine: (text: string) => void;
}

const DocumentEdit: React.FC<DocumentEditProps> = ({
  documentId,
  executionPosition,
  selectedText,
  lines,
  onEditLine,
  onDeleteLine,
  onAddLine,
}) => {
  return (
    <div className={styles.container}>
      {/* Title Bar */}
      <div className={styles.titleBar}>文章マスタ保守</div>
      
      {/* Document Info */}
      <div className={styles.section}>
        <div>
          <span>画像ID: </span>
          <span className={styles.input}>{documentId}</span>
        </div>
        <div>
          <span>入力執行: </span>
          <span className={styles.input}>{executionPosition}</span>
        </div>
        <div>
          <span>選択文章: </span>
          <span className={styles.input}>{selectedText}</span>
        </div>
      </div>

      {/* Button Actions */}
      <div className={styles.section}>
        <button className={styles.button} onClick={() => onEditLine(executionPosition)}>明細編集</button>
        <button className={styles.button} onClick={() => onDeleteLine(executionPosition)}>行削除</button>
      </div>

      {/* Table for Document Lines */}
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            <th>文章</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line, index) => (
            <tr key={index} className={styles.tableRow}>
              <td>{line}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Line Section */}
      <div className={styles.section}>
        <div className="flex items-center">
          <input type="text" className={styles.input} placeholder="文章" />
          <button className={styles.button} onClick={() => onAddLine('新しい文章')}>行確定</button>
          <button className={styles.button}>行キャンセル</button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-4 flex justify-end">
        <button className={styles.button}>OK</button>
        <button className={styles.button}>クリア</button>
        <button className={styles.button}>終了</button>
      </div>
    </div>
  );
};

export default DocumentEdit;
