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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={10}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography
            variant="h2"
            color="Black"
            lg={10}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3x1"],
              },
            })}
          >
            Бидний тухай
          </MKTypography>
        </Grid>
        <MKTypography variant="body1" color="Black" opacity={0.8} mt={1} mb={3}>
        BDMT группын “Масс медиа” продакшн  2014 оноос дүрс бичлэг, гэрэл зураг, 3D анимэйшн, компьютер график, дизайн, вэб хөгжүүлэлт, маркетингийн зөвлөгөө чиглэлээр тасралтгүй үйл ажиллагаа явуулж байна. Бид технологийн үсрэнгүй хөгжил, орчин цагийн хэмнэлтэй хөл нийлүүлсэн, уран бүтээлийн шинэлэг санаа, оновчтой шийдэл, чанартай гүйцэтгэлгээр харилцагчдаа хүндэтгэсэн хариуцлагатай бүтээлч хамт олон билээ.
Эрүүл монгол хүн хөтөлбөрийн хүрээнд эрүүл мэндийн боловсрол олгох зорилгоор “Ай ёо доктор” шоу нэвтрүүлгийг 2014 оноос тасралтгүй бэлтгэн EDU, MNB, TV9, MALCHIN TV, SuldTV, TV7 сувгуудаар үзэгчдийн хүртээл болгож байна.
Мөн 2023 онд үндэсний хэмжээний “Сувилагч” реалити шоуг бэлтгэн NTV телевизээр олны хүртээл болгосон нь нийгэмд хэрэгцээтэй мэргэжлүүдийг сурталчлах, нийтэд таниулахад эерэгээр нөлөөлж телевизийн шоу нэвтрүүлгүүд дунд шинэ өнгө аяс оруулсан хүлээлт үүсгэсэн контент болж чадсан юм. 
Бид цаашид сонирхолтой, шинэлэг, үзэгчдэд хэрэгцээтэй мэдээллээр баялаг, үндэсний хэмжээний шоу нэвтрүүлгүүдийг хийхээр төлөвлөн ажиллаж байна.

        </MKTypography>
      </Container>
    </MKBox>
  );
}

export default Information;
