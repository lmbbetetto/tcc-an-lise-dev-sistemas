export interface NotifyInterface {
  notify: (props: notifyProps) => void;
}

export interface notifyProps {
  text: string;
  type: 'success' | 'error' | 'warning';
}
