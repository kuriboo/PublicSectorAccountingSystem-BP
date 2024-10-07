import React from 'react';

interface OutputSettingsProps {
  outputType: 'budget' | 'settlement';
  year: string;
  onOutputTypeChange: (type: 'budget' | 'settlement') => void;
}

const OutputSettings: React.FC<OutputSettingsProps> = ({ outputType, year, onOutputTypeChange }) => {
  return (
    <div className="border-2 border-gray-300 p-4 rounded-md shadow-md bg-white">
      <h2 className="text-blue-600 font-bold mb-2">出力内容</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <label className="font-bold">出力種別:</label>
          <label className="flex items-center">
            <input
              type="radio"
              name="outputType"
              checked={outputType === 'budget'}
              onChange={() => onOutputTypeChange('budget')}
            />
            <span className="ml-1">予算科目</span>
          </label>
          <label className="flex items-center ml-4">
            <input
              type="radio"
              name="outputType"
              checked={outputType === 'settlement'}
              onChange={() => onOutputTypeChange('settlement')}
            />
            <span className="ml-1">仕訳科目</span>
          </label>
        </div>
        <div>
          <label className="font-bold">出力年度:</label>
          <span className="ml-2">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default OutputSettings;