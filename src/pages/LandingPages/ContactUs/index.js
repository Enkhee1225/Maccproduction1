/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/style-prop-object */

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
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            label: "Macc медиа",
            color: "info",
          }}
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={6.3}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2674.6547362519796!2d106.93427567541043!3d47.90436756736939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693a81023bca1%3A0x31c5d7c95f205a48!2z0J7Qu9C40LzQvyDQv9C70LDQt9Cw!5e0!3m2!1sen!2smn!4v1681865744338!5m2!1sen!2smn"
            width="550"
            height="520"
            style={{ border: "1" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 10 }}
          mr={{ xs: "auto", lg: 10 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={-2}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Холбогдох хаяг
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKBox py={4} pr={6} pl={{ xs: 6, sm: 10 }} my="auto">
                <MKTypography variant="h3" color="black" mb={1}>
                  
                </MKTypography>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="black">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="black"
                    opacity={0.8}
                    ml={2}
                    fontWeight="bold"
                  >
                    Ажлын утас: 77097575, 88111833
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="black" p={1}>
                  <MKTypography variant="button" color="black">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="black"
                    opacity={0.8}
                    ml={2}
                    fontWeight="bold"
                  >
                    Email: Mass.production0000@gmail.com
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="black" p={1}>
                  <MKTypography variant="button" color="black">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="black"
                    opacity={0.8}
                    ml={2}
                    fontWeight="bold"
                  >
                    Хаяг: БЗД-ийн 26-р хороо Хүннү гудамж, Олимп Плаза 302 тоот
                  </MKTypography>
                </MKBox>
                <MKBox mt={3}>
                  <MKButton variant="text" color="black" size="large" iconOnly>
                    <i
                      className="fab fa-facebook"
                      href="https://www.facebook.com/maccmedia20"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </MKButton>
                  <MKButton variant="text" color="black" size="large" iconOnly>
                    <i className="fab fa-twitter" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                  <MKButton variant="text" color="black" size="large" iconOnly>
                    <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                  </MKButton>
                </MKBox>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
