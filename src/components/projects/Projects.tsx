import { useEffect, useState } from 'react';
import { useDashboardData } from '../../hooks/useStoreFetch'
import { useTopic } from '../../hooks/useStoreTopic';

function Projects() {
  const [ search, setSearch ] = useState('')
  const { topic } = useTopic()
  const { users, projects, fetchAll } = useDashboardData()

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  const filterProjects = projects?.filter(project =>
    project.title.toLowerCase().includes(search.toLowerCase())
  ) || []

  return (
    <div className={`my-5 ${topic ? "text-white" : "text-black"}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex-1 min-w-[200px]">
          <input
            placeholder='Search project'
            onChange={e => setSearch(e.target.value)}
            value={search}
            type="text"
            className={`w-full max-w-md px-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-200
              ${topic 
                ? "bg-slate-900 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500" 
                : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500" 
              }`} 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filterProjects.map((project) => {
          const percent = (project.id * 20 % 100) + 20
          
          return (
            <div
              key={project.id}
              className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:shadow-md
                ${topic
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-slate-200"}`}>
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-2.5 py-1 text-xs rounded-full font-medium
                    ${percent === 100
                      ? "bg-green-500/20 text-green-600"
                      : "bg-blue-500/20 text-blue-400"}`}>
                  {percent === 100 ? 'Сompleted' : 'In Progress'}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                {project.title}
              </h3>
              <p
                className={`text-sm leading-6 mb-6 line-clamp-3
                  ${topic ? "text-slate-400" : "text-slate-500"}`}>
                {project.body}
              </p>
              <div className="mb-3">
                <div
                  className={`w-full h-2 rounded-full overflow-hidden
                    ${topic ? "bg-slate-700" : "bg-slate-200"}`}>
                  <div
                   className='bg-blue-500 h-full'
                   style={{ width: `${percent}%` }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  <img src={users?.find((u) => u.id == 1)?.image} alt="user" className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white" />
                  <img src={users?.find((u) => u.id == 2)?.image} alt="user" className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white" />
                  <img src={users?.find((u) => u.id == 3)?.image} alt="user" className="w-8 h-8 rounded-full bg-green-500 border-2 border-white" />
                </div>

                <span
                  className={`text-sm font-medium
                    ${topic ? "text-slate-300" : "text-slate-500"}`}>
                  {percent}%
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
