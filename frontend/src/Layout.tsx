import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">Patients</li>
          <li className="hover:text-blue-500 cursor-pointer">Reports</li>
        </ul>
      </aside>


      <div className="flex-1 flex flex-col">

        <header className="bg-white shadow p-4 text-lg font-semibold">
          Welcome to the Health Dashboard
        </header>


        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
