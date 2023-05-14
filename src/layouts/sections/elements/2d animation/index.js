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
import Container from "@mui/material/Container";
// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/2d animation/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/344226654_973276684093284_2710155669107064340_n.jpg?stp=dst-jpg_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeGng4pr91BwheNEgHrUWbyhHk3Kad7Q684eTcpp3tDrziSR-_YfjQJBO3FLYk6UYUFasEbwly7D92rwvTaLFDcv&_nc_ohc=ivJdY8P6wbsAX-r4_6K&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRpJ4ebYWNqeYpEOMOhS3uj8qeZTzQ6k-axGaGB7leLlg&oe=64855D0F";

  return (
    <BaseLayout
      title="2D Анимэйшн"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/2d animation" },
        { label: "2D Анимэйшн" },
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
