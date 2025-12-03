import { useState } from "react";

const Header = () => {
  return (
    <div className="headerCard px-[32px] py-[12px]">
      <div>
        <img className="h-[48px]" src="/images/TestLogo.svg" alt="Logo" />
      </div>

      <div className="flex gap-10">
        <div className="flex gap-2 items-center">
          <img className="h-[17px]" src="/images/home.svg" alt="Overview" />
          <div className="body-emphasized-14pt">Overview</div>
        </div>
        <div className="flex gap-2 items-center highlight">
          <img className="h-[17px]" src="/images/patients.svg" alt="Patients" />
          <div className="body-emphasized-14pt">Patients</div>
        </div>
        <div className="flex gap-2 items-center">
          <img className="h-[17px]" src="/images/schedule.svg" alt="schedule" />
          <div className="body-emphasized-14pt">Schedule</div>
        </div>
        <div className="flex gap-2 items-center">
          <img className="h-[17px]" src="/images/message.svg" alt="message" />
          <div className="body-emphasized-14pt">Message</div>
        </div>
        <div className="flex gap-2 items-center">
          <img
            className="h-[17px]"
            src="/images/transactions.svg"
            alt="transactions"
          />
          <div className="body-emphasized-14pt">Transactions</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img className="w-11 h-11" src="/images/pfp.png" alt="pfp" />
          <div className="flex flex-col">
            <div className="body-emphasized-14pt">Dr. Jose Simmons</div>
            <div className="body-secondary-info-14pt">General Practioner</div>
          </div>
        </div>
        <div className="w-[1px] h-[44px] bg-[#EDEDED]"></div>
        <img className="h-5" src="/images/settings.png" alt="settings" />
        <img className="h-[18px]" src="/images/more.png" alt="more" />
      </div>
    </div>
  );
};

export default Header;
