/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-unresolved */
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
    "https://previews-te.wetransfer.net/file/wetransfer/p2ot/e6aaba0f5c76a3be8cf697372bb0435d20230414110741/hl-24797555385?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2dia3JyRkJRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--8e625d3c7ae0f8ce6c123b66bdf4d8da19a0c4b1b10f5b1a37a709f69d43ea91%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmRpYTNKeVJrSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLThlNjI1ZDNjN2FlMGY4Y2U2YzEyM2I2NmJkZjRkOGRhMTlhMGM0YjFiMTBmNWIxYTM3YTcwOWY2OWQ0M2VhOTEiLCJleHAiOjE2ODIwNzgyNTUsImlhdCI6MTY4MjA3NDY1NSwia2lkIjoiV1V0eCJ9.nGH-ruaoCtMJdCFc7LUBCfxq8WbQVw4jOlyke4eQ3Is&s=b519f19f89c00da39c6a9a385453ec2c99ac14c0&Expires=1682078255&Signature=WV4BQmk8X-mWlfWxW~J6KBHYURLFwSw20A4DU4VDyqzJXOT4NgkzsldwkB2MBKU15W9tarkrf2~42enOBzjDlB5otvaAuX-IsM10Yx01dmJBpT~vKiFo5sCAzHi1wRZbms~MVyD3MvBYanOKHCwN~Vb-J4UZwgcT~ykyelITj4gFgBj2LvJERQHZym7xAa1FZSdrRiq6AWPz~i1DD2UBYqGg7E5iURacdTgAQG-TK6ryoc-IWm8u35GgK686npNZcUpJdnkFldZPR22q6tiL6v4GM~VOo0KUwHz6KkwIug11kcmxBp4Ap92IEy1EKaQaqHATazQwTSjSClG9imAkcQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

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
