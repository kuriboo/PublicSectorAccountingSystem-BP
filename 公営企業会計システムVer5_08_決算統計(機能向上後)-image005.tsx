```tsx
import React from 'react';

// TypeScript type definition for component props
type ProjectDetailProps = {
  year: string;
  industry: string;
  projectLocation: string;
  managerName: string;
  populationSegment: string;
  managementBody: string;
  profitType: string;
  scaleType: string;
  drainageRelation: string;
  removalMethod: string;
  usageStartYear: string;
  accountingUnit: string;
};

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  year,
  industry,
  projectLocation,
  managerName,
  populationSegment,
  managementBody,
  profitType,
  scaleType,
  drainageRelation,
  removalMethod,
  usageStartYear,
  accountingUnit,
}) => {
  return (
    <div className="p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold mb-4">事業詳細情報</h1>
      <div className="mb-2">
        <span className="font-semibold">年度: </span>{year}
      </div>
      <div className="mb-2">
        <span className="font-semibold">業種・事業: </span>{industry}
      </div>
      <div className="mb-2">
        <span className="font-semibold">事業所在地: </span>{projectLocation}
      </div>
      <div className="mb-4">
        <span className="font-semibold">管理者名: </span>{managerName}
      </div>
      <div className="mb-2">
        <span className="font-semibold">人口区分: </span>{populationSegment}
      </div>
      <div className="mb-2">
        <span className="font-semibold">経営主体: </span>{managementBody}
      </div>
      <div className="mb-2">
        <span className="font-semibold">黒・赤字別: </span>{profitType}
      </div>
      <div className="mb-2">
        <span className="font-semibold">規模別: </span>{scaleType}
      </div>
      <div className="mb-2">
        <span className="font-semibold">流域下水道接続関係: </span>{drainageRelation}
      </div>
      <div className="mb-2">
        <span className="font-semibold">排除方式別: </span>{removalMethod}
      </div>
      <div className="mb-2">
        <span className="font-semibold">使用開始年度: </span>{usageStartYear}
      </div>
      <div>
        <span className="font-semibold">会計単位: </span>{accountingUnit}
      </div>
    </div>
  );
};

export default ProjectDetail;
```