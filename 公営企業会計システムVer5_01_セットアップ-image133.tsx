```tsx
import React from 'react';

// Props type definition
type MasterListFormProps = {
  onSubmit: () => void;
  onClear: () => void;
  onCancel: () => void;
};

// Tailwind CSS styles
const styles = {
  container: 'p-8 bg-gray-50 rounded-lg shadow-md',
  header: 'text-xl font-bold text-blue-600 mb-4',
  radioGroup: 'flex space-x-4 mb-4',
  radio: 'inline-flex items-center',
  inputGroup: 'flex items-center space-x-2 mb-4',
  input: 'border border-gray-300 rounded px-2 py-1 text-black',
  buttonGroup: 'flex space-x-4 mt-4',
  button: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
};

const MasterListForm: React.FC<MasterListFormProps> = ({ onSubmit, onClear, onCancel }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>相手先別振込先マスタリスト作成</h1>
      
      {/* Radio button group */}
      <div className={styles.radioGroup}>
        <label className={styles.radio}>
          <input type="radio" name="range" value="normal" className="mr-2" />
          通常相手先
        </label>
        <label className={styles.radio}>
          <input type="radio" name="range" value="temporary" className="mr-2" />
          一時相手先
        </label>
      </div>

      {/* Input fields */}
      <div className={styles.inputGroup}>
        <button className={styles.button}>相手先</button>
        <input type="text" className={styles.input} defaultValue="0000000000" />
        <span>~</span>
        <button className={styles.button}>相手先</button>
        <input type="text" className={styles.input} defaultValue="9999999999" />
      </div>

      {/* Action buttons */}
      <div className={styles.buttonGroup}>
        <button onClick={onSubmit} className={styles.button}>OK</button>
        <button onClick={onClear} className={styles.button}>クリア</button>
        <button onClick={onCancel} className={styles.button}>終了</button>
      </div>
    </div>
  );
};

export default MasterListForm;
```