import { useEffect, useState } from 'react';

import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import { data } from 'data';
import './App.scss';

export const App = () => {
  const [tabNames, setTabNames] = useState([]);
  const [valueTab, setValueTab] = useState('');

  useEffect(() => {
    if (!data || !data.data) return;

    const names = Object.keys(data.data);
    setValueTab(names[0]);
    setTabNames(names);
  }, []);

  const writeTabValue = (event, newValue) => {
    setValueTab(newValue);
  };

  return (
    <div className="wrapper">
      <Header tabNames={tabNames} valueTab={valueTab} writeTabValue={writeTabValue} />
      <Main data={data.data[valueTab]} />
    </div>
  );
};
