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
import TypographyRoboto from "layouts/sections/elements/moshialhugjuulelt/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/344786824_1444963855908836_4968936130070877289_n.jpg?stp=dst-jpg_p403x403&_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHEgOSH-D_uFHxKpcEGNuG3KMSmY7PBnQsoxKZjs8GdC2b_R3JZVVwJg4yBE-LWcDAv-7xRDbgG0fRTm9JnsG-O&_nc_ohc=jYoHKTjXrFYAX_aQ7RO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTJHIZdhKwNO32r7e9kRgP9NtYLNU_wmg-limPp2IcAZQ&oe=6485549B";

  return (
    <BaseLayout
      title="Сошиал хөгжлүүлэлт"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/moshialhugjuulelt" },
        { label: "Сошиал хөгжлүүлэлт" },
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
