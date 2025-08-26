import { IoLocationSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";

const TravelQuotation = ({ data, quotationType }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-300 shadow-md p-8 text-gray-800 text-[14px] leading-relaxed print:p-6 print:max-w-2xl print:text-[12px]">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col gap-3 space-y-4 text-left text-black text-sm font-normal w-[300px]">
          <div className="flex items-start gap-2">
            <IoLocationSharp className="w-5 h-5 text-[black] mt-1" />
            <div>
              <div>Karvaan Travels</div>
              <div className="text-xs leading-tight">
                5th Floor, Unit no., 508, Netaji Subhash,
                <br />
                North West Delhi
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CiMail className="w-4 h-4 text-[black]" />
            <span className="text-xs">b2b@travelwithkarvaan.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlinePhone className="w-4 h-4 text-[black]" />
            <span className="text-xs">7042321010</span>
          </div>
        </div>

        <div className="flex flex-col items-center ml-4">
          <img
            className="h-[100px] w-30 object-containn"
            src="/assets/icons/icon 3-3.svg"
            alt="logo"
          />

          <img
            className="h-[80px] w-auto object-contain mt-[-30px]"
            src="/assets/icons/karvaann wordmark.svg"
            alt="karvaann"
          />
        </div>
      </div>
      <hr className="border-t-2 border-[#f3ede7] mt-[-20px]  mb-5" />

      <div className="flex flex-col items-center ">
        <div className="mb-4 w-full max-w-md border-2 border-red-200 border-dotted rounded-xl p-4">
          <h1 className="text-lg font-semibold  mb-2 pb-1 text-center">
            Booking Information
          </h1>
          <hr className="border-t border-[#f3ede7] mt-[-5px] mb-2" />
          <p>
            <span className="font-medium">Service Type:</span> {quotationType}
          </p>
          <p>
            <span className="font-medium">Client Name:</span>
            {data.formFields?.FullName ||
              data.formFields?.FullNameleadguest ||
              "-"}
          </p>
          <p>
            <span className="font-medium">Booking Date:</span>
            {data.formFields?.bookingdate || "-"}
          </p>
        </div>

        {/* dynamic service data */}

        {quotationType === "flights" && (
          <div className="mb-4 w-full max-w-md border-2 border-red-200 border-dotted rounded-xl p-4">
            <div className="mb-6 w-full max-w-md">
              <h1 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1 text-center">
                Flight Details
              </h1>
              <p>
                <span className="font-medium">Flight Number:</span>
                {data.formFields.flightNumber}
              </p>
              <p>
                <span className="font-medium">Departure:</span>
                {data.formFields.departurecity} on
                {data.formFields.departureDate} at
                {data.formFields.departureTime}
              </p>
              <p>
                <span className="font-medium">Arrival:</span>
                {data.formFields.arrivalcity} on {data.formFields.arrivalDate}
                at {data.formFields.arrivalTime}
              </p>
              <p>
                <span className="font-medium">PNR:</span>
                {data.formFields.PNRNumber}
              </p>
              <p>
                <span className="font-medium">Class:</span>
                {data.formFields.classtype}
              </p>
              <p>
                <span className="font-medium">Add Ons: </span>
                {data.formFields.add - ons}
              </p>
            </div>
          </div>
        )}

        {quotationType === "accommodation" && (
          <div className="mb-4 w-full max-w-md border-2 border-red-200 border-dotted rounded-xl p-4">
            <div className="mb-6 w-full max-w-md">
              <h1 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1 text-center">
                Hotel Details
              </h1>
              <p>
                <span className="font-medium">Hotel Name:</span>
                {data.formFields.hotelName}
              </p>
              <p>
                <span className="font-medium">Check-in:</span>
                {data.formFields.checkIn}
              </p>
              <p>
                <span className="font-medium">Check-out:</span>
                {data.formFields.checkOut}
              </p>
              <p>
                <span className="font-medium">Guests:</span>
                {data.formFields.guests}
              </p>
              <p>
                <span className="font-medium">Room Type:</span>
                {data.formFields.roomtype}
              </p>
            </div>
          </div>
        )}

        {quotationType === "land transportation" && (
          <div className="mb-4 w-full max-w-md border-2 border-red-200 border-dotted rounded-xl p-4">
            <div className="mb-6 w-full max-w-md">
              <h1 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1 text-center">
                Transport Details
              </h1>
              <p>
                <span className="font-medium">Pickup:</span>{" "}
                {data.formFields.pickuplocation} at {data.formFields.pickuptime}
              </p>
              <p>
                <span className="font-medium">Drop-off:</span>{" "}
                {data.formFields.droplocation}
              </p>
              <p>
                <span className="font-medium">Vehicle:</span>
                {data.formFields.vehicletype} ({data.formFields.vehiclenumber})
              </p>
              <p>
                <span className="font-medium">Driver:</span>
                {data.formFields.drivername} (
                {data.formFields.drivercontactnumber})
              </p>
            </div>
          </div>
        )}

        {quotationType === "activity" && (
          <div className="mb-4 w-full max-w-md border-2 border-red-200 border-dotted rounded-xl p-4">
            <div className="mb-6 w-full max-w-md">
              <h1 className="text-lg font-semibold border-b border-gray-300 mb-2 pb-1 text-center">
                Activity Details
              </h1>
              <p>
                <span className="font-medium">Activity Name:</span>
                {data.formFields.activityName}
              </p>
              <p>
                <span className="font-medium">Date:</span>
                {data.formFields.activityDate}
              </p>
              <p>
                <span className="font-medium">Duration:</span>
                {data.formFields.activityDuration}
              </p>
              <p>
                <span className="font-medium">Location:</span>
                {data.formFields.activityLocation}
              </p>
            </div>
          </div>
        )}

        <div className="mb-6 w-full max-w-md border-2 border-red-200 border-dotted rounded-xl p-4">
          <h1 className="text-lg font-semibold mb-2 pb-1 text-center">
            Terms and Conditions
          </h1>
          <hr className="border-t border-[#f3ede7] mt-[-5px] mb-2" />

          {quotationType === "flights" && (
            <>
              {data.formFields.policies && <p>{data.formFields.policies}</p>}
              {data.formFields.notesonID && <p>{data.formFields.notesonID}</p>}
            </>
          )}
          {quotationType === "accommodation" && (
            <>
              {data.formFields.policies && <p>{data.formFields.policies}</p>}
              {data.formFields.inclusions && (
                <p>{data.formFields.inclusions}</p>
              )}
              {data.formFields.requests && <p>{data.formFields.requests}</p>}
            </>
          )}
          {(quotationType === "land transportation" ||
            quotationType === "activity") && (
            <>
              {data.formFields.policies && <p>{data.formFields.policies}</p>}
              {data.formFields.inclusions && (
                <p>{data.formFields.inclusions}</p>
              )}
            </>
          )}
        </div>
      </div>
      {/*  Footer  */}
      <div className="border-t-2 border-gray-800 pt-4 text-center text-sm text-gray-600">
        <p>Powered by Karvaan Experiences</p>
        <p>Contact: support@karvaan.com | +91-9876543210</p>
      </div>
    </div>
  );
};

export default TravelQuotation;
