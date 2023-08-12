export interface Task {
  startHour: string;
  endHour: string;
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
