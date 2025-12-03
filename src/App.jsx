import { useState, useEffect } from "react";
import api from "./api/api";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Diagnosis from "./components/Diagnosis";
import Profile from "./components/Profile";
import './App.css'

function App() {
  const [currPatient, setCurrPatient] = useState([]);
  const [allPatients, setAllPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPatients = async () => {
      const result = await api.getPatients();

      if (result.success) {
        setCurrPatient(result.data[3]); // Jessica Taylor
        setAllPatients(result.data);
      } else {
        setError(result.error);
      }

      setLoading(false);
    };

    fetchPatients();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container-parent">
      <Header />
      <Sidebar allPatients={allPatients}/>
      <Diagnosis patient={currPatient}/>
      <Profile patient={currPatient}/>
    </div>
  );
}

export default App;
