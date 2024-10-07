import React from 'react';

type ProcessStepProps = {
  title: string;
  description: string;
  bgColor: string;
};

const ProcessStep: React.FC<ProcessStepProps> = ({ title, description, bgColor }) => {
  return (
    <div className={`flex flex-col items-center p-4 ${bgColor} rounded-md shadow-md`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};

type ProcessFlowProps = {
  steps: {
    title: string;
    description: string;
    bgColor: string;
  }[];
};

const ProcessFlow: React.FC<ProcessFlowProps> = ({ steps }) => {
  return (
    <div className="flex space-x-4 overflow-x-auto p-4 bg-gray-100 rounded-md">
      {steps.map((step, index) => (
        <ProcessStep
          key={index}
          title={step.title}
          description={step.description}
          bgColor={step.bgColor}
        />
      ))}
    </div>
  );
};

export default ProcessFlow;
```