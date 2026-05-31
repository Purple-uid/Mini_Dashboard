import { useStoreAvatar, useStoreDataUsers } from '../store/storeSettings'
import type { SwitchingAvatar, SaveDataUser } from '../types/types'

export function useAvatar() {
    const avatar = useStoreAvatar((state: SwitchingAvatar) => state.avatar)
    const toggleAvatar = useStoreAvatar((state: SwitchingAvatar) => state.toggleAvatar)

    return { avatar, toggleAvatar }
}

export function useDataUsers() {
    const user = useStoreDataUsers((state: SaveDataUser) => state.user)
    const saveData = useStoreDataUsers((state: SaveDataUser) => state.saveData) 
    
    return { user, saveData }
}