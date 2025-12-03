import { useState } from "react";

const Diagnosis = ({ patient }) => {
  return (
    <div className="grid grid-rows-[2fr_1fr] gap-8">
      <div className="card">
        <h2 className="card-title-24pt pb-10">Diagnosis History</h2>
        <div className="grid grid-rows-[3fr_2fr] grid-cols-3 gap-5 h-[560px]">
          <div className="col-span-3 bg-[#F4F0FE] subcard inner-card-title-18pt">
            Blood Pressure
          </div>

          <div className="bg-[#E0F3FA] subcard">
            <img
              className="w-24 h-24 pb-4"
              src="/images/respiratory.svg"
              alt="respiratory"
            />
            <div>Respiratory Rate</div>
            <div className="manrope-extraBold pb-[17px]">20 bpm</div>
            <div className="body-regular-14">Normal</div>
          </div>

          <div className="bg-[#FFE6E9] subcard">
            <img
              className="w-24 h-24 pb-4"
              src="/images/temperature.svg"
              alt="respiratory"
            />
            <div>Temperature</div>
            <div className="manrope-extraBold pb-[17px]">20 bpm</div>
            <div className="body-regular-14">Normal</div>
          </div>

          <div className="bg-[#FFE6F1] subcard">
            <img
              className="w-24 h-24 pb-4"
              src="/images/HeartBPM.svg"
              alt="respiratory"
            />
            <div>Heart Rate</div>
            <div className="manrope-extraBold pb-[17px]">20 bpm</div>
            <div className="body-regular-14">Normal</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Diagnosis List</h2>
      </div>
    </div>
  );
};

export default Diagnosis;
