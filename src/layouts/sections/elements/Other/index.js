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
import BaseLayout from "layouts/sections/components/BaseLayout";
import Container from "@mui/material/Container";

// Typography page components
import TypographyRoboto from "layouts/sections/elements/Other/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/p1ot/bb9532f4cd387ffc4a4f32c782a9ac4a20230420080253/hl-25033710527?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2p3ZDhuVEJRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--5f2d5f0eb04fb7464e6814cc1555cf92243a383fa01d39913346be9899d34cbc%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMnAzWkRodVZFSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTVmMmQ1ZjBlYjA0ZmI3NDY0ZTY4MTRjYzE1NTVjZjkyMjQzYTM4M2ZhMDFkMzk5MTMzNDZiZTk4OTlkMzRjYmMiLCJleHAiOjE2ODE5ODE2MjksImlhdCI6MTY4MTk3ODAyOSwia2lkIjoiV1V0eCJ9.kDzLg2uPKjP9pXSFFFWZ5uNxGEbadWfpao1KBM616no&s=b3e1d12de3fb9ce4440a0035c7518b1f9d1f5bb0&Expires=1681981629&Signature=FoKbTCrnDAh-z6y9J1tVdLQs~H1rWXFRbkj-k7guKXYmQ97dXZ3heawM~nz3UvBb7henKxy54-768Nlrbpe4KR8djMVTdqgGXXNS-ozSJRaKM-rpRnkJeSG4BLHurWY9JKTMiTwQLrfQCxcslss0lduX9kSgJHYUvjtr3yIHVmOfdU8CjhrAz9afDeKRro6RJn7U1aAmNJviPlYvNYYyiLdUtwGKb-u5v1FW4hEFrEcCFOk0qqSnFXoB-kBnUp20rQwvVbp6twb9H89o-LIUP7bTmdXiKZlfE2C9pc89QGZtfGydJcH7dlUaus8mYXsoVQWxLz9CHZdmZV9jYmAbdA__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

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
