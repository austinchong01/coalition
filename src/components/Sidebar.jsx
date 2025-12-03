import { useState } from "react";
import Patient from "./children/Patient"

const Sidebar = ({ allPatients }) => {

    return (
    <div className="cardSide py-5 pl-5 flex flex-col gap-10">
        <div className="flex items-center justify-between pr-5">
            <h2 className="card-title-24pt">Patients</h2>
            <img className="w-[18px] h-[18px]" src="/images/search.svg" alt="search" />
        </div>
        <div className="flex flex-col gap-8 overflow-y-auto max-h-[941px] scroll">
            {allPatients.map((patient, index) => (
                <Patient 
                    key={index}
                    name={patient.name}
                    age={patient.age}
                    gender={patient.gender}
                    picture={patient.profile_picture}
                />
            ))}
        </div>
    </div>);
};

export default Sidebar;