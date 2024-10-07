import React from 'react';

// Props Type Definition
interface NoteEditorProps {
  noteType: string;
  noteName: string;
  onChangeNoteType: (value: string) => void;
  onChangeNoteName: (value: string) => void;
  onConfirm: () => void;
  onClear: () => void;
  onCancel: () => void;
}

const NoteEditor: React.FC<NoteEditorProps> = ({
  noteType,
  noteName,
  onChangeNoteType,
  onChangeNoteName,
  onConfirm,
  onClear,
  onCancel,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      {/* Header Buttons */}
      <div className="flex space-x-2 mb-4">
        <button className="px-4 py-2 bg-gray-200 rounded">明細編集</button>
        <button className="px-4 py-2 bg-gray-200 rounded">行削除</button>
      </div>

      {/* Note Table */}
      <table className="w-full mb-4">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="p-2">注記種別</th>
            <th className="p-2">注記名称</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">{noteType}</td>
            <td className="p-2">{noteName}</td>
          </tr>
        </tbody>
      </table>

      {/* Input Fields */}
      <div className="flex space-x-4 mb-4">
        <input
          className="border p-2 w-full"
          type="text"
          value={noteType}
          onChange={(e) => onChangeNoteType(e.target.value)}
          placeholder="注記種別"
        />
        <input
          className="border p-2 w-full"
          type="text"
          value={noteName}
          onChange={(e) => onChangeNoteName(e.target.value)}
          placeholder="注記名称"
        />
      </div>

      {/* Control Buttons */}
      <div className="flex space-x-2">
        <button onClick={onConfirm} className="px-4 py-2 bg-gray-300 rounded">
          OK
        </button>
        <button onClick={onClear} className="px-4 py-2 bg-gray-300 rounded">
          クリア
        </button>
        <button onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
          キャンセル
        </button>
      </div>
    </div>
  );
};

export default NoteEditor;
