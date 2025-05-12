import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const waitTimes = [
  { stage: 'Admission', minutes: 45 },
  { stage: 'Discharge', minutes: 30 },
  { stage: 'Ambulance', minutes: 20 },
  { stage: 'Diagnosis', minutes: 60 },
];

const assetUtilization = [
  { asset: 'Beds', utilization: 80 },
  { asset: 'MRI Machines', utilization: 65 },
  { asset: 'X-Ray', utilization: 75 },
  { asset: 'Ventilators', utilization: 50 },
];

const equipmentMaintenance = [
  { equipment: 'MRI Machine', usage: 200, maintenance: 15, idle: 40 },
  { equipment: 'Ventilator', usage: 180, maintenance: 10, idle: 60 },
  { equipment: 'X-Ray', usage: 210, maintenance: 12, idle: 30 },
  { equipment: 'Ultrasound', usage: 190, maintenance: 8, idle: 50 },
];

const medicationErrors = [
  { type: 'Wrong Medication', count: 5 },
  { type: 'Wrong Dosage', count: 4 },
  { type: 'Wrong Patient', count: 3 },
];

const admissionsTrend = [
  { month: 'Jan', admissions: 200 },
  { month: 'Feb', admissions: 220 },
  { month: 'Mar', admissions: 210 },
  { month: 'Apr', admissions: 240 },
  { month: 'May', admissions: 230 },
  { month: 'Jun', admissions: 250 },
];

const COLORS = ['#EF4444', '#F59E0B', '#10B981'];

export default function HospitalOperations() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Hospital Operations Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Average Length of Stay */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-base font-semibold text-gray-600">Avg. Length of Stay</h2>
          <p className="mt-2 text-2xl font-bold text-blue-600">5.2 Days</p>
        </div>

        {/* Bed Occupancy Rate */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-base font-semibold text-gray-600">Bed Occupancy Rate</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">82%</p>
        </div>

        {/* Total Admissions */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-base font-semibold text-gray-600">Total Admissions</h2>
          <p className="mt-2 text-2xl font-bold text-gray-800">1,250</p>
        </div>

        {/* Medication Errors */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform">
          <h2 className="text-base font-semibold text-gray-600">Medication Errors</h2>
          <p className="mt-2 text-2xl font-bold text-red-500">12 Cases</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Patient Wait Times */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Patient Wait Times</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={waitTimes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="minutes" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Asset Utilization */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Asset Utilization Rates</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={assetUtilization}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="asset" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="utilization" fill="#48BB78" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Equipment Maintenance Graph */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Equipment Maintenance Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={equipmentMaintenance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="equipment" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#4299E1" />
              <Bar dataKey="maintenance" fill="#F6AD55" />
              <Bar dataKey="idle" fill="#A0AEC0" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Medication Error Breakdown */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Medication Error Breakdown</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={medicationErrors}
                dataKey="count"
                nameKey="type"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {medicationErrors.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Admissions Trend */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6 h-[400px]">
        <h2 className="text-xl font-semibold mb-4">Admissions Trend (Last 6 Months)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={admissionsTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="admissions" stroke="#6366F1" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
