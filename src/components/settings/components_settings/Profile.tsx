import { useState } from 'react'
import { useTopic } from '../../../hooks/useStoreTopic'

function Profile() {
  const [ avatar, setAvatar ] = useState<File | null>(null);
  const { topic } = useTopic()

  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="flex gap-6">
        <div className="flex-1">
          <div className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:shadow-md
            ${topic
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"}`}>
            <h1 className="text-lg font-semibold mb-4">Personal Information</h1>
            <input type="text" placeholder="Full Name" className={`w-full mb-4 px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
            <input type="email" placeholder="Email" className={`w-full mb-4 px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
            <input type="text" placeholder="Role" className={`w-full mb-4 px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
            <input type="text" placeholder="Bio" className={`w-full px-4 py-2 rounded border outline-none ${topic ? "bg-slate-800 border-slate-700 text-white" : "bg-white border-slate-300"}`} />
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Save Changes</button>
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
                    if (e.target.files) setAvatar(e.target.files[0])
                }}
                className="hidden"
            />
            {avatar && <img src={URL.createObjectURL(avatar)} alt="Avatar" className="mb-4 w-32 h-32 object-cover rounded-full" />}
            <label htmlFor="fileInput" className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Добавьте фото
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile