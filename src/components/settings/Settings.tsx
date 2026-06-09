import { useEffect, useState } from 'react'
import { useTopic } from '../../hooks/useStoreTopic'
import { useAvatar, useDataUsers } from '../../hooks/useStoreSettings'
import { FaUser, FaEnvelope, FaUserTag, FaFileAlt } from 'react-icons/fa'

function Settings() {
  const { topic } = useTopic()
  const [isEditing, setIsEditing] = useState(false)
        
  const { avatar, toggleAvatar } = useAvatar()
  const { user, saveData } = useDataUsers()

  const [ name, setName ] = useState(user?.name || '')
  const [ email, setEmail ] = useState(user?.email || '')
  const [ role, setRole ] = useState(user?.role || '')
  const [ bio, setBio ] = useState(user?.bio || '')
        
      
  useEffect(() => {
    if(user) {
      setName(user?.name || '')
      setEmail(user?.email || '')
      setRole(user?.role || '')
      setBio(user?.bio || '')
    }
  }, [user])

  const handleSave = () => {
    saveData({ name, email, role, bio })
    setIsEditing(false)
  }
  return (
    <div className={`my-5 px-[3rem] ${topic ? "text-white" : "text-black"}`}>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        <div className="flex gap-6">
          <div className="flex-1">
            <div className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:shadow-md
              ${topic
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"}`}>
              <h1 className="text-lg font-semibold mb-4">Personal Information</h1>
              {isEditing ? (
              <>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name" className={`w-full mb-4 px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" className={`w-full mb-4 px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
                <input value={role} onChange={e => setRole(e.target.value)} type="text" placeholder="Role" className={`w-full mb-4 px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
                <input value={bio} onChange={e => setBio(e.target.value)} type="text" placeholder="Bio" className={`w-full px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
              </>) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`p-4 rounded-lg transition-all duration-200 hover:shadow-md cursor-default ${topic ? "bg-slate-800/50 hover:bg-slate-800/70" : "bg-blue-50/50 hover:bg-blue-50"}`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-lg ${topic ? "bg-blue-500/20 text-blue-400" : "bg-blue-100 text-blue-600"}`}>
                          <FaUser size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-semibold mb-1 ${topic ? "text-slate-400" : "text-slate-500"}`}>Full Name</p>
                          <p className={`text-sm font-medium truncate ${topic ? "text-slate-200" : "text-slate-800"}`}>{name || 'Не указано'}</p>
                        </div>
                      </div>
                    </div>
      
                    <div className={`p-4 rounded-lg transition-all duration-200 hover:shadow-md cursor-default ${topic ? "bg-slate-800/50 hover:bg-slate-800/70" : "bg-green-50/50 hover:bg-green-50"}`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-lg ${topic ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-600"}`}>
                          <FaEnvelope size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-semibold mb-1 ${topic ? "text-slate-400" : "text-slate-500"}`}>Email</p>
                          <p className={`text-sm font-medium truncate ${topic ? "text-slate-200" : "text-slate-800"}`}>{email || 'Не указано'}</p>
                        </div>
                      </div>
                    </div>
      
                    <div className={`p-4 rounded-lg transition-all duration-200 hover:shadow-md cursor-default ${topic ? "bg-slate-800/50 hover:bg-slate-800/70" : "bg-purple-50/50 hover:bg-purple-50"}`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-lg ${topic ? "bg-purple-500/20 text-purple-400" : "bg-purple-100 text-purple-600"}`}>
                          <FaUserTag size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-semibold mb-1 ${topic ? "text-slate-400" : "text-slate-500"}`}>Role</p>
                          <p className={`text-sm font-medium truncate ${topic ? "text-slate-200" : "text-slate-800"}`}>{role || 'Не указано'}</p>
                        </div>
                      </div>
                    </div>
      
                    <div className={`p-4 rounded-lg transition-all duration-200 hover:shadow-md cursor-default ${topic ? "bg-slate-800/50 hover:bg-slate-800/70" : "bg-orange-50/50 hover:bg-orange-50"}`}>
                      <div className="flex items-start gap-3">
                        <div className={`p-2.5 rounded-lg ${topic ? "bg-orange-500/20 text-orange-400" : "bg-orange-100 text-orange-600"}`}>
                          <FaFileAlt size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-semibold mb-1 ${topic ? "text-slate-400" : "text-slate-500"}`}>Bio</p>
                          <p className={`text-sm font-medium truncate ${topic ? "text-slate-200" : "text-slate-800"}`}>{bio || 'Не указано'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {isEditing ? 
                <button onClick={handleSave} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button> : 
                <button onClick={() => setIsEditing(true)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit</button>
              }
            </div>
          </div>
      
          <div className="flex-1 ">
            <div className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:shadow-md 
              ${topic
                ? "bg-slate-900 border-slate-800"
                : "bg-white border-slate-200"}`}>
              <h1 className="text-lg font-semibold mb-4">Avatar</h1>
              <input
                  id="fileInput"
                  type="file"
                  onChange={(e) => {
                      if (e.target.files) toggleAvatar(e.target.files[0])
                  }}
                  className="hidden"
              />
              {avatar && <img src={avatar} alt="Avatar" className="mb-4 w-32 h-32 object-cover rounded-full" />}
              <label htmlFor="fileInput" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Add photo
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
