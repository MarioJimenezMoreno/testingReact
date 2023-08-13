export interface Task {
  startHour: string;
  endHour: string;
  duration: string;
  title: string;
  category: string;
  date: string;
}
export interface Link {
  label: string;
  url: string;
}

export interface HeaderProps {
  links: Link[];
}
export interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface TaskCreatorProps {
  handleNewTask: () => void;
  selectedDate: Date;
}
export interface DaysContainerLoaderProps {
  selectedDate: Date;
}
export interface DaysContainerProps {
  tasks: Task[];
  selectedDate: Date;
}
