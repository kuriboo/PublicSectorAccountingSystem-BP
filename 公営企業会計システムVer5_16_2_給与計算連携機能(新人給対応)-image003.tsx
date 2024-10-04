```tsx
// components/PaymentManagement.tsx
import React from "react";

interface Step {
  id: string;
  label: string;
  color: string;
}

interface PaymentManagementProps {
  steps: Step[];
  onSelectStep: (stepId: string) => void;
}

const PaymentManagement: React.FC<PaymentManagementProps> = ({ steps, onSelectStep }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">給与支払処理</h2>
      <div className="flex space-x-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center justify-center p-4 w-40 text-center cursor-pointer rounded-md ${step.color}`}
            onClick={() => onSelectStep(step.id)}
          >
            {step.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentManagement;
```

```tsx
// pages/index.tsx
import React from "react";
import PaymentManagement from "../components/PaymentManagement";

const Home: React.FC = () => {
  const steps = [
    { id: "1", label: "給与データ取込み", color: "bg-pink-200" },
    { id: "2", label: "振替伝票決裁確定", color: "bg-yellow-200" },
    { id: "3", label: "給与支払確定", color: "bg-yellow-200" },
    { id: "4", label: "給与預り金支払確定", color: "bg-yellow-200" },
    { id: "5", label: "控除額支出命令書発行", color: "bg-blue-200" },
  ];

  const handleSelectStep = (stepId: string) => {
    console.log("Selected Step: ", stepId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <PaymentManagement steps={steps} onSelectStep={handleSelectStep} />
    </div>
  );
};

export default Home;
```