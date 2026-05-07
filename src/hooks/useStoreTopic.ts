import { useStoreTopic } from '../store/storeOne';

export function useTopic() {
  const topic = useStoreTopic(s => s.topic);
  const toggleTopic = useStoreTopic(s => s.toggleTopic);

  return { topic, toggleTopic };
}