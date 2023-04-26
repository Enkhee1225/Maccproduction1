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
import TypographyRoboto from "layouts/sections/elements/2d animation/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/j1ot/c0fd56564705af88f29277610e59c55120230421065910/hl-25079463979?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2hwbG9MV0JRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--35c453cfdfd8f033ebcadeb64ce707a876adcff34a4fed176c27e004c0c77936%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmh3Ykc5TVYwSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTM1YzQ1M2NmZGZkOGYwMzNlYmNhZGViNjRjZTcwN2E4NzZhZGNmZjM0YTRmZWQxNzZjMjdlMDA0YzBjNzc5MzYiLCJleHAiOjE2ODIxMjUzMzcsImlhdCI6MTY4MjEyMTczNywia2lkIjoiV1V0eCJ9.V7EM7le2YCSs-LKO_Uh0Cgc67DDGXezHWmg08VG7s-U&s=38c0ca9ea5db465701d02f3ced9c634b4567067f&Expires=1682125337&Signature=O87MZcCZhca8voKMEGudd2o-1moNNbwEzpp9edams9oG0CDtS6kqE9vN2YcKfCGSq9LqcYC3pPZo8zN5mgD3fgPAeatYI9mXPJHDF9l7TDD5IzZk~Bi9Fe2vOhQwYsu0xLK~kcUMjlHT8cgWgs6saGf8CPDVv5mnl1p2hhRZsn6QMKlKI7AXD1BC62EZDzQGAuwDruHypEUhWzxW9lTEFvvRfbHhs5wd0BvXQkTl2xnXVy3dqnmCLVtdx-5KclRWi8-vuM-ts-Gtb-x7cP1cshm-Ec5fHgoCJQnpmKzNeapo81rbNh9q7Woieak0UpQu9b--9I3z7Uol5IgccNReyQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

  return (
    <BaseLayout
      title="2D Анимэйшн"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/2d animation" },
        { label: "2D Анимэйшн" },
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
