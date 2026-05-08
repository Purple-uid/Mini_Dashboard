import { useState, useEffect } from 'react';
import { useDashboardData } from '../../hooks/useStoreFetch'
import { useTopic } from '../../hooks/useStoreTopic';

function Users() {
  const [ search, setSearch ] = useState("");
  const [ page, setPage ] = useState(1)
  const { topic } = useTopic()
  const { users, fetchAll } = useDashboardData()

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const filterUsers = (users || []).filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLocaleLowerCase()
    return fullName.includes(search.toLowerCase())
  })

  const itemsPage = 8;
  const lastItem = page * itemsPage;
  const firstItem = lastItem - itemsPage;
  const pageUsers = filterUsers.slice(firstItem, lastItem);
  const totalPages = Math.ceil((users?.length || 0) / itemsPage)

  const pageNum = []
  for (let i = 1; i <= totalPages; i++) {
    pageNum.push(i);
  }

  return (
    <div className={`flex flex-col items-center justify-center w-full my-6 ${topic ? "text-white" : "text-black"}`}>
      <div>
        <input
         placeholder='Search user'
         onChange={e => {
          setSearch(e.target.value) 
          setPage(1)
         }}
         value={search}
         type="text"
         className={`w-full max-w-md px-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-200
          ${topic 
            ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500" 
            : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          }`}
          />
      </div>
      <div className='flex flex-col gap-3 w-full max-w-5xl px-4'>
        {pageUsers.map((u) => (
            <div className='grid grid-cols-[50px_2.5fr_3.5fr_1.5fr_1fr] gap-4 items-center border-b border-gray-800 py-3 text-left' key={u.id}>
              <img className='flex justify-start items-center' src={u.image}/>
              <span className='font-medium truncate'>{u.firstName} {u.lastName}</span>
              <span className='text-gray-400 truncate'>{u.email}</span>
              <span className='text-gray-300 capitalize'>{u.role}</span>
              <span className='text-gray-400'>{u.address?.state}</span>
            </div>
        ))}
      </div>

      <div className="flex gap-2 mt-6 justify-center">
        {pageNum.map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            className={`px-3 py-1.5 rounded text-white text-sm transition-colors
              ${page === num ? 'bg-blue-500' : 'bg-gray-400 hover:bg-gray-500'}`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Users
