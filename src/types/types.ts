export interface OpenSidebar {
  isOpen: boolean;
  toggle: () => void;
}

export interface SwitchingTopic {
  topic: boolean;
  toggleTopic: () => void;
}