import { create } from 'zustand'
import axios from 'axios'
import type { DashboardState } from '../types/types'


export const useDashboardStore = create<DashboardState>((set) => ({
    carts: null,
    users: null,
    todos: null,
    projects: null,
    isLoading: false,
    error: null,
    

    fetchAll: async () => {
        set({ isLoading: true, error: null })
        try{
            const [cart, user, todo, post ] = await Promise.all([
                axios.get('https://dummyjson.com/carts?limit=20'),
                axios.get('https://dummyjson.com/users'),
                axios.get('https://dummyjson.com/todos'),
                axios.get('https://dummyjson.com/posts?limit=9'),
            ])
            set({ 
                carts: cart.data.carts,
                users: user.data.users,
                todos: todo.data.todos,
                projects: post.data.posts,
             })
        } catch {
            set({ error: 'Error 404'});
        } finally {
            set({ isLoading: false })
        }
    }
}));
