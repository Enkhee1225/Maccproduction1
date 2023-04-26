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
import TypographyRoboto from "layouts/sections/elements/videoreklam/components/TypographyRoboto";
import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/j1ot/c0fd56564705af88f29277610e59c55120230421065910/hl-25079463987?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2h4bG9MV0JRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--91fc1f2858790adf5b9fcbf9e13e814dc186c68b8123994c44fa3c1a3c29c46f%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmg0Ykc5TVYwSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTkxZmMxZjI4NTg3OTBhZGY1YjlmY2JmOWUxM2U4MTRkYzE4NmM2OGI4MTIzOTk0YzQ0ZmEzYzFhM2MyOWM0NmYiLCJleHAiOjE2ODIwNjQyMDcsImlhdCI6MTY4MjA2MDYwNywia2lkIjoiV1V0eCJ9.sCXVX9syp788s3cxnnsSKH9FmVEv0ioQdop4WNTPask&s=9bc53e003fbf7db121a252d3889c029f856bb1b1&Expires=1682064207&Signature=FsbGamPpaKpsxhkoJz5sLnPc-2Lm8w7kljxzsvAtItmppN-WhaRzA1tpJ9eou~ycq4I0B7NctIPXWpQHu5wxvfWyMJN3PEyEvcuq8ZcbZPRU~ABFOezWjVVRaC1r0E9RhlGAZvzG0tbuSjKB9QWlOHy3-IccY~6s9IgG8eyWCcY6j0E4mwsEqY~X9OuDWCgnD6qzs7nOKWhmVWO1ZyH9a9ogDhIK7m4ekpuvDmL~x8B3P-ditqRmNOEZ65KKJxn~qttwe~8f4GX~k1LQKll6yKLB4-a~0pTk1Rr11q4OeEhgkDPZmpy91oAW7P4VZjPrfjJz8LXx7LaNWw6-~N~gQQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

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
