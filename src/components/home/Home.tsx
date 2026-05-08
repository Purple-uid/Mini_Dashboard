import Chart from 'react-apexcharts'
import Calendar from 'react-calendar';
import { useState, useEffect } from 'react';
import { useTopic } from '../../hooks/useStoreTopic'
import { useDashboardData } from '../../hooks/useStoreFetch'
import type { ApexOptions } from 'apexcharts';
import type { Value } from '../../types/types'
import 'react-calendar/dist/Calendar.css';


function Home() {
  const { carts, todos, users, fetchAll } = useDashboardData()
  const { topic } = useTopic()
  const [value, setValue] = useState<Value>(new Date());

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const cartData = carts ? carts.map((c) => c.total) : [];
  const revenueData = carts ? carts.reduce((sum, cart) => sum + (cart.total || 0), 0).toFixed(0) : 0
  const userData = users ? users.map((u) => u.id) : []
  const todosData = todos ? todos.length : 0

  const chartOptions: ApexOptions = {
    chart: { 
      id: 'basic-area', 
      toolbar: { show: false },
      fontFamily: 'Inter, sans-serif',
    },
    xaxis: { 
      categories: carts ? carts.map((c) => `Item ${c.id}`) : []
    },
    stroke: { curve: 'smooth' },
    theme: { mode: topic ? 'dark' : 'light' },
    dataLabels: { enabled: false }
  };

  return (
    <div className="w-full p-6 text-black dark:text-white min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col gap-6">
        <div className='w-full flex justify-center px-4'>
          <div className="flex flex-row justify-center gap-6 w-full max-w-7xl">
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <p className='text-gray-400 text-sm'>Total Users</p>
              <h1 className="text-3xl font-bold mt-1">{userData.length}</h1>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <p className='text-gray-400 text-sm'>Project</p>
              <h1 className="text-3xl font-bold mt-1">42</h1>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <p className='text-gray-400 text-sm'>Tasks</p>
              <h1 className="text-3xl font-bold mt-1">{todosData}</h1>
            </div>
            <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl shadow p-4">
              <p className='text-gray-400 text-sm'>Revenue</p>
              <h1 className="text-3xl font-bold mt-1">{revenueData}</h1>
            </div>
          </div>
        </div>


        <div className="w-full flex justify-center px-4">
          <div className="flex flex-row gap-6 items-stretch w-full max-w-7xl"> 
            <div className="flex-1 bg-white dark:bg-gray-800 min-h-[350px] rounded-xl shadow p-4">
              <Chart
                type="bar"
                height="100%" 
                width="100%" 
                series={[{ name: 'Carts', data: cartData }]}
                options={{
                  ...chartOptions,
                  chart: {
                    ...chartOptions.chart,
                    height: '90%',
                    width: '100%'
                  }
                }}
              />
            </div>

            <div className={`${topic ? "dark" : ""}`}> 
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow w-[380px] h-full">
                <Calendar 
                  onChange={(x) => setValue(x)} 
                  value={value} 
                  className="border-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
