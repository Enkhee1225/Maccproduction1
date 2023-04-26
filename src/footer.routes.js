/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/macc.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "МАСС ПРОДАКШН",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/maccmedia20",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/@maccmedia1010",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us" },
        { name: "freebies" },
        { name: "premium tools" },
        { name: "blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations" },
        { name: "bits & snippets" },
        { name: "affiliate program" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us" },
        { name: "knowledge center" },
        { name: "custom development" },
        { name: "sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions" },
        { name: "privacy policy" },
        { name: "licenses (EULA)" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date}{" "}
      <MKTypography
        component="a"
        href="https://www.facebook.com/maccmedia20"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        МАСС ПРОДАКШН
      </MKTypography>
      .
    </MKTypography>
  ),
};
