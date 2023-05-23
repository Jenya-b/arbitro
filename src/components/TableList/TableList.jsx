import { useState, useEffect } from 'react';

import './TableList.scss';

export const TableList = ({ data, renderItem = (f) => f, renderEmpty, title }) => {
  const [nameExchanges, setNameExchanges] = useState([]);

  useEffect(() => {
    if (!data) return;

    const names = Object.keys(data);
    setNameExchanges(names);
  }, []);

  if (!data) return renderEmpty;

  return (
    <div className="table-list">
      <h2>{title}</h2>
      <ul>
        {nameExchanges.map((item, i) => (
          <li key={i}>{renderItem(data[item], item)}</li>
        ))}
      </ul>
    </div>
  );
};
