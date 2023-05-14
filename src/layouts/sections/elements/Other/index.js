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
import BaseLayout from "layouts/sections/components/BaseLayout";
import Container from "@mui/material/Container";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/Other/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/346090513_778596933629471_3036688165813661370_n.jpg?stp=dst-jpg_p403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_ohc=y-U7D1kqpIsAX-R9npD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQuJmB9GUQeNiBq89SNRZjSzNVekcrsGgQDU1Ze67SB9g&oe=64831EA9";

  return (
    <BaseLayout
      title="Бусад"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Бусад" },
        { label: "Бусад" },
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
