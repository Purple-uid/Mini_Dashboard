export interface OpenSidebar {
  isOpen: boolean
  toggle: () => void
}

export interface SwitchingTopic {
  topic: boolean
  toggleTopic: () => void
}

// export interface SwitchingAvatar {
//   avatar: File | null
//   toggleAvatar: (avatarFile: File) => void
// }

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
}

export interface User {
  id: number
  name: string
  firstName: string
  lastName: string
  image: string
  age: number
  username: string
  email: string
  phone: string
  state: string
  role: string
  birthDate: string
  address: Address
}

export interface Carts {
  id: number
  title: string
  price: number
  total: number
  discountedTotal: number
}

export interface Todos {
  id: number
  todo: string
  completed: boolean
  userId: number
  total: number
}

export interface Project {
  id: number
  title: string
  body: string
  userId: number
  reactions: {
    likes: number
    dislikes: number
  } | null
}

export interface DashboardState {
  users: User[] | null
  carts: Carts[] | null
  todos: Todos[] | null
  projects: Project[] | null
  isLoading: boolean
  error: string | null
  fetchAll: () => Promise<void>
}

export type ValueX = Date | null
export type Value = ValueX | [ValueX, ValueX]