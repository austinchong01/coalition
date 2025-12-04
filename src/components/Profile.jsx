const Profile = ({ patient }) => {
  const date = new Date(patient.date_of_birth);
  const formatted = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="flex flex-col gap-8">
      <div className="card2 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-8">
          <img className="w-50 h-50" src="/images/pfp2.png" alt="pfp" />
          <div className="card-title-24pt">{patient.name}</div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-4 items-center">
            <img
              className="w-[42px] h-[42px]"
              src="/images/BirthIcon.png"
              alt="DOB"
            />
            <div className="flex flex-col">
              <div className="manrope-medium14">Date of Birth</div>
              <div className="manrope-bold14">{formatted}</div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <img
              className="w-[42px] h-[42px]"
              src="/images/FemaleIcon.png"
              alt="gender"
            />
            <div className="flex flex-col">
              <div className="manrope-medium14">Gender</div>
              <div className="manrope-bold14">{patient.gender}</div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <img
              className="w-[42px] h-[42px]"
              src="/images/PhoneIcon.png"
              alt="phone"
            />
            <div className="flex flex-col">
              <div className="manrope-medium14">Contact Info.</div>
              <div className="manrope-bold14">{patient.phone_number}</div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <img
              className="w-[42px] h-[42px]"
              src="/images/PhoneIcon.png"
              alt="phone"
            />
            <div className="flex flex-col">
              <div className="manrope-medium14">Emergency Contacts</div>
              <div className="manrope-bold14">{patient.emergency_contact}</div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <img
              className="w-[42px] h-[42px]"
              src="/images/InsuranceIcon.png"
              alt="insurance"
            />
            <div className="flex flex-col">
              <div className="manrope-medium14">Insurance Provider</div>
              <div className="manrope-bold14">{patient.insurance_type}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <button className="w-[220px] h-[41px] bg-[#01F0D0] rounded-[41px] body-emphasized-14pt">
            Show All Information
          </button>
        </div>
      </div>

      <div className="card flex-1 flex flex-col">
        <div className="card-title-24pt mb-4">Lab Results</div>
        <div className="flex flex-col gap-[5px] overflow-y-auto scroll h-full">
          {patient.lab_results.map((lab, index) => (
            <div
              key={index}
              className={`manrope-regular flex justify-between items-center px-4 py-[11px] ${
                lab === "CT Scans" ? "bg-[#F6F7F8]" : ""
              }`}
            >
              {lab}
              <img className="w-5" src="/images/download.svg" alt="download" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
