import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const COLORS = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#9CA3AF'];

const claimDenialReasons = [
  { reason: 'Incomplete Documentation', value: 30 },
  { reason: 'Coding Errors', value: 25 },
  { reason: 'Missing Authorization', value: 15 },
  { reason: 'Patient Eligibility Issues', value: 10 },
  { reason: 'Duplicates', value: 12 },
  { reason: 'Other', value: 8 },
];

const monthlyCollections = [
  { month: 'Jan', amount: 180000 },
  { month: 'Feb', amount: 200000 },
  { month: 'Mar', amount: 190000 },
  { month: 'Apr', amount: 210000 },
  { month: 'May', amount: 220000 },
  { month: 'Jun', amount: 215000 },
];

const arDaysTrend = [
  { month: 'Jan', days: 55 },
  { month: 'Feb', days: 50 },
  { month: 'Mar', days: 47 },
  { month: 'Apr', days: 43 },
  { month: 'May', days: 40 },
  { month: 'Jun', days: 38 },
];

export default function HealthcareFinancialDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Healthcare Financial Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">AR Days</h2>
          <p className="mt-2 text-2xl font-bold text-blue-600">38</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Claim Denial Rate</h2>
          <p className="mt-2 text-2xl font-bold text-red-500">12%</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Collection Rate</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">91%</p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-sm font-medium text-gray-500">Diversion Hours</h2>
          <p className="mt-2 text-2xl font-bold text-gray-800">16</p>
        </div>
      </div>

      {/* Denial Reason Pie Chart & Collections Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Claim Denial Reasons</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={claimDenialReasons}
                dataKey="value"
                nameKey="reason"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {claimDenialReasons.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 h-[400px]">
          <h2 className="text-xl font-semibold mb-4">Monthly Collections</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyCollections}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AR Days Trend */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-6 h-[400px]">
        <h2 className="text-xl font-semibold mb-4">AR Days Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={arDaysTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="days" stroke="#3B82F6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
