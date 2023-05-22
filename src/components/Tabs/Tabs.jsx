import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const BasicTabs = ({ handleChange = (f) => f, value, tabNames }) => (
  <Tabs value={value} onChange={handleChange}>
    {tabNames.map((item, index) => (
      <Tab key={index} value={item} label={item} />
    ))}
  </Tabs>
);
