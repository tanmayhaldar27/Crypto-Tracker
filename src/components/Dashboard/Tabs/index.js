import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./style.css";
import { createTheme , ThemeProvider } from '@mui/material';
import Grid from '../Grid';
import List from "../List";
export default function TabsComponent({coins}) {
  const [value, setValue] = React.useState("grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style1 = {
    color:"var(--white)",
    fontFamily:"Fira Sans",
    fontSize:"1.8rem",
    '&.Mui-selected': {
      color: 'var(--blue)',
    },
    textTransform:"capitalize"
  }
  const theme = createTheme({
    palette:{
      primary:{
        main: '#9a8c98',
      },
    },
  });


  const style2 = {
    color: "var(--white)" ,
    fontFamily:'Fira Sans',
    fontSize:"1.6rem",
  }

  return (
    <ThemeProvider  theme={theme}>
      <TabContext value={value}>
          <TabList variant="fullWidth" onChange={handleChange} aria-label="lab API tabs example">
            <Tab className='tabHeading' label="Grid" value="grid" sx={style1} />
            <Tab className='tabHeading' label="List" value="list" sx={style1} />
            
          </TabList>
        <TabPanel sx={style2}   value="grid">
        <div className='gridFlex'>
          {
             coins.map((coin, index)=>{
              return(
               <Grid coin = {coin} key = {index} delay={(index % 4) * 0.2}/>
              )
            })
          }
           </div>
        </TabPanel>
        <TabPanel sx={style2} value="list">
          <div className='listFlex'>
            {
              coins.map((coin , index)=>{
                return (
                  <List coin={coin} key={index} />
                )
              })
            }
          </div>
        </TabPanel>
      </TabContext>
      </ThemeProvider>
  );
}