import React from 'react';

type TaxProcessingComponentProps = {
  fiscalYear: string;
  startDate: string;
  endDate: string;
  isDeclarationTargetYear: boolean;
  isFirstLawComplianceYear: boolean;
  methodSelection: 'totalCalculation' | 'proportionCalculation';
  excludeTaxMethod: 'individualAllocation' | 'batchAllocation';
  useTaxRatePercentage: boolean;
  taxRatePercentage: number;
};

const TaxProcessingComponent: React.FC<TaxProcessingComponentProps> = ({
  fiscalYear,
  startDate,
  endDate,
  isDeclarationTargetYear,
  isFirstLawComplianceYear,
  methodSelection,
  excludeTaxMethod,
  useTaxRatePercentage,
  taxRatePercentage,
}) => {
  return (
    <div className="p-4 bg-white border shadow-md rounded-md space-y-4">
      <div className="font-bold text-xl">消費税処理マスタ</div>

      <div className="space-y-2">
        <div className="font-semibold">会計年度</div>
        <input 
          type="text" 
          value={fiscalYear} 
          className="border p-2 rounded-md w-full"
        />
      </div>

      <div className="space-y-2">
        <div className="font-semibold">課税期間</div>
        <div className="flex space-x-2">
          <input 
            type="text" 
            value={startDate} 
            className="border p-2 rounded-md w-full"
          />
          <span>〜</span>
          <input 
            type="text" 
            value={endDate} 
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={isDeclarationTargetYear} 
            className="mr-2"
          />
          <span>申告対象年度</span>
        </div>

        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={isFirstLawComplianceYear} 
            className="mr-2"
          />
          <span>法適化初年度</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-semibold">計算方法</div>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <input 
              type="radio" 
              checked={methodSelection === 'totalCalculation'} 
              className="mr-2"
            />
            <span>積上計算</span>
          </div>
          <div className="flex items-center">
            <input 
              type="radio" 
              checked={methodSelection === 'proportionCalculation'} 
              className="mr-2"
            />
            <span>割戻計算</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-semibold">仕入控除税額計算方法</div>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input 
                type="radio" 
                checked={excludeTaxMethod === 'individualAllocation'} 
                className="mr-2"
              />
              <span>個別対応方式</span>
            </div>
            <div className="flex items-center">
              <input 
                type="radio" 
                checked={excludeTaxMethod === 'batchAllocation'} 
                className="mr-2"
              />
              <span>一括比例配分方式</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-semibold">課税売上割合に準ずる割合</div>
        <div className="flex items-center space-x-2">
          <input 
            type="checkbox" 
            checked={useTaxRatePercentage} 
            className="mr-2"
          />
          <input 
            type="number" 
            value={taxRatePercentage} 
            className="border p-2 rounded-md w-16"
            disabled={!useTaxRatePercentage}
          />
          <span>%</span>
        </div>
      </div>
    </div>
  );
};

export default TaxProcessingComponent;