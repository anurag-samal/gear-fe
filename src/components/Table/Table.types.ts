import type { JSX, Accessor } from "solid-js";

import type { ColumnDef } from "@tanstack/solid-table";

export type TableColumn<TData> = ColumnDef<TData, unknown>;

export interface TableProps<TData> extends JSX.HTMLAttributes<HTMLDivElement> {
  data: Accessor<TData[]>;

  columns: TableColumn<TData>[];

  emptyMessage?: string;

  sorting?: boolean;

  searching?: boolean;
  
  filtering?: boolean;

  globalFiltering?: boolean;

  fuzzyFiltering?: boolean;

  pagination?: boolean;

  initialPageSize?: number;

  pageSizeOptions?: number[];

  selection?: boolean;

  virtualization?: boolean;

  columnManagement?: boolean;
}
