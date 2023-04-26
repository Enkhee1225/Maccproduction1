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
import TypographyRoboto from "layouts/sections/elements/mergejliinfoto/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/j1ot/c0fd56564705af88f29277610e59c55120230421065910/hl-25079463985?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2h2bG9MV0JRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--0d211f41e02b1e42e0d30da9f6ae5663795722047a95d3afea55425baaf51abb%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmgyYkc5TVYwSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTBkMjExZjQxZTAyYjFlNDJlMGQzMGRhOWY2YWU1NjYzNzk1NzIyMDQ3YTk1ZDNhZmVhNTU0MjViYWFmNTFhYmIiLCJleHAiOjE2ODIwNjQyMDcsImlhdCI6MTY4MjA2MDYwNywia2lkIjoiV1V0eCJ9.-j_PiE0QsP7OtVMcdyolaXtFWUkryPXXkFHdP75coAE&s=016bc7b07e2eff49d7b6c35f1bd3e598f8bfc13c&Expires=1682064207&Signature=bxtwqCR7sZIaSIT7yjF-GkP1kjPB-q8lHMIBlbuZ1rJsu-G1aMJadZCkmYS26WbUFIlIH-~TZnA-fBYqm2Xfe1~A0rrSttI-m8GHHZZeSDhw-HeLkEzTDWr3AqIHfUzIJLGmZEoh1H9yWTA3tb-i4fjUOTscOOsyRjCYZn1j1fobc0MKx4w77R7Dit15Cn8Q-Vfp7qYTYbDJLcFpC9A3MEfwpbuRQC3csZSwAmc2KDevL3XrTRtLaJq14Po~sURrFMbCQBBLMlbwAx0PSbFU~r2hYMgH-GqbJn-65652KA5kGyiM0Q3PyftpbOYKjxqKln61ajQ3JWBBddsGZtw7iA__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

  return (
    <BaseLayout
      title="Мэргэжлийн Фото"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/mergejliinfoto" },
        { label: "Мэргэжлийн Фото" },
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
