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

import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ExampleCard from "pages/Presentation/components/ExampleCard";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

import data from "pages/Presentation/sections/data/Ajliinzar";

function BuiltByDevelopers() {
  const renderData = data.map(({ title, items }) => (
    <Grid container spacing={4} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} md={4} lg={12}>
        <Grid container spacing={2}>
          {items.map(({ image, name, count, route, pro }) => (
            <Grid item xs={12} md={3} sx={{ mb: 0 }} key={name}>
              <Link to={pro ? "/" : route}>
                <ExampleCard image={image} name={name} count={count} pro={pro} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));
  return (
    <>
      <Grid
        container
        item
        xs={12}
        lg={6}
        justifyContent="center"
        sx={{ mx: "auto", textAlign: "center" }}
      >
        <MKTypography variant="h3" color="info" textGradient mb={4}>
          Ажлын зар
        </MKTypography>
      </Grid>
      <Container sx={{ mt: 4 }}>{renderData}</Container>
    </>
  );
}

export default BuiltByDevelopers;
