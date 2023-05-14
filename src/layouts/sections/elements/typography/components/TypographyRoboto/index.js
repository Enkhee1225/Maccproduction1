/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/jsx-no-useless-fragment */
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
import MKTypography from "components/MKTypography";

function Typography() {
  return (
    <>
      <MKBox component="section" py={8}>
        <Container>
          <Grid container alignItems="center" py={2}>
            <Grid item xs={12} sm={3}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
              >
                1 ширхэг
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                RED KOMODO 6K
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" py={2}>
            <Grid item xs={12} sm={3}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
              >
                2 ширхэг
              </MKTypography>
            </Grid>

            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                BLACK MAGIC 6K{" "}
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" py={2}>
            <Grid item xs={12} sm={3}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
              >
                5 ширхэг
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                SONY A7 III{" "}
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" py={2}>
            <Grid item xs={12} sm={3}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
              >
                1 ширхэг
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                DRОN MAVIC PRO
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" py={2}>
            <Grid item xs={12} sm={3}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
              >
                2 ширхэг
              </MKTypography>
            </Grid>

            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                DRON AIR S PRO
              </MKTypography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" py={2}>
            <Grid item xs={12} sm={3}>
              <MKTypography
                variant="button"
                color="white"
                fontWeight="bold"
                textTransform="uppercase"
              >
                4 ширхэг
              </MKTypography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                ACTION CAMERA
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Typography;
