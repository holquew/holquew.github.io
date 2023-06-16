import React, { useState, useCallback, useEffect } from "react";
import { Grid, Box, TextField, Button, Container, Typography, Input } from "@material-ui/core";
import BaseCard from "../../components/BaseCard/BaseCard";

const VND_RATE = 0.054;

const Dashboard1 = () => {
  const [sourceCountry] = useState({ 'name': '베트남', 'currency': 'VND' });
  const [destCountry] = useState({ 'name': '대한민국', 'currency': 'KRW' });
  const [exchangeRate, setExchangeRate] = useState(VND_RATE);

  const [price, setPrice] = useState();
  const [exchangedPrice, setExchangedPrice] = useState();

  const [editRateMode, setEditRateMode] = useState(false);

  const handlePriceInputChange = useCallback((e) => {
    setPrice(e.target.value);
  }, []);

  const handleRateInputChange = useCallback((e) => {
    const value = parseFloat(e.target.value);
    // if (isNaN(value)) return;
    setExchangeRate(value);
  }, []);

  const handleRateEditButtonClick = useCallback(() => {
    setEditRateMode((prevState) => !prevState);
  }, []);

  const handleResetButtonClick = useCallback(() => {
    setEditRateMode(false);
    setExchangeRate(VND_RATE);
    setPrice('');
    setExchangedPrice('');
  }, []);

  useEffect(() => {
    if (!price) return;

    const result = (price * exchangeRate).toLocaleString();
    setExchangedPrice(result)
  }, [price, exchangeRate])


  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          mr: 1,
          mb: 1,
          float: 'right',
          marginRight: '20px'
        }}
        onClick={handleResetButtonClick}
      >
        Set to default
      </Button>
      <Grid container spacing={0}>
        <Grid item
          xs={12}
          lg={12}
          sm={12}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}>
          <BaseCard title="적용 환율" >
            <Box>{sourceCountry.name} 1 {sourceCountry.currency} <br />
              <Container sx={{
                display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignContent: 'space-between'
              }}>
                {editRateMode ?
                  <Input
                    id="exchange-rate"
                    label={'적용 환율'}
                    type="number"
                    fullWidth
                    value={exchangeRate}
                    onChange={handleRateInputChange}
                  /> :
                  <Box sx={{ marginTop: '10px', fontSize: '20px' }}>= {destCountry.name} {exchangeRate} {destCountry.currency}</Box>}
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    mr: 1,
                    mb: {
                      xs: 1,
                      sm: 0,
                      lg: 0,
                    },
                    marginTop: '10px'
                  }}
                  onClick={handleRateEditButtonClick}
                >
                  {editRateMode ? '저장' : '수정'}
                </Button>
              </Container>
            </Box>
          </BaseCard>

        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="얼마임?" >
            <TextField
              id="source"
              label={`${sourceCountry.name} 돈`}
              type="number"
              fullWidth
              value={price}
              onChange={handlePriceInputChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </BaseCard>

        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <BaseCard title="이거임." >
            {/* <TextField
              id="destination"
              label={`${destCountry.name} 돈`}
              type="number"
              fullWidth
              disabled
              value={price ? price * exchangeRate : 0}
              InputLabelProps={{
                shrink: true,
              }}
            /> */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{price ? parseFloat(price).toLocaleString() : '0'} </h3>
              <h3>{sourceCountry.currency}</h3>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>{exchangedPrice || '0'} </h3>
              <h3>{destCountry.currency}</h3>
            </Box>
          </BaseCard>

        </Grid>
      </Grid>
    </Box >
  );
};

export default Dashboard1;
