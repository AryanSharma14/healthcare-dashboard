import React from "react";
import { NavLink, useLocation } from "react-router-dom";

interface ColorScheme {
  mainBg: string;
  headerBg: string;
  headerText: string;
  activeLinkBg: string;
  activeLinkText: string;
  
}

const colorSchemes: Record<string, ColorScheme> = {
  '/': { // Patient Outcomes
    mainBg: 'bg-sky-50',
    headerBg: 'bg-sky-600',
    headerText: 'text-white',
    activeLinkBg: 'bg-sky-100',
    activeLinkText: 'text-sky-700 font-semibold',
  },
  '/hospital-operations': { // Hospital Operations
    mainBg: 'bg-amber-50',
    headerBg: 'bg-orange-600', 
    headerText: 'text-white',
    activeLinkBg: 'bg-amber-100',
    activeLinkText: 'text-orange-700 font-semibold',
  },
  '/financial-dashboard': { // Financial Dashboard
    mainBg: 'bg-emerald-50',
    headerBg: 'bg-emerald-600',
    headerText: 'text-white',
    activeLinkBg: 'bg-emerald-100',
    activeLinkText: 'text-emerald-700 font-semibold',
  },
  default: { // Fallback
    mainBg: 'bg-gray-100',
    headerBg: 'bg-white',
    headerText: 'text-gray-800',
    activeLinkBg: 'bg-blue-100',
    activeLinkText: 'text-blue-600 font-semibold',
  }
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const scheme = colorSchemes[currentPath] || colorSchemes.default;

  const getNavLinkClass = (path: string, isEnd: boolean = false) => {
    return ({ isActive }: { isActive: boolean }) => {
      const baseClass = "block px-4 py-2 rounded-md";
      if (isActive) {
        
        return `${baseClass} ${scheme.activeLinkBg} ${scheme.activeLinkText}`;
      }
      
      return `${baseClass} hover:bg-gray-200 text-gray-700`;
    };
  };

  return (
    <div className="flex h-screen"> 

      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h2> 
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/"
              end
              className={getNavLinkClass("/", true)}
            >
              Patient Outcomes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hospital-operations"
              className={getNavLinkClass("/hospital-operations")}
            >
              Hospital Operations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/financial-dashboard"
              className={getNavLinkClass("/financial-dashboard")}
            >
              Financial Dashboard
            </NavLink>
          </li>
        </ul>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className={`shadow p-4 text-lg font-semibold ${scheme.headerBg} ${scheme.headerText}`}>
          Health Dashboard 
        </header>

        <main className={`p-6 overflow-y-auto ${scheme.mainBg}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;