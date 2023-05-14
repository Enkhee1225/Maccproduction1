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
import TypographyRoboto from "layouts/sections/elements/design/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.fuln6-2.fna.fbcdn.net/v/t1.18169-9/21768166_1450745255001731_2461152271697491475_n.png?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=kxiMfZxcVjIAX81FyPr&_nc_ht=scontent.fuln6-2.fna&oh=00_AfAywE3DzIp3VEA6kaxu85UbeqUNtDPeW5EAxgtS0VtFfA&oe=6469C9D5";

  return (
    <BaseLayout
      title="Бүх үнэ"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/design" },
        { label: "Бүх үнэ" },
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
