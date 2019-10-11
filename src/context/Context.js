import React, { useState, useEffect } from 'react';

export const DataContext = React.createContext();
export const DataConsumer = DataContext.Consumer;

const DataProvider = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = 'https://front-challenge-cinthyasegura.getsandbox.com/';

      try {
        const getData = await fetch(url, {
          method: 'POST'
        });
        const dataResponse = await getData.json();
        setData([dataResponse.data]);
        console.log([dataResponse.data]);
      } catch (error) {
        console.warn(error);
      }
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};
export default DataProvider;
