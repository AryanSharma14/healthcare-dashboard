import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PatientOutcomes from "./pages/PatientOutcomes";
import HospitalOperations from "./pages/HospitalOperations";
import FinancialDashboard from "./pages/FinancialDashboard";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PatientOutcomes />} />
        <Route path="/hospital-operations" element={<HospitalOperations />} />
        <Route path="/financial-dashboard" element={<FinancialDashboard />} />
      </Routes>
    </Layout>
  );
}

export default App;


