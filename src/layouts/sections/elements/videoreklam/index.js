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
import TypographyRoboto from "layouts/sections/elements/videoreklam/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://scontent.xx.fbcdn.net/v/t1.15752-9/344274552_789136115907262_8529525282099537961_n.jpg?stp=dst-jpg_p403x403&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFTvH0PNXvkxJ3I_SLYln8D6hHrVG2kiR7qEetUbaSJHiRWmvhEHq_XcInJ0aAYA9tp5yna2t-SayRhSN02sWl4&_nc_ohc=-8rRD_GueuAAX9VAtA5&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdR8vn7LmrJMtDlB20xB4PE9fiQ0_R4dtsHfQWe2uKtgww&oe=64857A5D";

  return (
    <BaseLayout
      title="Видео реклам"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/videoreklam" },
        { label: "Видео реклам" },
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
