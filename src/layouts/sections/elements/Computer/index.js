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

// Sections components

import Container from "@mui/material/Container";

import BaseLayout from "layouts/sections/components/BaseLayout";

import MKBox from "components/MKBox";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/Computer/components/TypographyRoboto";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/345991252_6544867702214146_8262698714888185980_n.jpg?stp=dst-jpg_p403x403&_nc_cat=106&ccb=1-7&_nc_sid=aee45a&_nc_ohc=flm7XTj72X0AX-WiGpk&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRWd6Pbzk3ai52ROriJRng59Xj-MJ1ur040hVuT_8CG7g&oe=64831358";

  return (
    <BaseLayout
      title="Компьютер"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Computer" },
        { label: "Компьютер" },
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
