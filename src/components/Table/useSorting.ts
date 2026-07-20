import { createSignal } from "solid-js";

import type { Accessor, Setter } from "solid-js";

import type { SortingState, TableOptions } from "@tanstack/solid-table";

import { getSortedRowModel } from "@tanstack/solid-table";

export interface TableSorting<TData> {
  state: Accessor<SortingState>;

  onChange: Setter<SortingState>;

  options: Pick<TableOptions<TData>, "getSortedRowModel" | "onSortingChange">;
}

export function useTableSorting<TData>(
  enabled: boolean,
): TableSorting<TData> | undefined {
  if (!enabled) {
    return undefined;
  }

  const [state, onChange] = createSignal<SortingState>([]);

  return {
    state,

    onChange,

    options: {
      getSortedRowModel: getSortedRowModel(),

      onSortingChange: onChange,
    },
  };
}
