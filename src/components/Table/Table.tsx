import { For, Show, createMemo, splitProps, untrack } from "solid-js";

import {
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";

import type { TableProps } from "./Table.types";

import { TABLE_STYLES } from "./Table.styles";

import { useTableSorting } from "./useSorting";
import { useTableFiltering } from "./useFiltering";
import { useTablePagination } from "./usePagination";

export function Table<TData>(props: TableProps<TData>) {
  const [args, nativeProps] = splitProps(props, [
    "data",
    "columns",
    "class",
    "emptyMessage",
    "sorting",
    "filtering",
    "searching",
    "pagination",
    "initialPageSize",
  ]);

  const sorting = useTableSorting<TData>(untrack(() => args.sorting ?? false));

  const filtering = useTableFiltering<TData>(
    untrack(() => args.filtering ?? false),
    untrack(() => args.searching ?? false),
  );

  const pagination = useTablePagination<TData>(
    untrack(() => args.pagination ?? false),
    untrack(() => args.initialPageSize ?? 10),
  );

  const table = createMemo(() =>
    createSolidTable({
      get data() {
        return args.data();
      },

      columns: args.columns,

      state: {
        sorting: sorting?.state(),

        columnFilters: filtering?.state.columnFilters(),

        globalFilter: filtering?.state.globalFilter(),

        pagination: pagination?.state(),
      },

      getCoreRowModel: getCoreRowModel(),

      ...sorting?.options,

      ...filtering?.options,

      ...pagination?.options,
    }),
  );

  const tableClass = createMemo(
    () => `
      ${TABLE_STYLES.root}
      ${args.class ?? ""}
    `,
  );

  return (
    <div {...nativeProps} class={tableClass()}>
      <table class={TABLE_STYLES.table}>
        <thead>
          <For each={table().getHeaderGroups()}>
            {(headerGroup) => (
              <tr>
                <For each={headerGroup.headers}>
                  {(header) => (
                    <th class={TABLE_STYLES.header}>
                      <Show when={!header.isPlaceholder}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </Show>
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>

        <tbody>
          <Show
            when={table().getRowModel().rows.length > 0}
            fallback={
              <tr>
                <td class={TABLE_STYLES.empty} colSpan={args.columns.length}>
                  {args.emptyMessage ?? "No data available."}
                </td>
              </tr>
            }
          >
            <For each={table().getRowModel().rows}>
              {(row) => (
                <tr class={TABLE_STYLES.row}>
                  <For each={row.getVisibleCells()}>
                    {(cell) => (
                      <td class={TABLE_STYLES.cell}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </Show>
        </tbody>
      </table>
    </div>
  );
}
