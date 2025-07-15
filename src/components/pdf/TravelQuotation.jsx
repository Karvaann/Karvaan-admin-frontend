import { useRef } from "react";

const TravelQuotation = ({ data }) => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current;
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(`
      <html>${printContent.innerHTML}</html>
      `);
    printWindow.print();
  };

  const { clientName, from, to, date, transport, seat, coach, quotationId } =
    data;

  return (
    <>
      <div className="no-print">
        <button
          onClick={handlePrint}
          style={{ margin: "20px", padding: "10px 20px" }}
        >
          Download Quotation (PDF)
        </button>
      </div>

      <div className="print-container" ref={printRef}>
        <h1 style={{ textAlign: "center" }}>Travel Quotation</h1>
        <hr />

        <p>
          <strong>Quotation ID:</strong> {quotationId}
        </p>
        <p>
          <strong>Client Name:</strong> {clientName}
        </p>
        <p>
          <strong>From:</strong> {from}
        </p>
        <p>
          <strong>To:</strong> {to}
        </p>
        <p>
          <strong>Travel Date:</strong> {date}
        </p>
        <p>
          <strong>Transport:</strong> {transport}
        </p>
        <p>
          <strong>Coach:</strong> {coach}
        </p>
        <p>
          <strong>Seat No:</strong> {seat}
        </p>

        <br />
        <p>
          <strong>Note:</strong> This is a system-generated quotation. Please
          confirm within 24 hours to lock the price.
        </p>
      </div>
    </>
  );
};

export default TravelQuotation;
