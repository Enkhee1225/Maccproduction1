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

// Sections components

import Container from "@mui/material/Container";

import BaseLayout from "layouts/sections/components/BaseLayout";

import MKBox from "components/MKBox";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/Computer/components/TypographyRoboto";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/j1ot/e6aaba0f5c76a3be8cf697372bb0435d20230414110741/hl-24797555376?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2dTa3JyRkJRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--2f17bfc83938382f13e0f81c9266c10c00f3fa167f3f09cbd85da4df7c9b8082%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmRUYTNKeVJrSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTJmMTdiZmM4MzkzODM4MmYxM2UwZjgxYzkyNjZjMTBjMDBmM2ZhMTY3ZjNmMDljYmQ4NWRhNGRmN2M5YjgwODIiLCJleHAiOjE2ODE4MzQ2ODIsImlhdCI6MTY4MTgzMTA4Miwia2lkIjoiV1V0eCJ9.qs-NAEGZCtEDvo1SCHJ-Dxi8gCCuFZGoxtLSSSwp_zY&s=aff062c6656a34601ea7f50bf8932bd35b3d7fd3&Expires=1681834682&Signature=bOcRsOhwxRjdnb2mH-AE7BezAYzS6bVNIkqx8shfI50Um7DI0hWhiyEuN2QjNFu~1lwaW4ODBmPAeL92kYBERvavn8uuixJobrEFaNXiP7h02gLh2IDI3W9KiQoPnH6fT3rDxrf5X2GMTvTcIPF8c-TF8WeZh-tmhOCAqi2-Hnbbl~96eOtLAyqmYfmB4kFbXtAQu2bCZehlZu16SOSnTz6O-04XzlNLmxhABzNk7YOIuAXpPJV9RlqAwPlGGSj1O0nTOh1KBnR9XhIkeTsrKZiMImPYEnjdKwwfcDQlmRYuIp7rpwyGYohSRPnCUSiY4a7hODCb16L7ejr8vVydQg__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

  return (
    <BaseLayout
      title="Компьютер"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/Computer" },
        { label: "Компьютер" },
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
