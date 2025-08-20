import React, { useState } from "react";
import Modal from "./Modal";
import BookingForm from "./BookingForm";

const ServiceCard = ({ title, image, onClick }) => (
  <div
    className="cursor-pointer rounded-xl shadow-md w-full relative"
    onClick={() => onClick(title)}
  >
    <img src={image} className="w-full h-full" alt={title} />
  </div>
);

const headers = {
  "Content-Type": "application/json",
  authorization: localStorage.getItem("token"),
};

const services = [
  { title: "Flights", image: "/public/assets/images/flight.png" },
  { title: "Accommodation", image: "/public/assets/images/accomodation.png" },
  {
    title: "Land Transportation",
    image: "/public/assets/images/transportation(land).png",
  },
  { title: "Activity", image: "/public/assets/images/activity.png" },
  { title: "Flights", image: "/public/assets/images/flight.png" },
  { title: "Accommodation", image: "/public/assets/images/accomodation.png" },
  { title: "Flights", image: "/public/assets/images/flight.png" },
  { title: "Accommodation", image: "/public/assets/images/accomodation.png" },
];

const BookingFormModal = ({ isOpen, onClose }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [step, setStep] = useState(1);

  const handleCardClick = (serviceName) => {
    setSelectedService(serviceName);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
    setSelectedService(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formValues = Object.fromEntries(formData.entries());

    const payload = {
      quotationType: selectedService?.toLowerCase() || "unknown",
      channel: formValues?.channel || "B2C", // can make dropdown later
      partyId: formValues.customerId || "",
      travelDetails: {
        from: formValues.from || "Delhi",
        to: formValues.to || "Mumbai",
        date: formValues.checkIn || formValues.date,
        returnDate: formValues.checkOut || null,
        passengers: formValues.passengers || 1,
      },
      items: [
        {
          name: selectedService,
          price: Number(formValues.price || 0),
          quantity: 1,
          description: formValues.hotelName || "",
        },
      ],
      totalAmount: Number(formValues.price || 0),
      status: "draft",
    };

    try {
      await axios.post("/api/quotation/create-quotation", payload, { headers });
      console.log("Quotation created successfully!");
    } catch (err) {
      console.error("Error creating quotation", err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setStep(1);
        setSelectedService(null);
        onClose();
      }}
      title={step === 1 ? "Select a Service" : `${selectedService} Booking`}
    >
      {step === 1 && (
        <div className="flex flex-wrap gap-4 justify-center w-[65vw] max-md:w-[100vw]">
          <div className="text-[#6B7280] text-[1rem] text-center w-full mb-2">
            Choose from the range of services provided by{" "}
            <span className="text-[#114958] font-semibold">Karvaann</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {services.map((s) => (
              <ServiceCard
                key={s.title}
                title={s.title}
                image={s.image}
                onClick={() => handleCardClick(s.title)}
              />
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <>
          <div className="flex flex-col flex-wrap gap-4 justify-center w-[65vw] max-md:w-[100vw]">
            <BookingForm selectedService={selectedService} />

            <div className="flex justify-between mt-6">
              <button
                onClick={handleBack}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default BookingFormModal;
