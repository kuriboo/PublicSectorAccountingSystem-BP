```tsx
import React from 'react';

type DocumentCheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const DocumentCheckbox: React.FC<DocumentCheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
        className="mr-2"
      />
      <label className="text-blue-800">{label}</label>
    </div>
  );
};

type DocumentSelectorProps = {
  documents: { id: string; label: string; }[];
  selectedDocuments: string[];
  onSelectionChange: (selectedIds: string[]) => void;
};

const DocumentSelector: React.FC<DocumentSelectorProps> = ({ documents, selectedDocuments, onSelectionChange }) => {
  const handleCheckboxChange = (id: string, checked: boolean) => {
    const newSelectedDocuments = checked
      ? [...selectedDocuments, id]
      : selectedDocuments.filter((docId) => docId !== id);
    onSelectionChange(newSelectedDocuments);
  };

  return (
    <div className="border p-4">
      <h3 className="mb-2">印刷対象帳票名</h3>
      {documents.map((doc) => (
        <DocumentCheckbox
          key={doc.id}
          label={doc.label}
          checked={selectedDocuments.includes(doc.id)}
          onChange={(checked) => handleCheckboxChange(doc.id, checked)}
        />
      ))}
    </div>
  );
};

type ControlButtonsProps = {
  onOk: () => void;
  onClear: () => void;
  onCancel: () => void;
};

const ControlButtons: React.FC<ControlButtonsProps> = ({ onOk, onClear, onCancel }) => (
  <div className="mt-4 flex justify-around">
    <button className="px-4 py-2 bg-gray-300 rounded" onClick={onOk}>
      OK
    </button>
    <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClear}>
      クリア
    </button>
    <button className="px-4 py-2 bg-gray-300 rounded" onClick={onCancel}>
      キャンセル
    </button>
  </div>
);

const PrintDialog: React.FC = () => {
  const [selectedDocuments, setSelectedDocuments] = React.useState<string[]>([]);

  const documents = [
    { id: '1', label: '負担行為とりまとめ伺書' },
    { id: '2', label: 'とりまとめ検収調書検請求書' }
  ];

  const handleOk = () => {
    // Handle OK action
    console.log('OK clicked', selectedDocuments);
  };

  const handleClear = () => {
    // Clear selections
    setSelectedDocuments([]);
  };

  const handleCancel = () => {
    // Handle Cancel action
    console.log('Cancel clicked');
  };

  return (
    <div className="p-4 border max-w-md mx-auto">
      <DocumentSelector 
        documents={documents} 
        selectedDocuments={selectedDocuments} 
        onSelectionChange={setSelectedDocuments} 
      />
      <ControlButtons onOk={handleOk} onClear={handleClear} onCancel={handleCancel} />
    </div>
  );
};

export default PrintDialog;
```