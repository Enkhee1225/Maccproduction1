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
import TypographyRoboto from "layouts/sections/elements/contentuildverlel/components/Gerel";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/j1ot/c0fd56564705af88f29277610e59c55120230421065910/hl-25079463983?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2h0bG9MV0JRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--d7997b75446f9757f0f498a30802c1c29c6f22b224023dabd8f4fab90cb5a1e4%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmgwYkc5TVYwSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLWQ3OTk3Yjc1NDQ2Zjk3NTdmMGY0OThhMzA4MDJjMWMyOWM2ZjIyYjIyNDAyM2RhYmQ4ZjRmYWI5MGNiNWExZTQiLCJleHAiOjE2ODIwNjQyMDcsImlhdCI6MTY4MjA2MDYwNywia2lkIjoiV1V0eCJ9.sTAayGwStcpGf1XaPskSZreR-4wxXzsZ2wGmpLI4ydE&s=5b0ba9c3f3655af421c47a142bc6cef5cbf2d8cd&Expires=1682064207&Signature=TgcpsdZ5JFlxxEtRP0ZiSBRBgWBnzA4kd8hNY-okY2r9liltUL9nU0I~fbsBn2xr9gk2lbTyIEiIMBiETCjzQ5jlORyOxOpIWp6IG6EpuvoJ2RPoAT8JCs~iI4CeGHAW~JZwyOh4gFC2yf7X5PDltg1sNOBUIfmbhY4bo~c5kTdp3L8kpdh71oR-ooqo5tA9UcMLdyw9W6RZnVNlqUvCn324IHQ5SyLE96DP2ADX8Fkh6ELR1KSiq7~z9oBId5ilzBxhFB7kSc2A8jYp0BaHboFkxi8T6tSOG1QWXM0O5ybGY0GUQCdu2V7F9IT8UZC~AOEECQjDD3JGbk4ghEyb5Q__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

  return (
    <BaseLayout
      title="Контент үйлдвэрлэл"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/contentuildverlel" },
        { label: "Контент үйлдвэрлэл" },
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
