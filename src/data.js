import projectImg from '../src/assets/project.jpg';
import carGurus from '../src/assets/project/carGurus.webp';
import dantistImg from '../src/assets/project/dantistImg.jpg';
import trainLang from '../src/assets/project/trainLanguageImg.png';
import devQuize from '../src/assets/project/devQuize.jpg';
import tourClub from '../src/assets/project/tourClub.webp';
import newsNetwork from '../src/assets/project/newsNetwork.jpg';
import car1 from '../src/assets/project/car1.png';
import car2 from '../src/assets/project/car2.png';
import car3 from '../src/assets/project/car3.png';
import smile1 from '../src/assets/project/smile1.png';
import smile2 from '../src/assets/project/smile2.png';
import smile3 from '../src/assets/project/smile3.png';
import lang1 from '../src/assets/project/lang1.png';
import lang2 from '../src/assets/project/lang2.png';
import lang3 from '../src/assets/project/lang3.png';


import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'skills',
    href: 'skills',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  // {
  //   name: 'services',
  //   href: 'services',
  // },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
  },
];
export const ContactNavigation = [
  {
    name: 'contact',
    href: 'contact',
  },
];
// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React/node js',
  },
  {
    name: 'React',
  },
  {
    name: 'JS/API',
  },
  {
    name: 'UI/UX Design',
  },
];

export const projectsData = [
  {
    id: 1,
    image: car1,
    name: 'Car Gurus',
    des: 'Cargurus is a full-stack website, Selling Second-Hand cars is the main motto of this site. This site has a dashboard for the admin panel & there is a total of the role, Buyer, Seller, & Admin.',
    category: 'React/node js',
    repo_link:
      'https://github.com/imran-mridha/car-gurus-client',
    server_link: 'https://github.com/imran-mridha/car-gurus-server',
    live_link: 'https://car-gurus-bd.web.app/',
    detail_img: [
      car1,
      car2,
      car3,
    ],
    technology: [
      'React',
      'React Router Dom v6.4',
      'Node.JS',
      'Firebase',
      'Mongodb',
      'Authentication',
      'React-Query',
      'Axios',
      'Swiper JS',
      'React Hooks Form',
      'Express Js',
      'Date Fns',
      'JWT',
      'Tailwind',
      'Daisy UI',
      'lottie-react',
      'React loader Spinner',
      'React-countup',
      'Social Login',
      'React Toastify'
    ],
    tag: 'NEW',
  },
  {
    id: 2,
    image: smile1,
    name: 'Smile Builders',
    des: 'Smile builders is a full-stack website, focused on customer reviews, Providing dentist services. Here the user is able to give service feedback and can see others feedback, and also able to manage reviews.',
    category: 'React/node js',
    repo_link: 'https://github.com/imran-mridha/smile-builders-client',
    server_link: 'https://github.com/imran-mridha/smile-builders-server',
    live_link: 'https://smile-builders-24d63.web.app/',
    detail_img: [
      smile1,
      smile2,
      smile3,
    ],
    technology: [
      'React',
      'React-Router-Dom',
      'React Icon',
      'Swiperjs',
      'React loader Spinner',
      'Node.JS',
      'Date Fns',
      'Firebase',
      'Mongodb',
      'Authentication',
      'React-Query',
      'React Hooks Form',
      'Express Js',
      'JWT',
      'Tailwind',
      'Mambaui',
      'Hyperui',
      'Social Login',
      'React Toastify',
      'Sweetalert2',
      'lottie-react',
      'React-countup',
      'React-photo-view',
    ],
    tag: 'NEW',
  },
  {
    id: 3,
    image: lang1,
    name: 'Train Language',
    des: 'Train Language is an e-learning platform where users can learn languages, they can download language course details in pdf.',
    category: 'React/node js',
    repo_link: 'https://github.com/imran-mridha/train-language-client',
    server_link: 'https://github.com/imran-mridha/train-language-server',
    live_link: 'https://train-language.web.app/',
    detail_img: [
      lang1,
      lang2,
      lang3,
    ],
    technology: [
      'React',
      'Node.JS',
      'Firebase',
      'Mongodb',
      'Authentication',
      'Express Js',
      'React To Pdf',
      'lottie-react',
      'Tailwind',
      'React Toastify',
      'React Icon',
      'Swiper JS',
      'React countup',
      'Social Login',
    ],
    tag: '1 month ago',
  },
  // {
  //   id: 4,
  //   image: devQuize,
  //   name: 'Dev Quize Portal',
  //   des: 'Dev Quiz provides challenges for several different topics such as React, Javascript, CSS, Git and more. You can test your knowledge directly online.',
  //   category: 'React/node js',
  //   repo_link: 'https://github.com/imran-mridha/dev-quiz',
  //   server_link: 'https://github.com/DiptaPal/volunteer-network-server',
  //   live_link: 'https://dev-quiz-imran.netlify.app/',
  //   technology: [
  //     'React',
  //     'Node.JS',
  //     'Firebase',
  //     'Mongodb',
  //     'Authentication',
  //     'Express Js',
  //     'JWT',
  //     'Tailwind',
  //     'React Toastify',
  //     'React Icon',
  //     'Social Login',
  //   ],
  //   tag: '1 month ago',
  // },
  // {
  //   id: 5,
  //   image: tourClub,
  //   name: 'Tour Club BD',
  //   des: 'Tour Club BD is a Tour planning site, Where users can plan their tour and maintain tour time breaks etc. And after finishing, they can complete the tour activity.',
  //   category: 'React/node js',
  //   repo_link: 'https://github.com/imran-mridha/tour-club',
  //   server_link: 'https://github.com/DiptaPal/onine-tuition-server-side',
  //   live_link: 'https://tour-club-bd.netlify.app/',
  //   technology: [
  //     'React',
  //     'Node.JS',
  //     'Firebase',
  //     'Mongodb',
  //     'Authentication',
  //     'Express Js',
  //     'JWT',
  //     'Tailwind',
  //     'React Toastify',
  //     'React Icon',
  //     'Social Login',
  //   ],
  //   tag: '1 month ago',
  // },
  // {
  //   id: 6,
  //   image: newsNetwork,
  //   name: 'News Network',
  //   des: 'News Network is an online news portal application where users can read various types of news.',
  //   category: 'React/node.js',
  //   repo_link: 'https://news-network-imran.netlify.app/',
  //   server_link: 'https://github.com/DiptaPal/ema-john-pagination',
  //   live_link: 'https://news-network-imran.netlify.app/',
  //   technology: [
  //     'React',
  //     'Node.JS',
  //     'Firebase',
  //     'Mongodb',
  //     'Authentication',
  //     'Express Js',
  //     'JWT',
  //     'Tailwind',
  //     'React Toastify',
  //     'React Icon',
  //     'Social Login',
  //   ],
  //   tag: '2 month ago',
  // },
  // {
  //   id: 7,
  //   image: projectImg,
  //   name: 'Online Study',
  //   des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure ullam ex commodi voluptas excepturi inventore molestias sint dignissimos ratione?',
  //   category: 'React',
  //   repo_link: 'https://github.com/DiptaPal/genius-car-client',
  //   server_link: 'https://github.com/DiptaPal/genius-car-server',
  //   live_link: 'https://online-study-f1d0e.web.app/',
  //   technology: [
  //     'React',
  //     'Node.JS',
  //     'Firebase',
  //     'Authentication',
  //     'Express Js',
  //     'Tailwind',
  //     'React Toastify',
  //     'React Icon',
  //     'Social Login',
  //   ],
  //   tag: '1 month ago',
  // },
  // {
  //   id: 8,
  //   image: projectImg,
  //   name: 'Dragon News',
  //   des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure ullam ex commodi voluptas excepturi inventore molestias sint dignissimos ratione?',
  //   category: 'React',
  //   repo_link: 'https://github.com/DiptaPal/dragon-news-client',
  //   server_link: 'https://github.com/DiptaPal/dragon-news-server',
  //   live_link: 'https://dragon-news-24603.web.app/',
  //   technology: [
  //     'React',
  //     'Node.JS',
  //     'Firebase',
  //     'Authentication',
  //     'Express Js',
  //     'Bootstrap',
  //     'React Toastify',
  //     'React Icon',
  //     'Social Login',
  //   ],
  //   tag: '2 month ago',
  // },
  // {
  //   id: 9,
  //   image: projectImg,
  //   name: 'QuizPro',
  //   des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure ullam ex commodi voluptas excepturi inventore molestias sint dignissimos ratione?',
  //   category: 'React',
  //   repo_link: 'https://github.com/DiptaPal/quiz-pro',
  //   live_link: 'https://quiz-pro-online.netlify.app/',
  //   technology: ['React', 'Tialwind CSS', 'React Toastify', 'API', 'Rechart'],
  //   tag: '3 month ago',
  // },
  // {
  //   id: 10,
  //   image: projectImg,
  //   name: 'Authen Tech',
  //   des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iure ullam ex commodi voluptas excepturi inventore molestias sint dignissimos ratione?',
  //   category: 'React',
  //   repo_link: 'https://github.com/DiptaPal/authen-tech',
  //   live_link: 'https://authentech-9cd3a.web.app/',
  //   technology: [
  //     'React',
  //     'Firebase Authentication',
  //     'Tialwind CSS',
  //     'React Toastify',
  //     'API',
  //     'Rechart'
  //   ],
  //   tag: '2 month ago',
  // },
  // {
  //   id: 8,
  //   image: Project8,
  //   name: 'Panda Ecommerce',
  //   des: 'This is a Panda Ecommerce web application where user can manage his/her product which is more interesting as well as give',
  //   category: 'UI/UX design',
  //   repo_link: 'https://github.com/DiptaPal/panda-commerce',
  //   live_link: 'https://diptapal.github.io/panda-commerce/',
  //   technology: ['HTML', 'CSS', 'Bootstrap'],
  //   tag: '2 Years ago',
  // },
  // {
  //   id: 9,
  //   image: Project9,
  //   name: 'Hot Gadget',
  //   des: 'This is a Hot Gadget web application where user can manage his/her car product which is more interesting as well as give',
  //   category: 'UI/UX design',
  //   repo_link: 'https://github.com/NH-Rifat/Hot-gadget-using-bootstrap',
  //   live_link: 'https://hot-gadgeted.netlify.app',
  //   technology: ['HTML', 'CSS', 'Bootstrap'],
  //   tag: '2 Years ago',
  // },
];

export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at imran.mridha91@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Dhaka, Bangladesh',
    description: 'Front-end Developer',
  },
];

export const social = [
  {
    icon: <BsFacebook />,
    href: 'https://www.facebook.com/imran.mridha91/',
  },
  {
    icon: <FiInstagram />,
    href: 'https://www.instagram.com/imran.mridha91/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/imran-mridha',
  },
  {
    icon: <AiFillLinkedin />,
    href: 'https://www.linkedin.com/in/imranmridha91/',
  },
];