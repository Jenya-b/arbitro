import { Header } from 'components/Header/Header';
import { Main } from 'components/Main/Main';
import './App.scss';

export const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
};
