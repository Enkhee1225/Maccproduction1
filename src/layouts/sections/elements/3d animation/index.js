/* eslint-disable import/no-unresolved */
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
import Container from "@mui/material/Container";
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/3d animation/components/TypographyRoboto";

import MKBox from "components/MKBox";
// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/341137426_1251668985761045_8432579129278698725_n.png?stp=dst-png_p403x403&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=0bmfb9BA7l8AX9epWSO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT2CyOVOQKGVD7HgvvMEcW651RPTiY-bFtAK1gqa4dnqQ&oe=6468859C";

  return (
    <BaseLayout
      title="3D Анимэйшн"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/3d animation" },
        { label: "3D Анимэйшн" },
      ]}
    >
      <MKBox
        display="flex"
        alignItems="center"
        borderRadius="xl"
        my={2}
        py={6}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.8),
              rgba(gradients.dark.state, 0.8)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <TypographyRoboto />
        </Container>
      </MKBox>
    </BaseLayout>
  );
}

export default Typography;
