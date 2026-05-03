import { useStoreSidebar, useStoreTopic } from '../../store/storeOne';
import { useLocation } from 'react-router-dom';
import { IoMoon } from "react-icons/io5";
import SunIcon from '../../assets/icons8-sun-30.png'

function Header() {
  const { topic, toggleTopic } = useStoreTopic();
  const { isOpen, toggle } = useStoreSidebar();
  const location = useLocation();


  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return "Dashboard";
      case '/users':
        return "Users";
      case '/projects':
        return "Projects";
      case '/tasks':
        return "Tasks";
      case '/reports':
        return "Reports";
      case '/settings':
        return "Settings";
      default:
        return "Dashboard";
    }
  };

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
      <h1 className="text-xl font-bold text-black dark:text-white">{getTitle()}</h1>
      </div>
      <button 
       className='cursor-pointer'
       onClick={() => toggleTopic()}>
        {topic ? <img className='w-5 h-5'  src={SunIcon}></img> : <IoMoon className='w-5 h-5' />}
      </button>
    </div>
  )
}

export default Header
