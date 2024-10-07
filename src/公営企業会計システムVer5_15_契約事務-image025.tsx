import React from 'react';

// Props Type Definition
interface FormProps {
  fiscalYear: number;
  department: string;
  section: string;
  projectNumber: string;
  expectedNumber: string;
  assistanceRate: string;
  projectName: string;
  projectLocation: string;
  contractType: string;
  onRegister: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const RegistrationForm: React.FC<FormProps> = ({
  fiscalYear,
  department,
  section,
  projectNumber,
  expectedNumber,
  assistanceRate,
  projectName,
  projectLocation,
  contractType,
  onRegister,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-4">受付登録</h1>

      {/* Fiscal Year and Department */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <label>年度:</label>
          <span>{fiscalYear}</span>
        </div>
        <div className="flex justify-between">
          <label>受付区分:</label>
          <span>{department}</span>
        </div>
      </div>

      {/* Section and Expected Number */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <label>所属:</label>
          <span>{section}</span>
        </div>
        <div className="flex justify-between">
          <label>予定番号:</label>
          <span>{expectedNumber}</span>
        </div>
      </div>

      {/* Project Number */}
      <div className="flex justify-between my-4">
        <label>受付番号:</label>
        <span>{projectNumber}</span>
      </div>

      {/* Assistance Rate */}
      <div className="flex justify-between my-4">
        <label>補助率:</label>
        <span>{assistanceRate}%</span>
      </div>

      {/* Project name and location */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <label>件名:</label>
          <span>{projectName}</span>
        </div>
        <div className="flex justify-between">
          <label>工事名称場所:</label>
          <span>{projectLocation}</span>
        </div>
      </div>

      {/* Contract type */}
      <div className="flex justify-between my-4">
        <label>契約区分:</label>
        <span>{contractType}</span>
      </div>

      {/* Buttons */}
      <div className="flex justify-around mt-6">
        <button 
          onClick={onRegister} 
          className="bg-blue-500 text-white rounded-md px-4 py-2"
        >
          登録
        </button>
        <button 
          onClick={onEdit} 
          className="bg-gray-500 text-white rounded-md px-4 py-2"
        >
          訂正
        </button>
        <button 
          onClick={onDelete} 
          className="bg-red-500 text-white rounded-md px-4 py-2"
        >
          削除
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
