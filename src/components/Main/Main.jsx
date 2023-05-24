import { Table } from 'components/Table/Table';
import { TableList } from 'components/TableList/TableList';
import './Main.scss';

export const Main = ({ data }) => {
  const renderItem = (rows, nameExchange) => <Table rows={rows} title={nameExchange} />;

  const renderEmpty = () => <></>;

  if (!data) return <h2>Нет данных для отображения</h2>;

  return (
    <main className="main">
      <TableList
        renderItem={renderItem}
        renderEmpty={renderEmpty}
        data={data['SELL']}
        title="SELL"
      />
      <div className="glass-applications"></div>
      <TableList renderItem={renderItem} renderEmpty={renderEmpty} data={data['BUY']} title="BUY" />
    </main>
  );
};
