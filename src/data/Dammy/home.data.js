import Img from "../../assets/images/im.jpg";
import avator from "../../assets/images/profile/index.svg";
import Img2 from "../../assets/images/profile/2.jpeg";
import Img3 from "../../assets/images/profile/3.jpeg";


export const ourTeam = [
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: avator,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img2,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img3,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img3,
  },
  {
    fullName: "Jonathan Onderi",
    position: "Developer",
    img_src: Img3,
  },
];

let date = new Date()
export const myEvent = {
  title: "Mastering the Language",
  sub_title: "Mastering the Language",
  date:date.toDateString(),
  time: date.toLocaleTimeString(),
  location: "Nakuru",
  description:
    "Lorem ipsum dolor sit amet🚀, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.😀",
  img: Img,
};

export const testimonials = [
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
    user: {
      firstName: "John",
      lastName:"mdoe",
      occupation: "Developer",
      profilePic: avator,
    },
  },
  {
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.",
    user: {
      fullName: "User two",
      occupation: "Developer",
      profilePic: Img2,
    },
  },
];
