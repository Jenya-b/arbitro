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
      return <RenderHeader param="Цена" />;
    },
  },
  {
    field: 'min_volume',
    headerName: 'min_volume',
    width: 100,
    renderHeader: () => {
      return <RenderHeader param="Минимум" />;
    },
  },
  {
    field: 'max_volume',
    headerName: 'max_volume',
    width: 100,
    renderHeader: () => {
      return <RenderHeader param="Максимум" />;
    },
  },
  {
    field: 'pay_method',
    headerName: 'pay_method',
    width: 120,
    renderHeader: () => {
      return <RenderHeader param="Способ оплаты" />;
    },
  },
];

export const Table = ({ rows, title }) => {
  return (
    <div className="table">
      <h3 className="table__title">{title}</h3>
      <div className="table__wrapper">
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.ad_id}
          rowHeight={30}
          columnHeaderHeight={40}
          paginationMode={'server'}
          rowCount={1000}
          hideFooter={true}
        />
      </div>
    </div>
  );
};
