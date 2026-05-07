import { create } from 'zustand'
import axios from 'axios'
import type { DashboardState } from '../types/types'


export const useDashboardStore = create<DashboardState>((set) => ({
    carts: null,
    users: null,
    todos: null,
    isLoadingTotal: false,
    isLoadingUser: false,
    isisLoadingTodos: false,
    error: null,
    

    fetchAll: async () => {
        set({ isLoadingTotal: true, error: null })
        try{
/*             todo, post */
            const [cart, user, todo ] = await Promise.all([
                axios.get('https://dummyjson.com/carts?limit=20'),
                axios.get('https://dummyjson.com/users'),
                axios.get('https://dummyjson.com/todos'),
            ])
            set({ 
                carts: cart.data.carts,
                users: user.data.users,
                todos: todo.data.todos,
             })
        } catch {
            set({ error: 'Error 404'});
        } finally {
            set({   isLoadingTotal: false,
                    isLoadingUser: false,
                    isisLoadingTodos: false })
        }
    }
}));
