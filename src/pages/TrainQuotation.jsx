import { useState } from "react";
import TravelQuotation from "@/components/pdf/TravelQuotation";

export default function TrainQuotationPage() {
  const [quotationData, setQuotationData] = useState(null);

  const handleFormSubmit = async (formData) => {
    const res = await fetch("/api/train-quotation", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const savedData = await res.json();
    setQuotationData(savedData); // pass this to PDF
  };

  return (
    <div>
      {!quotationData ? (
        <TrainQuotationForm onSubmit={handleFormSubmit} />
      ) : (
        <TravelQuotation data={quotationData} />
      )}
    </div>
  );
}
