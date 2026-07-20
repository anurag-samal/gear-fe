import { createSignal } from "solid-js";

import type { Accessor, Setter } from "solid-js";

import type { ColumnFiltersState, TableOptions } from "@tanstack/solid-table";

import { getFilteredRowModel } from "@tanstack/solid-table";

export interface TableFiltering<TData> {
  state: {
    columnFilters: Accessor<ColumnFiltersState>;

    globalFilter: Accessor<string>;
  };

  setters: {
    columnFilters: Setter<ColumnFiltersState>;

    globalFilter: Setter<string>;
  };

  options: Pick<
    TableOptions<TData>,
    "getFilteredRowModel" | "onColumnFiltersChange" | "onGlobalFilterChange"
  >;
}

export function useTableFiltering<TData>(
  filtering: boolean,
  searching: boolean,
): TableFiltering<TData> | undefined {
  if (!filtering && !searching) {
    return undefined;
  }

  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );

  const [globalFilter, setGlobalFilter] = createSignal("");

  return {
    state: {
      columnFilters,

      globalFilter,
    },

    setters: {
      columnFilters: setColumnFilters,

      globalFilter: setGlobalFilter,
    },

    options: {
      getFilteredRowModel: getFilteredRowModel(),

      ...(filtering && {
        onColumnFiltersChange: setColumnFilters,
      }),

      ...(searching && {
        onGlobalFilterChange: setGlobalFilter,
      }),
    },
  };
}
