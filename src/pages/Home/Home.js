import { Box, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    try {
      const getCurrencies = async () => {
        const {
          data: { data },
        } = await axios.get('https://api.coinbase.com/v2/currencies');
        setCurrencies(data);
      };
      getCurrencies();
    } catch (e) {
      console.log('Error fetching data', e);
    }
  }, []);

  return (
    <Box>
      <Box>
        <Typography color="secondary" variant="h5" component="h2">
          List of currencies
        </Typography>
      </Box>
      <Box>
        {currencies.map(({ id, name }, index) => (
          <Box key={index} pt={1} pb={1}>
            {name} - {id}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
