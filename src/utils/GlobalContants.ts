import av_1 from "../assets/about_1.png";
import av_2 from "../assets/about_2.png";
import av_3 from "../assets/about_3.png";
import lock from "../assets/lock.svg";
import chart from "../assets/chart.svg";
import cup from "../assets/cup.svg";
import chevron_left from "../assets/chevron_left.svg";
import chevron_right from "../assets/chevron_right.svg";
import microsoft_logo from "../assets/Microsoft.svg";
import cola_logo from "../assets/Cola.svg";
import twitter_logo from "../assets/Twitter.svg";
import reg_left_img from "../assets/reg_left_img.svg";

export const nameRegex = /^[a-zA-Z\s'-]+$/;
export const companyNameRegex = /^[a-zA-Z0-9\s&.-]+$/;
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const about_data = [
  {
    title: "Andrew Schultz",
    avatar: av_1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },

  {
    title: "Andrew Schultz",
    avatar: av_2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },

  {
    title: "Andrew Schultz",
    avatar: av_3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },

  {
    title: "Andrew Schultz",
    avatar: av_1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },

  {
    title: "Andrew Schultz",
    avatar: av_2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },

  {
    title: "Andrew Schultz",
    avatar: av_3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },

  {
    title: "Andrew Schultz",
    avatar: av_1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.",
  },
];

export const features_data = [
  {
    title: "24/7 Support",
    avatar: lock,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    title: "1000+ of reviews",
    avatar: chart,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },

  {
    title: "And more!",
    avatar: cup,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export const slider_images = {
  chevron_left,
  chevron_right,
  microsoft_logo,
  cola_logo,
  twitter_logo,
  reg_left_img,
};
