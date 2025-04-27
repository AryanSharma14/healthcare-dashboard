import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const data = [
  { month: 'Jan', recovery: 88 },
  { month: 'Feb', recovery: 90 },
  { month: 'Mar', recovery: 91 },
  { month: 'Apr', recovery: 93 },
  { month: 'May', recovery: 94 },
  { month: 'Jun', recovery: 95 },
];

const readmissionCauses = [
  { cause: "Infection", count: 30 },
  { cause: "Surgical Complications", count: 20 },
  { cause: "Medication Issues", count: 15 },
  { cause: "Other", count: 10 },
];

const recentPatients = [
  { name: "John Doe", status: "Recovered", admitted: "2025-03-01", discharged: "2025-03-10" },
  { name: "Jane Smith", status: "In Treatment", admitted: "2025-03-15", discharged: "-" },
  { name: "Robert Brown", status: "Critical", admitted: "2025-03-20", discharged: "-" },
];

export default function PatientOutcomes() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Patient Outcomes Dashboard</h1>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
        {/* Recovery Rate Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Recovery Rate</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">92%</p>
        </div>

        {/* Readmission Rate Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Readmission Rate</h2>
          <p className="mt-2 text-2xl font-bold text-red-500">8%</p>
        </div>

        {/* Mortality Rate Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Mortality Rate</h2>
          <p className="mt-2 text-2xl font-bold text-red-600">2%</p>
        </div>

        {/* Average Length of Stay Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Avg. Length of Stay</h2>
          <p className="mt-2 text-2xl font-bold text-blue-600">5 Days</p>
        </div>

        {/* Patient Outcomes Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 h-[400px] flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Patient Outcomes Summary</h2>
          <div className="grid grid-cols-3 gap-6 text-center mt-6">
            {/* Total Patients */}
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-500 mb-1">Total Patients</p>
              <p className="text-3xl font-bold text-gray-800">320</p>
            </div>
            {/* % Improved */}
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-500 mb-1">Improved Percent</p>
              <p className="text-3xl font-bold text-green-600">85%</p>
            </div>
            {/* % Critical */}
            <div className="flex flex-col items-center">
              <p className="text-sm font-medium text-gray-500 mb-1">Critical Percent</p>
              <p className="text-3xl font-bold text-red-500">5%</p>
            </div>
          </div>
        </div>

        {/* Recovery Rate Over Time */}
        <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Recovery Rate Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="recovery" stroke="#4CAF50" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Causes of Readmission */}
        <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Causes of Readmission</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={readmissionCauses}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="cause" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#F87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Patients */}
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
                {recentPatients.map((patient, index) => (
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

      </div>
    </div>
  );
}
