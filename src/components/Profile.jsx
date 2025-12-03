import { useState } from "react";

const Profile = ({ patient }) => {
  return (
    <div className="grid grid-rows-[7fr_3fr] gap-8">
      <div className="card">
        PFP 
      </div>

      <div className="card">
        Lab Results
      </div>
    </div>
  );
};

export default Profile;
