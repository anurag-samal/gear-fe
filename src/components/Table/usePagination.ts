import { createSignal } from "solid-js";

import type { Accessor, Setter } from "solid-js";

import type { PaginationState, TableOptions } from "@tanstack/solid-table";

import { getPaginationRowModel } from "@tanstack/solid-table";

export interface TablePagination<TData> {
  state: Accessor<PaginationState>;

  onChange: Setter<PaginationState>;

  options: Pick<
    TableOptions<TData>,
    "getPaginationRowModel" | "onPaginationChange"
  >;
}

export function useTablePagination<TData>(
  enabled: boolean,
  initialPageSize = 10,
): TablePagination<TData> | undefined {
  if (!enabled) {
    return undefined;
  }

  const [state, onChange] = createSignal<PaginationState>({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  return {
    state,

    onChange,

    options: {
      getPaginationRowModel: getPaginationRowModel(),

      onPaginationChange: onChange,
    },
  };
}
