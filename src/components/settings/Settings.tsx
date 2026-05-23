import { NavLink, Route, Routes } from "react-router-dom"
import { useTopic } from "../../hooks/useStoreTopic"
import Profile from "./components_settings/Profile"
import Appearance from "./components_settings/Appearance"
import Notifications from "./components_settings/Notifications"
import Security from "./components_settings/Security"
import Integrations from "./components_settings/Integrations"

function Settings() {
  const { topic } = useTopic()
  return (
    <div className={`my-5 px-[3rem] ${topic ? "text-white" : "text-black"}`}>
      <div className={`flex gap-5 border-b-2 mb-5 ${topic ? "border-gray-600" : "border-gray-300"}`}>
        <NavLink to="/settings/profile" className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current after:scale-x-0 hover:text-blue-600 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-300">Profile</NavLink>
        <NavLink to="/settings/appearance" className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current after:scale-x-0 hover:text-blue-600 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-300">Appearance</NavLink>
        <NavLink to="/settings/notifications" className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current after:scale-x-0 hover:text-blue-600 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-300">Notifications</NavLink>
        <NavLink to="/settings/security" className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current after:scale-x-0 hover:text-blue-600 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-300">Security</NavLink>
        <NavLink to="/settings/integrations" className="relative pb-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current after:scale-x-0 hover:text-blue-600 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-300">Integrations</NavLink>
      </div>
      <Routes>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="appearance" element={<Appearance />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="security" element={<Security />} />
        <Route path="integrations" element={<Integrations />} />
      </Routes>
    </div>
  )
}

export default Settings
