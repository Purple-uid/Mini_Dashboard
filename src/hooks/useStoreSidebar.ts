import { useStoreSidebar } from '../store/storeOne';

export function useSidebar() {
    const isOpen = useStoreSidebar(prev => prev.isOpen)
    const toggle = useStoreSidebar(prev => prev.toggle)

    return { isOpen, toggle }
}