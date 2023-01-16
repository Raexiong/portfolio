import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
} from "react-icons/io5";
import img1 from "./images/thumb-fooddeliveryapp-reactjs-dec.png";
import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";
import img4 from "./images/thumb-pinterest-clone-reactjs.png";
import img5 from "./images/thumb-videoblog-firebase-reactjs-feb-22.png";
import img6 from "./images/thumb-whatsappui-clone-nextjs.png";

export const Experience = [
  {
    id: 1,
    date: "05/2022 - 12/2022",
    iconsSrc: <IoCodeWorking />,
    title: "Research Assistant",
    location: "Engineering Lab at the Roux Institute",
    description: (
      <>
        <p>
          • Built machine learning pipelines using scikit-learn models to
          evaluate surface roughness of additive manufactured 3D printing models
        </p>
        <p>
          • Developed engines to compare model accuracy and implemented
          pipelines to analyze feature importance in Laser Powder Bed Fusion
          process
        </p>
        <p>
          • Analyzed model data and boosted laser printed metal surface
          roughness by 15% by adjusting laser printing angles
        </p>
      </>
    ),
  },
  {
    id: 2,
    date: "05/2022 - 08/2022",
    iconsSrc: <IoCodeWorking />,
    title: "Web Developer Intern",
    location: "T.M. Herbal Studio",
    description: (
      <>
        <p>
          • Redesigned the web UI using React framework and implemented React
          hooks within components; Simplified state management with Redux
        </p>
        <p>
          • Coordinated with marketing team for responsive and interactive
          campaign layouts on web
        </p>
        <p>
          • Developed an internal dashboard showing monthly transactions and
          sales details using Material-UI
        </p>
      </>
    ),
  },
  {
    id: 3,
    date: "09/2019 - 12/2021",
    iconsSrc: <IoCodeWorking />,
    title: "Software Engineer / Operations Analyst",
    location: "West China Medical Center",
    description: (
      <>
        <p>
          • Managed a team to update the UI of the Hospital Information
          Systems(HIS) using React.js, promoted the data extraction process for
          Operations Department and reduced 90% manual work
        </p>
        <p>
          • Developed the internal Information System using Spring Boot; Built
          the internal payment management systems by integrating WeChat pay and
          Alipay
        </p>
        <p>
          • Held cross-department tech workshops on topics of HIS functions,
          Health Care Reform and UI design
        </p>

        <p>
          • Defined the key indicators and redesigned the data extraction and
          analysis schema with the Operations Team
        </p>
      </>
    ),
  },
  // {
  //   id: 4,
  //   date: "2011 - 2012",
  //   iconsSrc: <IoCodeWorking />,
  //   title: "Creative Director",
  //   location: "Doha, Qatar",
  //   description:
  //     "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  // },
  // {
  //   id: 5,
  //   date: "2010 - 2011",
  //   iconsSrc: <IoCodeWorking />,
  //   title: "Creative Director",
  //   location: "Doha, Qatar",
  //   description:
  //     "Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
  // },
];

export const Projects = [
  {
    id: 1,
    name: "Food Delivery UI Mockup",
    imageSrc: img1,
    techs: "React Js, Redux, Material UI",
    github: "#",
  },
  {
    id: 2,
    name: "Full Stack Social Media App ",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "#",
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: img3,
    techs: "React Js, Chakra UI, Google API",
    github: "#",
  },
  {
    id: 4,
    name: "Pintrest UI Clone 2.0 ",
    imageSrc: img4,
    techs: "React Js,  Material UI",
    github: "#",
  },
  {
    id: 5,
    name: "Own Video Blog",
    imageSrc: img5,
    techs: "React Js, Chara UI, Firebase",
    github: "#",
  },
  {
    id: 6,
    name: "Whatsapp UI Clone",
    imageSrc: img6,
    techs: "NextJs, Firebase Auth",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "#",
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "#",
  },
];
