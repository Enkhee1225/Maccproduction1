/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
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
import TypographyRoboto from "layouts/sections/elements/contentuildverlel/components/Gerel";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/344285899_181957831076391_4288365868398354101_n.jpg?stp=dst-jpg_p403x403&_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFFa_r7q0AN8Uq8E81k-2v1JCMXwvz5l30kIxfC_PmXfUH9gjTVBqHxgn3Le4-rainS9TjRohQtRFOOQUhxHpfk&_nc_ohc=z_gE-j0xgPsAX-d4b92&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTu_fZTputUOFTcvswRLZrB2Az8kW6q5yZ0dOTIjL5WFg&oe=648563A9";

  return (
    <BaseLayout
      title="Контент үйлдвэрлэл"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/contentuildverlel" },
        { label: "Контент үйлдвэрлэл" },
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
