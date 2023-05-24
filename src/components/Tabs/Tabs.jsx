import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { formatMenuText } from 'utils/formatText';

export const BasicTabs = ({ handleChange = (f) => f, value, tabNames }) => (
  <Tabs value={value} onChange={handleChange}>
    {tabNames.map((item, index) => (
      <Tab key={index} value={item} label={formatMenuText(item)} />
    ))}
  </Tabs>
);
