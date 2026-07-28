import {Table} from "@/components/Table";

const users = [
  { id: 1, name: "Anurag", role: "Admin" },
  { id: 2, name: "John", role: "Sales" },
];

const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];

export default function TablePlayground() {
  return (
    <Table
      data={() => users}
      columns={columns}
      sorting
      filtering
      searching
      pagination
    />
  );
}
