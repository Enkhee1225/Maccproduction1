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
import MKTypography from "components/MKTypography";

function Typography() {
  return (
    <MKBox component="section" py={8}>
      <Container>
        <Grid item xs={12} sm={9}>
          <MKTypography variant="h2" color="white">
            Үнийн санал
          </MKTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MKTypography variant="h4" color="white">
            Уран сайхны тавилттай реклам
          </MKTypography>
        </Grid>
        <Grid container alignItems="center" py={2}>
          <Grid item xs={12} sm={3}>
            <MKTypography
              variant="button"
              color="white"
              fontWeight="bold"
              textTransform="uppercase"
            >
              1 сек
            </MKTypography>
          </Grid>

          <Grid item xs={12} sm={9}>
            <MKTypography variant="h4" color="white">
              300.000
            </MKTypography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MKTypography variant="h4" color="white">
            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                Хөтлөлттэй реклам
              </MKTypography>
            </Grid>
            <Grid container alignItems="center" py={2}>
              <Grid item xs={12} sm={3}>
                <MKTypography
                  variant="button"
                  color="white"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  1 сек
                </MKTypography>
              </Grid>

              <Grid item xs={12} sm={9}>
                <MKTypography variant="h4" color="white">
                  400.000
                </MKTypography>
              </Grid>
            </Grid>
          </MKTypography>
        </Grid>
        <Grid item xs={12} sm={9}>
          <MKTypography variant="h4" color="white">
            <Grid item xs={12} sm={9}>
              <MKTypography variant="h4" color="white">
                Нэрийн реклам
              </MKTypography>
            </Grid>
            <Grid container alignItems="center" py={2}>
              <Grid item xs={12} sm={3}>
                <MKTypography
                  variant="button"
                  color="white"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  1 сек
                </MKTypography>
              </Grid>

              <Grid item xs={12} sm={9}>
                <MKTypography variant="h4" color="white">
                  250.000
                </MKTypography>
              </Grid>
            </Grid>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Typography;
