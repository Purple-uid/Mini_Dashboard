import { NavLink } from "react-router-dom"
import { useStoreSidebar } from "../../store/storeOne";

import { FaHome } from "react-icons/fa"
import { HiUsers } from "react-icons/hi2";
import { FaFolderOpen } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
import { AiOutlineAreaChart } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";



function Sidebar() {
  const isOpen = useStoreSidebar( prev => prev.isOpen );

  const close_open_sidebar = isOpen ? "w-64" : "w-0";

  return (
    <div className={`
      ${close_open_sidebar}
      bg-white dark:bg-gray-900 h-screen overflow-hidden transition-all duration-300 ease-in-out
      shadow-md border-gray-800 flex-shrink-0
    `}>
      <div className={`p-6 flex flex-col gap-4 h-full ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">Mini Dashboard</h1>

        <NavLink className="flex items-center gap-3 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition-colors" to="/">
          <FaHome /> Dashboard
        </NavLink>
        
        <NavLink className="flex items-center gap-3 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition-colors" to="/users">
          <HiUsers /> Users
        </NavLink>

        <NavLink className="flex items-center gap-3 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition-colors" to="/projects">
          <FaFolderOpen /> Projects
        </NavLink>

        <NavLink className="flex items-center gap-3 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition-colors" to="/tasks">
          <ImCheckmark /> Tasks
        </NavLink>

        <NavLink className="flex items-center gap-3 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition-colors" to="/reports">
          <AiOutlineAreaChart /> Reports
        </NavLink>

        <NavLink className="flex items-center gap-3 text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 transition-colors" to="/settings">
          <IoIosSettings /> Settings
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar
