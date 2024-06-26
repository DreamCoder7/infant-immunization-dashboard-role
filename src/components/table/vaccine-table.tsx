import { type MRT_ColumnDef } from "material-react-table";

import Table from "../ui/table";

import { Vaccine } from "@/utils/types/component";
import VaccineTableToolbarAction from "../table-action/vaccine-action";
import {
  DeleteVaccineRowAction,
  UpdateVaccineRowAction,
  DeactivateVaccineRowAction,
  ViewDetailRowAction,
} from "../table-action/vaccine-row-action";

//column definitions...
const columns: MRT_ColumnDef<Vaccine>[] = [
  {
    enableSorting: false,
    enableEditing: false,
    enableColumnFilter: true,
    enableColumnActions: false,
    enableColumnDragging: false,
    enableGlobalFilter: true,
    header: "Vaccine ID",
    accessorFn: (originalRow) => originalRow.id, //alternate way
    enableHiding: false, //disable a feature for this column
    Cell: ({ cell }) => (
      <p style={{ fontWeight: "bold" }}>
        {cell.getValue<number>().toLocaleString()}
      </p>
    ),
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.name,
    id: "name",
    header: "Vaccine name",
    Header: <p>Vaccine name</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.category,
    id: "category",
    header: "Category",
    Header: <p>Category</p>,
    Cell: ({ cell }) => <p>{cell.getValue<string>().toLocaleString()}</p>, //optional custom cell render
  },
  {
    enableColumnFilter: false,
    enableEditing: false,
    enableColumnActions: false,
    enableColumnDragging: false,
    accessorFn: (originalRow) => originalRow.type,
    id: "type",
    header: "Type",
    Header: <p>Type </p>,
    Cell: ({ value }) => <p>{value !== undefined && value !== null ? (typeof value === 'number' ? value.toLocaleString() : value) : ''}</p>,
  },
  // Add more columns as per your requirements...
];

const VaccineTable = ({ vaccines }: { vaccines: Vaccine[] }) => {
  console.log(vaccines);
  return (
    <Table
      columnDefinition={columns as any}
      data={vaccines}
      RowActions={[
        ViewDetailRowAction,
        UpdateVaccineRowAction,
        DeactivateVaccineRowAction,
        DeleteVaccineRowAction,
      ]}
      ToolBarAction={VaccineTableToolbarAction}
    />
  );
};

export default VaccineTable;
