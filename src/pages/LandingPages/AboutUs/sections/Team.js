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

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import team1 from "assets/images/miigaa.jpg";
import team2 from "assets/images/ganbayr.jpg";
import team3 from "assets/images/tumuruu.jpg";
import team4 from "assets/images/bilguun.jpg";
import team5 from "assets/images/tuwshuu.jpg";
import team6 from "assets/images/duluuu 2.jpg";
import team7 from "assets/images/baylagmaa.jpg";
import team8 from "assets/images/bayrdelger.jpg";
import team0 from "assets/images/BDMTgroup.jpg.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Манай баг
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team0}
                name="BDMT Group"
                position={{ color: "info", label: "" }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team1}
                name="Б.Мягмарчулуун"
                position={{ color: "info", label: "Macc медиа CEO" }}
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team2}
                name="Ш.Ганбаяр"
                position={{ color: "info", label: "Ерөнхий Менежер" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team6}
                name="Б.Гандөл"
                position={{ color: "info", label: "Эвлүүлэгч, Найруулагч" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team3}
                name="М.Төмөрбат"
                position={{ color: "info", label: "Ерөнхий зураглаач" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team5}
                name="Ж.Түвшинжаргал"
                position={{ color: "info", label: "График дизайнер" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={team4}
                name="Г.Билгүүн"
                position={{ color: "info", label: "Зураглаач" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team7}
                name="Г.Баялагмаа"
                position={{ color: "info", label: "Менежер" }}
                description=""
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={team8}
                name="Ч. Баярдэлгэр"
                position={{ color: "info", label: "Эвлүүлгийн найруулагч, Дизайнер" }}
                description=""
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
