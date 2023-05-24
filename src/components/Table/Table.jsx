import { DataGrid } from '@mui/x-data-grid';

import { RenderHeader } from './RenderHeader/RenderHeader';
import './Table.scss';

const columns = [
  {
    field: 'user',
    width: 130,
    renderHeader: () => {
      return <RenderHeader param="Имя" />;
    },
  },
  {
    field: 'price',
    headerName: 'price',
    width: 100,
    renderHeader: () => {
      return <RenderHeader param="price" />;
    },
  },
  {
    field: 'min_volume',
    headerName: 'min_volume',
    width: 100,
    renderHeader: () => {
      return <RenderHeader param="min_volume" />;
    },
  },
  {
    field: 'max_volume',
    headerName: 'max_volume',
    width: 100,
    renderHeader: () => {
      return <RenderHeader param="max_volume" />;
    },
  },
  {
    field: 'pay_method',
    headerName: 'pay_method',
    width: 100,
    renderHeader: () => {
      return <RenderHeader param="pay_method" />;
    },
  },
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
