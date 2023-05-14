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
import TypographyRoboto from "layouts/sections/elements/mergejliinzuvulguu/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/j1ot/e6aaba0f5c76a3be8cf697372bb0435d20230414110741/hl-24797555368?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2dLa3JyRkJRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--da585804513ce84ea908880939a7bb939802ff14b6d04f1e07a37724562bb483%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmRMYTNKeVJrSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLWRhNTg1ODA0NTEzY2U4NGVhOTA4ODgwOTM5YTdiYjkzOTgwMmZmMTRiNmQwNGYxZTA3YTM3NzI0NTYyYmI0ODMiLCJleHAiOjE2ODE4MzQ2NjYsImlhdCI6MTY4MTgzMTA2Niwia2lkIjoiV1V0eCJ9.6bObdU9wgrS1pQsa3OWvAWuc1etXEk0XRrOOhtLGYfM&s=95a450112e3d64e6b1bec9b73751d383918c3095&Expires=1681834666&Signature=ipB2yaV3qc7l6GmHy6Mj164gJBTXqQOLIySU402sk7gttV9wVADBDFPf-zJ8CkprFUItOESO8Th8zWAFn9IxFyLhNleivDwjqkIZjQzT8SNXQo-KIe2kKJrSIYaY4W-nG8ni~2Q-UVPvSOWQ16m-ZTiHNbdTXbJAaD~9REyvD1VVKoI1mqxXpzlA-W6A~6skRkmAx99QfqxKPyI4tsPKQQRwE2o8P95T2iYt2aKq4nPykFiu-AoKsyP~gGwJdICZucF3qOL6VCSruO~tSu6ZOIskRtIwsZUg5ctZ9zcfxfRwBYFny-vvTfgXP3dFfK8y-4XQ3fRIKB8xXXWTsqtijQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

  return (
    <BaseLayout
      title="Маркетингийн зөвлөгөө"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/mergejliinzuvulguu" },
        { label: "Маркетингийн зөвлөгөө" },
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
