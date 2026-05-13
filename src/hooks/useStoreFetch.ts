import { useDashboardStore } from '../store/stpreAPI';

export function useDashboardData() {
    const carts = useDashboardStore(prev => prev.carts)
    const users = useDashboardStore(prev => prev.users)
    const todos = useDashboardStore(prev => prev.todos)
    const projects = useDashboardStore(prev => prev.projects)
    const fetchAll = useDashboardStore(prev => prev.fetchAll)

    return { carts, users, todos, projects, fetchAll }
}