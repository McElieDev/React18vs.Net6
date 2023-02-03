import React from "react";

//import { BsFillShieldLockFill } from "react-icons/bs";
//import { IoIosOptions } from "react-icons/io";
//import { AiOutlineCloudUpload } from "react-icons/ai";
//import { BiDollar } from "react-icons/bi";
import { FcPrint } from "react-icons/fc";
import { FaDigitalTachograph } from "react-icons/fa";
import { MdFormatShapes } from "react-icons/md";
import {
  GiVerticalBanner,
  GiAztecCalendarSun,
  GiTargetPoster,
} from "react-icons/gi";
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
  {
    name: "Digital Printing",
    description:
      "We offer the best Flyers, brochures, Roller Banners, Calendars, Labels, small format printing which makes us stand out",
    icon: iconStyle(GiAztecCalendarSun),
    imgClass: "one",
  },
  {
    name: "Porters & Event branding",
    description:
      "One of our strength and standards on the market is Posters & Hanging and Event branding.",
    icon: iconStyle(GiTargetPoster),
    imgClass: "two",
  },
  {
    name: "Large format Printing",
    description:
      "We specialize on Pop Up & Roll Up Banners, Vehicle Branding, Binding & Finishing",
    icon: iconStyle(MdFormatShapes),
    imgClass: "three",
  },
  {
    name: "Label Printing",
    description:
      "We print paper & Vinyl stickers/labels, cut any shape/sie and more.",
    icon: iconStyle(FcPrint),
    imgClass: "four",
  },
  {
    name: "Invitation Printing",
    description:
      "We offer the highest qulity of invitations inclusing Foiling, Embossing and Digital Die Cutting",
    icon: iconStyle(FaDigitalTachograph),
    imgClass: "five",
  },
  {
    name: "Banners & Posters etc.",
    description:
      "Our printers are available for any type of printing services, therefore improving quality, delivery, quantity and speed ",
    icon: iconStyle(GiVerticalBanner),
    imgClass: "six",
  },
];
