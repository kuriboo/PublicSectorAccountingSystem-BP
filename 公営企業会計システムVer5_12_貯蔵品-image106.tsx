```tsx
import React from 'react';

type SystemManagementProps = {
  terminalSettingCode: number;
  systemEvaluationCode: number;
  setPlannedLoading: boolean;
  setPaymentLoading: boolean;
  outputSmallFraction: boolean;
  averageTransferAdjustment: boolean;
  reportOutput: boolean;
  auditEndDate: string;
};

const SystemManagement: React.FC<SystemManagementProps> = ({
  terminalSettingCode,
  systemEvaluationCode,
  setPlannedLoading,
  setPaymentLoading,
  outputSmallFraction,
  averageTransferAdjustment,
  reportOutput,
  auditEndDate,
}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h1 className="text-xl font-bold mb-4">貯蔵品システム管理保守</h1>
      <div className="mb-4">
        <p>端数設定区分コード: {terminalSettingCode}</p>
        <p>システム評価方法区分コード: {systemEvaluationCode}</p>
      </div>
      <div className="mb-4">
        <p>予定負担行為初期値フラグ: {setPlannedLoading ? '起こす' : '起こさない'}</p>
        <p>支出負担行為初期値フラグ: {setPaymentLoading ? '起こす' : '起こさない'}</p>
        <p>出庫時小数点印字フラグ: {outputSmallFraction ? '小数点印字あり' : '小数点印字なし'}</p>
        <p>移動平均端数調整: {averageTransferAdjustment ? 'する' : 'しない'}</p>
        <p>入庫・出庫通知書出力フラグ: {reportOutput ? '発行する' : '発行しない'}</p>
      </div>
      <div>
        <p>監査終了年月: {auditEndDate}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button className="mx-2 px-4 py-2 bg-blue-500 text-white rounded">OK</button>
        <button className="mx-2 px-4 py-2 bg-gray-300 text-black rounded">クリア</button>
        <button className="mx-2 px-4 py-2 bg-red-500 text-white rounded">終了</button>
      </div>
    </div>
  );
};

export default SystemManagement;
```