import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
  {
    name: "Facebook",
    icon: iconStyle(FaFacebook),
  },
  {
    name: "Instagram",
    icon: iconStyle(FaInstagram),
  },
  {
    name: "YouTube",
    icon: iconStyle(FaYoutube),
  },
  {
    name: "Twitter",
    icon: iconStyle(FaTwitter),
  },
  {
    name: "LinkedIn",
    icon: iconStyle(FaLinkedin),
  },
];

export const footerData = [
  {
    title: "Main",
    links: ["Blog", "FAQs", "Support", "About us"],
  },
  {
    title: "Product",
    links: ["Login", "Personal", "Business", "Partner"],
  },
  {
    title: "Services",
    links: [
      "Digital Printing",
      "Banners & Posters",
      "Labels & Invitations",
      "Events Branding",
    ],
  },
  {
    title: "Legal",
    links: [
      "Permissions",
      "Privacy Policy",
      "Terms & Conditions",
      "Disclaimer",
    ],
  },
];
