import React from "react";
import { NavLink } from "react-router-dom";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">

      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              Patient Outcomes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hospital-operations"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              Hospital Operations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/financial-dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md ${isActive ? "bg-blue-100 text-blue-600 font-semibold" : "hover:bg-gray-100"}`
              }
            >
              Financial Dashboard
            </NavLink>
          </li>
        </ul>
      </aside>


      <div className="flex-1 flex flex-col">

        <header className="bg-white shadow p-4 text-lg font-semibold">
          Health Dashboard
        </header>


        <main className="p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
