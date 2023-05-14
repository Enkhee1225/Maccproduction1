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
import TypographyRoboto from "layouts/sections/elements/typography/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/344962552_605449008186948_1278537663864105532_n.png?stp=dst-png_p403x403&_nc_cat=102&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeF_sHHKaHuwzWGKzegGi0ScRuM16HrgielG4zXoeuCJ6W4bt1_ZEn_O96D3kGLwq_6H660zBG3BAmsL8xsN4mfs&_nc_ohc=IV0bkTP5PyQAX8huQIH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR44pE7HCIRqAFpDHprr7u1vyLzrcmvYGaZjgYy86FghQ&oe=64856DC2";

  return (
    <BaseLayout
      title="Камер"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Typography" },
        { label: "Камер" },
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
