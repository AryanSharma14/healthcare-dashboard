import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

type DashboardData = {
  recoveryRate: number;
  readmissionRate: number;
  mortalityRate: number;
  avgLengthOfStay: number;
  summary: {
    totalPatients: number;
    improvedPercent: number;
    criticalPercent: number;
  };
  recoveryOverTime: { month: string; rate: number }[];
  readmissionCauses: { cause: string; count: number }[];
  recentPatients: { name: string; status: string; admitted: string; discharged: string }[];
  hospitalIncidents: { type: string; count: number }[];
};

export default function PatientOutcomes() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/patient-outcomes-dashboard")
      .then(res => setData(res.data))
      .catch(err => console.error("API fetch failed", err));
  }, []);

  if (!data) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Patient Outcomes Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Recovery Rate</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">{data.recoveryRate}%</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Readmission Rate</h2>
          <p className="mt-2 text-2xl font-bold text-red-500">{data.readmissionRate}%</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Mortality Rate</h2>
          <p className="mt-2 text-2xl font-bold text-red-600">{data.mortalityRate}%</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Avg. Length of Stay</h2>
          <p className="mt-2 text-2xl font-bold text-blue-600">{data.avgLengthOfStay} Days</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 h-[400px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Patient Outcomes Summary</h2>
          <div className="grid grid-cols-3 gap-6 text-center mt-6">
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-500 mb-1">Total Patients</p>
              <p className="text-3xl font-bold text-gray-800">{data.summary.totalPatients}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-500 mb-1">Improved Percent</p>
              <p className="text-3xl font-bold text-green-600">{data.summary.improvedPercent}%</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-500 mb-1">Critical Percent</p>
              <p className="text-3xl font-bold text-red-500">{data.summary.criticalPercent}%</p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Recovery Rate Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data.recoveryOverTime.map(d => ({ month: d.month, recovery: d.rate }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="recovery" stroke="#4CAF50" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Causes of Readmission</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.readmissionCauses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cause" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Recent Patients</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-gray-600 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">Patient Name</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Admission Date</th>
                  <th className="px-6 py-3">Discharge Date</th>
                </tr>
              </thead>
              <tbody>
                {data.recentPatients.map((patient, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-6 py-4">{patient.name}</td>
                    <td className="px-6 py-4">{patient.status}</td>
                    <td className="px-6 py-4">{patient.admitted}</td>
                    <td className="px-6 py-4">{patient.discharged}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-full bg-white shadow-md rounded-lg p-6 h-[500px]">
          <h2 className="text-xl font-semibold mb-4">Hospital Incidents</h2>
          <ResponsiveContainer width="100%" height={380}>
            <BarChart
              data={data.hospitalIncidents}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="type" 
                interval={0} 
                angle={-30} 
                textAnchor="end" 
                height={100} 
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#6366F1" />
            </BarChart>
          </ResponsiveContainer>
        </div>


      </div>
    </div>
  );
}

