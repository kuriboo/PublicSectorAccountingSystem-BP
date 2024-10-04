import React from 'react';

// TypeScript interface for component props
interface ReportProps {
  fiscalYear: string;
  budgetType: string;
  finalCheckValue: string;
  checkCount: number;
  calculationMethod: string;
  saleTaxCalc: string;
  inputTaxExclusion: string;
  designatedIncomeAdjustment: string;
}

const TaxReport: React.FC<ReportProps> = ({
  fiscalYear,
  budgetType,
  finalCheckValue,
  checkCount,
  calculationMethod,
  saleTaxCalc,
  inputTaxExclusion,
  designatedIncomeAdjustment,
}) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="text-xl font-bold mb-4 text-blue-700">
        予算納付税額算出
      </div>
      <div className="border rounded p-4 bg-white mb-4">
        <div className="text-lg font-bold mb-2">範囲指定</div>
        <div className="mb-2">
          <span className="font-semibold">会計年度: </span>{fiscalYear}
        </div>
        <div className="mb-2">
          <span className="font-semibold">予算編成区分: </span>{budgetType}
        </div>
        <div className="mb-2">
          <span className="font-semibold">最終査定値: </span>{finalCheckValue}
        </div>
        <div>
          <span className="font-semibold">査定回数: </span>{checkCount} 回
        </div>
      </div>
      <div className="border rounded p-4 bg-white">
        <div className="text-lg font-bold mb-2">消費税計算方法</div>
        <div className="mb-2">
          <span className="font-semibold">税額計算(仕入): </span>{calculationMethod}
        </div>
        <div className="mb-2">
          <span className="font-semibold">税額計算(売上): </span>{saleTaxCalc}
        </div>
        <div className="mb-2">
          <span className="font-semibold">仕入控除税額計算: </span>{inputTaxExclusion}
        </div>
        <div>
          <span className="font-semibold">
            特定収入による仕入控除税額の調整: 
          </span>{designatedIncomeAdjustment}
        </div>
      </div>
    </div>
  );
}

export default TaxReport;