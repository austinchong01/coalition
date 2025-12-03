import { useState } from "react";
import { getBloodPressure } from "../api/helper";
import GetChart from "../api/helper.jsx";
import Diag from "./children/Diag";

const Diagnosis = ({ patient }) => {
  const history = patient.diagnosis_history;
  const currSys = history[0].blood_pressure.systolic;
  const currDia = history[0].blood_pressure.diastolic;
  const currResp = history[0].respiratory_rate;
  const currTemp = history[0].temperature;
  const currHeart = history[0].heart_rate;
  const bp_data = getBloodPressure(history);

  const list = patient.diagnostic_list;

  return (
    <div className="grid grid-rows-[2fr_1fr] gap-8">
      <div className="card">
        <h2 className="card-title-24pt pb-10">Diagnosis History</h2>
        <div className="grid grid-rows-[3fr_2fr] grid-cols-3 gap-5 h-[560px]">
          <div className="col-span-3 bg-[#F4F0FE] subcard inner-card-title-18pt">
            <div className="grid grid-cols-3 gap-8">
              <div className="col-span-2 flex flex-col gap-5">
                <div className="flex justify-between">
                  <h2>Blood Pressure</h2>
                  <div className="flex items-center gap-4">
                    <div className="body-regular-14">Last 6 Months</div>
                    <img
                      className="h-[6px]"
                      src="/images/expand.svg"
                      alt="expand"
                    />
                  </div>
                </div>
                <div>
                  <GetChart data={bp_data} />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-[14px] h-[14px] rounded-full bg-[#E66FD2]"></div>
                    <h2>Systolic</h2>
                  </div>
                  <div className="manrope-bold">{currSys.value}</div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[10px]"
                      src="/images/ArrowUp.svg"
                      alt="arrowUp"
                    />
                    <div className="body-regular-14">{currSys.levels}</div>
                  </div>
                </div>

                <div className="w-[208px] h-[1px] bg-[#CBC8D4]"></div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-[14px] h-[14px] rounded-full bg-[#8C6FE6]"></div>
                    <h2>Diastolic</h2>
                  </div>
                  <div className="manrope-bold">{currDia.value}</div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-[10px]"
                      src="/images/ArrowDown.svg"
                      alt="arrowDown"
                    />
                    <div className="body-regular-14">{currDia.levels}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#E0F3FA] subcard">
            <img
              className="w-24 h-24 pb-4"
              src="/images/respiratory.svg"
              alt="respiratory"
            />
            <div>Respiratory Rate</div>
            <div className="manrope-extraBold pb-[17px]">
              {currResp.value} bpm
            </div>
            <div className="body-regular-14">{currResp.levels}</div>
          </div>

          <div className="bg-[#FFE6E9] subcard">
            <img
              className="w-24 h-24 pb-4"
              src="/images/temperature.svg"
              alt="respiratory"
            />
            <div>Temperature</div>
            <div className="manrope-extraBold pb-[17px]">
              {currTemp.value}°F
            </div>
            <div className="body-regular-14">{currTemp.levels}</div>
          </div>

          <div className="bg-[#FFE6F1] subcard">
            <img
              className="w-24 h-24 pb-4"
              src="/images/HeartBPM.svg"
              alt="respiratory"
            />
            <div>Heart Rate</div>
            <div className="manrope-extraBold pb-[17px]">
              {currHeart.value} bpm
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-[10px]"
                src="/images/ArrowDown.svg"
                alt="arrowDown"
              />
              <div className="body-regular-14">{currHeart.levels}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card flex flex-col">
        <h2 className="card-title-24pt mb-10">Diagnostic List</h2>
        <div className="flex flex-col">
          <div className="grid grid-cols-8 body-emphasized-14pt px-[16px] py-[14px] rounded-3xl bg-[#F6F7F8] mb-[10px]">
            <div className="col-span-3">Problem/Diagnosis</div>
            <div className="col-span-4">Description</div>
            <div className="col-span-1">Status</div>
          </div>
          <div className="flex flex-col gap-[10px] overflow-y-auto scroll h-[178px]">
            {list.map((diagnosis, index) => (
              <Diag
                key={index}
                problem={diagnosis.name}
                desc={diagnosis.description}
                status={diagnosis.status}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;
