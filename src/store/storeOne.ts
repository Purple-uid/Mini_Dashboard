import { create } from 'zustand';
import { persist } from "zustand/middleware";
import type { OpenSidebar, SwitchingTopic } from '../types/types'


export const useStoreSidebar = create<OpenSidebar>(
  (set) => ({
    isOpen: false,

    toggle: () => set(state => ({ isOpen: !state.isOpen }))
}));

export const useStoreTopic = create<SwitchingTopic>()(
  persist(
    (set) => ({
      topic: false,
      toggleTopic: () => set((state) => ({ topic: !state.topic })),
    }),
    {
      name: 'topic',
    }
  )
);