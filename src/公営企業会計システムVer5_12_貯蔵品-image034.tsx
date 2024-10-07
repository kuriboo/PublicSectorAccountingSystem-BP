import React from "react";

type StepBoxProps = {
  title: string;
  description: string;
};

const StepBox: React.FC<StepBoxProps> = ({ title, description }) => (
  <div className="border p-4 w-full">
    <h2 className="text-lg font-bold mb-2">{title}</h2>
    <p className="text-sm">{description}</p>
  </div>
);

type ProcessFlowProps = {
  steps: StepBoxProps[];
  connectorLabel: string;
};

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps, connectorLabel }) => (
  <div className="flex items-center">
    <div className="flex-1">
      <StepBox title={steps[0].title} description={steps[0].description} />
    </div>
    <div className="flex-none mx-4 text-xs">{connectorLabel}</div>
    <div className="flex-1">
      <StepBox title={steps[1].title} description={steps[1].description} />
    </div>
  </div>
);

const ExampleUsage = () => (
  <ProcessFlow
    steps={[
      { title: "仮出庫入力", description: "仮出庫数を30個登録" },
      { title: "仮予定有出庫入力", description: "仮出庫数30個のうち実際は20個を出庫\n(仮出庫残数が10個発生)" }
    ]}
    connectorLabel="データ参照"
  />
);

export default ExampleUsage;
