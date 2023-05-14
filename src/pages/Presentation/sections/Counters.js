/* eslint-disable react/react-in-jsx-scope */

/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3} pt={3} pb={8}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard count={220} suffix="+" title="Хийсэн ажлууд" />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <DefaultCounterCard count={14} suffix="+" title="Хийгдэж байгаа ажлууд" />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard count={4} title="Хийх ажлууд" />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
