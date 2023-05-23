import { DataGrid } from '@mui/x-data-grid';

import './Table.scss';

const columns = [
  { field: 'user', headerName: 'user', width: 130 },
  { field: 'price', headerName: 'price', width: 100 },
  { field: 'min_volume', headerName: 'min_volume', width: 100 },
  { field: 'max_volume', headerName: 'max_volume', width: 100 },
  { field: 'pay_method', headerName: 'pay_method', width: 100 },
];

export const Table = ({ rows, title }) => {
  return (
    <div className="table">
      <h3>{title}</h3>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.ad_id}
        rowHeight={30}
        columnHeaderHeight={40}
      />
    </div>
  );
};
