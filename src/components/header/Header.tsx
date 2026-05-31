import { useStoreSidebar } from '../../store/storeOne';
import { useAvatar } from '../../hooks/useStoreSettings'
import { useLocation } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import { useTopic } from '../../hooks/useStoreTopic'
import { routeTitles } from '../../lib/routes';
import SunIcon from '../../assets/icons8-sun-30.png'

function Header() {
  const { topic, toggleTopic } = useTopic();
  const { avatar } = useAvatar()
  const { isOpen, toggle } = useStoreSidebar();
  const location = useLocation();
  const title = routeTitles[location.pathname] || "Dashboard";


  return (
    <div className="flex flex-row gap-5 align-items-center bg-white dark:bg-gray-900 p-4 shadow-md justify-between pr-10">
      <div className="flex flex-row gap-5 align-items-center">
        <div
        className="flex flex-col w-8 h-8 justify-center items-center cursor-pointer group text-black dark:text-white"
        onClick={() => toggle()}
      >
        <span 
          className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 
            ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        />
        <span 
          className={`block h-0.5 w-6 bg-current rounded transition-all duration-300 my-1
            ${isOpen ? 'opacity-0' : ''}`}
        />
        <span 
          className={`block h-0.5 w-6 bg-current rounded transition-all duration-300
            ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
        />
      </div>
      <h1 className="text-xl font-bold text-black dark:text-white">{title}</h1>
      </div>
      <div className="flex flex-row gap-[15px] align-items-center">
        <button 
          className='cursor-pointer'
          onClick={() => toggleTopic()}>
          {topic ? <img className='w-5 h-5'  src={SunIcon} /> : <IoMoon className='w-5 h-5' />}
        </button>
        {avatar && <img src={avatar} alt="Avatar" className='w-8 h-8 rounded-full' />}
      </div>
    </div>
  )
}

export default Header
