import React from 'react';

interface EconomicRegistrationProps {
  fiscalYear: string;
  contractor: string;
  approvalDate: string;
  approvalNumber: string;
  capital: number;
  businessHistory: {
    completedAmount: number;
    ownCapital: number;
    constructionWorkers: number;
    totalEmployees: number;
    workingYears: number;
  };
  laborWelfare: {
    retirementPayment: number;
    corporatePension: boolean;
    employmentInsurance: boolean;
    healthSubscription: boolean;
  };
  safety: {
    fatalAccidents: number;
    injuryAccidents: number;
  };
  onOk: () => void;
  onClear: () => void;
  onEnd: () => void;
}

const EconomicRegistration: React.FC<EconomicRegistrationProps> = ({
  fiscalYear,
  contractor,
  approvalDate,
  approvalNumber,
  capital,
  businessHistory,
  laborWelfare,
  safety,
  onOk,
  onClear,
  onEnd,
}) => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg max-w-2xl mx-auto text-sm">
      <h2 className="text-lg font-bold mb-4">経審 登録</h2>
      
      {/* Fiscal Year and Contractor */}
      <div className="mb-4">
        <div className="flex space-x-4">
          <div>
            <label>年度</label>
            <div>{fiscalYear}</div>
          </div>
          <div>
            <label>業者</label>
            <div>{contractor}</div>
          </div>
        </div>
      </div>

      {/* Approval Information */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label>許可日</label>
          <div>{approvalDate}</div>
        </div>
        <div>
          <label>許可番号</label>
          <div>{approvalNumber}</div>
        </div>
      </div>

      {/* Business Status */}
      <div className="mb-4 p-4 border rounded-md">
        <h3 className="font-bold mb-2">経営状況</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>資本金</label>
            <div>¥{capital.toLocaleString()} 千円</div>
          </div>
          <div>
            <label>完成高</label>
            <div>¥{businessHistory.completedAmount.toLocaleString()} 千円</div>
          </div>
          <div>
            <label>自己資本</label>
            <div>¥{businessHistory.ownCapital.toLocaleString()} 千円</div>
          </div>
          <div>
            <label>建設職員</label>
            <div>{businessHistory.constructionWorkers} 人</div>
          </div>
          <div>
            <label>総職員数</label>
            <div>{businessHistory.totalEmployees} 人</div>
          </div>
          <div>
            <label>営業年数</label>
            <div>{businessHistory.workingYears} 年</div>
          </div>
        </div>
      </div>

      {/* Labor Welfare Status */}
      <div className="mb-4 p-4 border rounded-md">
        <h3 className="font-bold mb-2">労働福祉の状況</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>退職一時金</label>
            <div>{laborWelfare.retirementPayment} 月分</div>
          </div>
          <div>
            <label>企業年金制度</label>
            <div>{laborWelfare.corporatePension ? '有' : '無'}</div>
          </div>
          <div>
            <label>雇用保険</label>
            <div>{laborWelfare.employmentInsurance ? '有' : '無'}</div>
          </div>
          <div>
            <label>健康保険厚生年金</label>
            <div>{laborWelfare.healthSubscription ? '加入' : '未加入'}</div>
          </div>
        </div>
      </div>

      {/* Safety Status */}
      <div className="mb-4 p-4 border rounded-md">
        <h3 className="font-bold mb-2">安全</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>死亡者数</label>
            <div>{safety.fatalAccidents} 名</div>
          </div>
          <div>
            <label>負傷者数</label>
            <div>{safety.injuryAccidents} 名</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex space-x-4">
        <button onClick={onOk} className="bg-blue-500 text-white py-2 px-4 rounded">OK</button>
        <button onClick={onClear} className="bg-gray-500 text-white py-2 px-4 rounded">クリア</button>
        <button onClick={onEnd} className="bg-red-500 text-white py-2 px-4 rounded">終了</button>
      </div>
    </div>
  );
};

export default EconomicRegistration;
```