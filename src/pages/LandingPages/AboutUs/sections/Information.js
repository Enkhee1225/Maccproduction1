/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
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
          “Масс медиа” нь 2014 оноос эхлэн компьютер график, видео, гэрэл зураг, 3D анимэйшн,
          дизайн, вэб хөгжүүлэлт, маркетингийн зөвлөгөө чиглэлээр тасралтгүй үйл ажиллагаа явуулж
          байна. Бид үргэлж шинийг эрэлхийлж, судалж, суралцаж, мэргэшсээр ирсэн. Манайх орчин үеийн
          тоног төхөөрөмжөөр бүрэн тоноглогдож, үргэлж шинэчилж, технологийн хөгжилтэй хөл нийлүүлэн
          ажиллахаас гадна тоног төхөөрөмжийн түрээсийн үйлчилгээ үзүүлдгээрээ хэдийнээ салбартаа
          танигдсан. “Ай ёо доктор” эрүүл мэндийн нэвтрүүлэг нь 2014 оноос үзэгчдийн хүртээл болж
          эхэлсэн бөгөөд үзэгчдийн эрүүл мэндийн боловсролд зориулан хийгдсэн телевизийн хөтөлбөр
          билээ. Уг нэвтрүүлгийг илүү сонирхолтой шоу нэвтрүүлгийн төрөлд хувиргаж хөтлөгч, зочин,
          сонирхолтой туршилт, эрүүл мэндийн мэдлэг мэдээлэл, шинэ бүтээгдэхүүн технологийн
          танилцуулгаар баяжуулсан чөлөөт шоу хөтөлбөр хэлбэрээр олон нийтэд хүргэж байна. Одоо бид
          монгол улсын ерөнхийлөгчийн ивээл доор нэвтрүүлгээ явуулдаг бөгөөд EDU, MNB, TV9, MALCHIN
          TV, SuldTV, TV7 Сувгуудаар цацалтаа хийж байна.
        </MKTypography>
      </Container>
    </MKBox>
  );
}

export default Information;
