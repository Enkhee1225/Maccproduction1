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
import TypographyRoboto from "layouts/sections/elements/moshialhugjuulelt/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/p1ot/c0fd56564705af88f29277610e59c55120230421065910/hl-25079463986?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2h3bG9MV0JRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--0d3cddc1dba21197ad18f5d200efcb9b2de279c7463dbd62787687c19b981564%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmgzYkc5TVYwSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTBkM2NkZGMxZGJhMjExOTdhZDE4ZjVkMjAwZWZjYjliMmRlMjc5Yzc0NjNkYmQ2Mjc4NzY4N2MxOWI5ODE1NjQiLCJleHAiOjE2ODIwNjQyMDcsImlhdCI6MTY4MjA2MDYwNywia2lkIjoiV1V0eCJ9.FcjCKKYURHSFNNoJuZQI7rhTvZmDOQdSSV2b3waynSU&s=4acc69bfc09fd7845ac21bf20cee084be8157589&Expires=1682064207&Signature=ctAallTzMYdkHzSLPedpzdMdbadRulHNqB-n35VAhOjx8ZW85V7nEzd6vZB5kyJpK5vMxaer6Jl7gegY8yQkyNBv6zRSaFDApc4uj6i-pbH75R28yo79PsgxWQ--DMML3AfXblxk0hdWxhzsKM8TUKM9ypfLUKQDp~~9OZWPm9uU9-nQjI18FT5ScYZ9jrctZXcHYOj3PLp76C6RYLVuOHH2REKLIgmzdzG6CwwSW2nApQ22f2dy~V-TCvcYAfyfWCScStHwmFg8mxjnvoGtw5pSEkt3lRc9TGwlTue0AGu1ZbdHr3BjCQf8i27xacdizKllrnt6cfOI17QvJFl-og__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

  return (
    <BaseLayout
      title="Сошиал хөгжлүүлэлт"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/moshialhugjuulelt" },
        { label: "Сошиал хөгжлүүлэлт" },
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
