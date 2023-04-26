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
import TypographyRoboto from "layouts/sections/elements/typography/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/p1ot/bb9532f4cd387ffc4a4f32c782a9ac4a20230420080253/hl-25033710526?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2p2ZDhuVEJRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--df70c01296a14dcb891feb6f6b3273940b48e583446a7a7479dc176cb644004d%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMnAyWkRodVZFSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLWRmNzBjMDEyOTZhMTRkY2I4OTFmZWI2ZjZiMzI3Mzk0MGI0OGU1ODM0NDZhN2E3NDc5ZGMxNzZjYjY0NDAwNGQiLCJleHAiOjE2ODE5ODg2MDQsImlhdCI6MTY4MTk4NTAwNCwia2lkIjoiV1V0eCJ9.a8oHEAiuwfHmVH0qdR3UZebPEoU3VHW5ZuEZ_4ABGyI&s=f4ab2558d67a8236d8c698ee15dec45d401ea39f&Expires=1681988604&Signature=GR3vPi3EF3oGsOZAUMutTRvVraKgEbGhKmeOGpDy3Ii83GwRtiDhx9qjNSjU~5bzFfXntp2VyZJdxg1DWl59nWCdiqefH13s~RvGfNHaEuvmatkve~EcuNy4-CdoDrM4G-~TyijLE-k64Wn15Xw~uncm3GAJJVWCUz~jf2QDxjAnVTtAtxxfd8eifWP7ZF5ws2woTnCZFRxRUY-XD1hqymGrN5nqg9GhHcaFHsEfivnKZ3s99c4a1uB77uilkeJd~idVNGiKVGATqHEmQQaMpoSLpbshjXzeaet9OvM60VUgRq-k03dPg5PukR4UA6TkosMZanRbvd1KdkppGNlXpw__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

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
