import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useStoreTopic } from './store/storeOne';
import Sidebar from './components/sidebar/Sidebar'
import Header from './components/header/Header'
import Settings from './components/settings/Settings'
import Home from './components/home/Home'
import Users from './components/users/Users'
import Projects from './components/projects/Projects'
import Tasks from './components/tasks/Tasks'
import Reports from './components/reports/Reports'


function App() {
  const { topic } = useStoreTopic();


  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-row ${topic ? 'dark' : ''}`}>
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-gray-900">
          <Header />
          <main className="flex-1 p-6 overflow-auto bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
