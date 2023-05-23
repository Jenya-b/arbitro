import { BasicTabs } from 'components/Tabs/Tabs';
import './Header.scss';

export const Header = ({ valueTab, tabNames, writeTabValue = (f) => f }) => (
  <header className="header">
    <BasicTabs value={valueTab} tabNames={tabNames} handleChange={writeTabValue} />
  </header>
);
