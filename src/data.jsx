import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/flyzone.jpg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className="nav__icon" />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className="nav__icon" />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portofolio',
    icon: <FaFolderOpen className="nav__icon" />,
    path: '/portofolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Fikriansyah',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Ramdhani',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indonesian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Bandung, Indonesia',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+85224837416',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'fikriasnyah@mhs.itenas.ac.id',
  },

  {
    id: 10,
    title: 'Language : ',
    description: 'Indonesian',
  },
];

export const stats = [
  /* {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },
*/
  {
    id: 2,
    no: '1+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '1+',
    title: 'Happy <br /> Customers',
  },

  /*{
    id: 4,
    no: '53+',
    title: ' Awards <br /> Won',
  }, */
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'HMIF <span> Itenas </span>',
    desc: '',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'UBM <span> Itenas </span>',
    desc: '',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - 2024',
    title: 'HMIF <span> Itenas </span>',
    desc: '',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023 - PRESENT',
    title: 'ITENAS  <span> Bandung </span>',
    desc: '',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019-2022',
    title: 'SMK TUMAS BANGSA <span> Garut </span>',
    desc: '',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016-2019',
    title: 'SMPN SATAP 3  <span> Cikelet </span>',
    desc: '',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '25',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '35',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '50',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '46',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '48',
  },

  {
    id: 6,
    title: 'Java',
    percentage: '30',
  },

  {
    id: 7,
    title: 'Laravel',
    percentage: '45',
  },

  {
    id: 8,
    title: 'React',
    percentage: '35',
  },
];

export const portofolio = [
  {
    id: 1,
    img: Work1,
    title: 'FlyZone',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Pemesanan Tiket Pesawat',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: '-',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Laravel PHP, HTML, CSS, MySQL',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '-',
      },
    ],
  },
/*
  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },*/

/*  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  }, */

/*
  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  }, */

 /* {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },*/

  /*{
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },*/
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
