import { create } from 'zustand';
import { persist } from "zustand/middleware";
import type { SwitchingAvatar, SaveDataUser } from '../types/types'

export const useStoreAvatar = create<SwitchingAvatar>()(
    persist(
        (set) => ({
            avatar: null,
            toggleAvatar: (avatarFile) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    set({ avatar: reader.result as string })
                };
                reader.readAsDataURL(avatarFile); 
            }
        }),
        {
            name: "avatar-store",
        }
    )
)

export const useStoreDataUsers = create<SaveDataUser>()(
    persist(
        (set) => ({
            user: null,
            saveData: (userData) => set({ user: userData })
        }),
        {
            name: 'userData-store',
        }
    )
)