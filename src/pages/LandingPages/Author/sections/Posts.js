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

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/ajluud/zurag1.jpg";
import post2 from "assets/images/ajluud/zurag2.jpg";
import post3 from "assets/images/ajluud/zurag3.jpg";
import post4 from "assets/images/ajluud/zurag4.jpg";
import post5 from "assets/images/ajluud/zurag5.jpg";
import post6 from "assets/images/ajluud/zurag6.jpg";
import post7 from "assets/images/ajluud/zurag7.jpg";
import post8 from "assets/images/ajluud/zurag8.jpg";
import post9 from "assets/images/ajluud/zurag9.jpg";
import post10 from "assets/images/ajluud/zurag10.jpg";
import post11 from "assets/images/ajluud/zurag11.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Бидний хийсэн ажлууд
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="ONB GROUP-GEM CASTLE"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=DTGiZMPhazk",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="ZEGAVIT"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=SuALbJ_8_9A",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="POKO FASHION 5"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=S6NLXt--IQs",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post4}
              title="MICHEL&AMAZONKA"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=CDyzvCIdcbo",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post10}
              title="Mongolia is a strange country 2D animation"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=ns7FFhRpS-A&t=298s",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post11}
              title="BDMT GROUP"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=QDa2BoPubcM",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post5}
              title="MATAFRISH"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=zZ952eDEyvI",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post8}
              title="Ae Yo Shtork"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=EGjdm8q7-f8",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post7}
              title="Саруул шилтгээн - Everwell Condominium"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=IBTQPC4x8FQ",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post9}
              title="yt1s com Жаргалант хотхон 1080p"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=VUTVx04DkHY",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post6}
              title="jeff tailor"
              action={{
                type: "internal",
                route: "https://www.youtube.com/watch?v=3jbgMip04vc",
                color: "info",
                label: "Бичлэг үзэх",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
