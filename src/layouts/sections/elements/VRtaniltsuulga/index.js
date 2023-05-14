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
import TypographyRoboto from "layouts/sections/elements/VRtaniltsuulga/components/TypographyRoboto";

import MKBox from "components/MKBox";

// Typography page components code

function Typography() {
  const bgImage =
    "https://previews-te.wetransfer.net/file/wetransfer/j1ot/c0fd56564705af88f29277610e59c55120230421065910/hl-25079463988?width=512&height=512&source=storm&origin=transfer&url=https%3A%2F%2Fstorm-eu-west-1.wetransfer.net%2Ffiles%2FeyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHNLd2h5bG9MV0JRQT0iLCJleHAiOm51bGwsInB1ciI6ImludGVybmFsX2ZpbGVfZG93bmxvYWQifX0--57751b52338a7fe12ccbc9487abf1f887b9d68130b504184ca880b0a9ec7e262%3Ftoken%3DeyJhbGciOiJIUzI1NiJ9.eyJzdG9ybS5zZmUiOiJleUpmY21GcGJITWlPbnNpYldWemMyRm5aU0k2SWtKQmFITkxkMmg1Ykc5TVYwSlJRVDBpTENKbGVIQWlPbTUxYkd3c0luQjFjaUk2SW1sdWRHVnlibUZzWDJacGJHVmZaRzkzYm14dllXUWlmWDAtLTU3NzUxYjUyMzM4YTdmZTEyY2NiYzk0ODdhYmYxZjg4N2I5ZDY4MTMwYjUwNDE4NGNhODgwYjBhOWVjN2UyNjIiLCJleHAiOjE2ODIwNjQyMDcsImlhdCI6MTY4MjA2MDYwNywia2lkIjoiV1V0eCJ9.STWXTRJsBeKY9l5YjBTMvdJLQG4CcxK41P-sVcX845U&s=3cd8cdc869138f10f4779cb9844113cd96cb42fa&Expires=1682064207&Signature=ZFq4aJFZxYqpLHXsoEV7tDoR68zq70ypY4HRDPBYlNc9VJq7yX5EKSP9xb0mZ2WZ-4VcUikWvPMV87kLL4ZyoUQ6J32i5Vz7N~f9Q-dMJBVOA9tAYKtgCYP1RKGFNHK-4mgtlFcFKFVYr1SSxYi7NilK3HxrPFUQxv85UV89NUhrBiOBc74RacuHFwfVVKUUmmSQMdeJPeXHFRwq4ChuhyvorwgTRq2wjKz3viuztCZTzrS6o1~hSa-NoQN2FuFlntRfy5AVjvhQZCNxvjBPz92c8ZFNVs3el5-Y~mBKILP5BUwC74zk2EM~cqWCpxXQ~QbP1tzqQhrt9fdUf5bvgQ__&Key-Pair-Id=APKAIRLQFERKGUWFG7GQ";

  return (
    <BaseLayout
      title="VR танилцуулга"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/elements/VRtaniltsuulga" },
        { label: "VR танилцуулга" },
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
