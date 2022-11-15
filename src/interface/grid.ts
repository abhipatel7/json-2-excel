export interface Column {
  field: string;
  title: string;
}

export interface GridProps {
  data: any[] | undefined;
  columns: Column[];
}
