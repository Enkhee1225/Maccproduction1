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
import TypographyRoboto from "layouts/sections/elements/Gerel/components/Gerel";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/346018881_782767606618414_1841650429653515920_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=k8fQp35XtNMAX-Wks4o&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQNswSl2n_2J38yr0TmXqcMuuVTXTY1VEx5rZrWfUqM_w&oe=64833438";

  return (
    <BaseLayout
      title="Гэрэл"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Gerel" },
        { label: "Гэрэл" },
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
