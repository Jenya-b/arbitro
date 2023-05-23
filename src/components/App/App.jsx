import { useEffect, useState } from 'react';

import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import './App.scss';

export const App = () => {
  const [data, setData] = useState();
  const [tabNames, setTabNames] = useState([]);
  const [valueTab, setValueTab] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!data) return;

    const names = Object.keys(data);
    setValueTab(names[0]);
    setTabNames(names);
  }, [data]);

  const writeTabValue = (event, newValue) => {
    setValueTab(newValue);
  };

  if (!data) return <h3>Нет данных для отображения</h3>;

  return (
    <div className="wrapper">
      <Header tabNames={tabNames} valueTab={valueTab} writeTabValue={writeTabValue} />
      <Main data={data[valueTab]} />
    </div>
  );
};
