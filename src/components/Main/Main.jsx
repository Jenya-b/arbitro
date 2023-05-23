import { Table } from 'components/Table/Table';
import './Main.scss';
import { TableList } from 'components/TableList/TableList';

export const Main = ({ data }) => {
  const renderItem = (rows, nameExchange) => <Table rows={rows} title={nameExchange} />;

  if (!data) return <h2>Нет данных для отображения</h2>;

  return (
    <main className="main">
      <TableList renderItem={renderItem} renderEmpty={<></>} data={data['SELL']} title="SELL" />
      <div></div>
      <TableList renderItem={renderItem} renderEmpty={<></>} data={data['BUY']} title="BUY" />
    </main>
  );
};
