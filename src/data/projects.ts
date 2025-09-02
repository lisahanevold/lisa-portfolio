export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  category: string;
  year: string;
  client?: string;
  duration?: string;
  role: string;
  challenges?: string[];
  solutions?: string[];
  outcomes?: string[];
}

import teambirthImg from '@/assets/project-teambirth.jpg';
import maternityImg from '@/assets/project-maternity.jpg';
import laerdalImg from '@/assets/project-laerdal.jpg';
import circleKImg from '@/assets/project-circle-k.jpg';
import studywellImg from '@/assets/project-studywell.jpg';
import krakaImg from '@/assets/project-kraka.jpg';

export const projects: Project[] = [
  {
    id: 'teambirth-nepal',
    title: 'Adapting TeamBirth to Urban Nepal',
    description: 'Master project to explore if and how a western-made product can be adapted and implemented in healthcare facilities in urban Nepal to facilitate for respectful maternity care',
    longDescription: 'This master thesis project explored the complex challenge of adapting western healthcare solutions for different cultural contexts. Working with TeamBirth, a communication and empowerment tool for maternity care, I investigated how to make it culturally appropriate and effective in urban Nepali healthcare settings.',
    image: teambirthImg,
    category: 'Service Design',
    year: '2023',
    client: 'Master Thesis',
    duration: '6 months',
    role: 'UX Researcher & Service Designer',
    challenges: [
      'Cultural sensitivity in healthcare communication',
      'Language barriers and local customs',
      'Different healthcare infrastructure',
      'Varying literacy levels among users'
    ],
    solutions: [
      'Extensive ethnographic research in Nepal',
      'Co-design workshops with local healthcare workers',
      'Cultural adaptation framework development',
      'Localized communication strategies'
    ],
    outcomes: [
      'Successfully adapted product for Nepali context',
      'Developed cultural adaptation methodology',
      'Improved maternal care communication protocols',
      'Recommendations for scalable implementation'
    ]
  },
  {
    id: 'maternity-care',
    title: 'Changes in the Current Maternity Care',
    description: 'A service design project to ensure adequate follow-up after a traumatic birth experience',
    longDescription: 'This service design project focused on addressing the gaps in postpartum care following traumatic birth experiences. Through extensive research and stakeholder interviews, I developed a comprehensive service blueprint to improve support systems for new mothers.',
    image: maternityImg,
    category: 'Service Design',
    year: '2023',
    duration: '4 months',
    role: 'Service Designer & UX Researcher',
    challenges: [
      'Sensitive topic requiring empathetic approach',
      'Complex healthcare system navigation',
      'Multiple stakeholders with different needs',
      'Varying trauma responses and recovery timelines'
    ],
    solutions: [
      'Trauma-informed design methodology',
      'Multi-touchpoint service journey mapping',
      'Stakeholder alignment workshops',
      'Personalized care pathway development'
    ],
    outcomes: [
      'Comprehensive service blueprint delivered',
      'Improved follow-up care protocols',
      'Enhanced patient-provider communication',
      'Reduced gaps in postpartum support'
    ]
  },
  {
    id: 'laerdal-medical',
    title: 'Strategic Direction for Laerdal Medical',
    description: 'A strategic design project in collaboration with Laerdal Medical Inc., to improve simulation-based education for medical students in the U.S.',
    longDescription: 'Working directly with Laerdal Medical, a leading provider of medical simulation equipment, I conducted strategic research to identify opportunities for improving medical education in the United States. This project combined market research, user interviews, and strategic design thinking to develop actionable recommendations.',
    image: laerdalImg,
    category: 'Strategic Design',
    year: '2022',
    client: 'Laerdal Medical Inc.',
    duration: '5 months',
    role: 'Strategic Designer & Researcher',
    challenges: [
      'Complex medical education ecosystem',
      'Diverse user needs across institutions',
      'Regulatory requirements and standards',
      'Technology adoption in traditional settings'
    ],
    solutions: [
      'Comprehensive market and user research',
      'Strategic framework development',
      'Multi-stakeholder workshop facilitation',
      'Evidence-based recommendation synthesis'
    ],
    outcomes: [
      'Strategic roadmap for U.S. market expansion',
      'Improved product-market fit insights',
      'Enhanced educational simulation protocols',
      'Increased adoption potential identified'
    ]
  },
  {
    id: 'circle-k',
    title: 'Circle K Summer Project',
    description: 'An explorative UX project for Circle K on how they should move forward with their app development',
    longDescription: 'During my summer internship with Circle K, I led a comprehensive UX research project to determine the strategic direction for their mobile app development. This involved user research, competitive analysis, and prototype development to guide future app initiatives.',
    image: circleKImg,
    category: 'UX Design',
    year: '2022',
    client: 'Circle K',
    duration: '3 months',
    role: 'UX Designer & Researcher',
    challenges: [
      'Highly competitive retail app market',
      'Diverse customer demographics',
      'Integration with existing loyalty systems',
      'Balancing convenience with functionality'
    ],
    solutions: [
      'User journey mapping and persona development',
      'Competitive analysis and market positioning',
      'Rapid prototyping and user testing',
      'Strategic roadmap development'
    ],
    outcomes: [
      'Clear app development strategy defined',
      'User-centered design framework established',
      'Prototype validated with target users',
      'Recommendations for phased rollout'
    ]
  },
  {
    id: 'studywell',
    title: 'StudyWell',
    description: 'A service design project to shape NTNU\'s future campus, aiming to improve students\' well-being and sense of belonging',
    longDescription: 'StudyWell was an ambitious service design project aimed at reimagining the university experience at NTNU. Through extensive student research and co-design sessions, I developed solutions to enhance student well-being, foster community connections, and create a more supportive campus environment.',
    image: studywellImg,
    category: 'Service Design',
    year: '2022',
    client: 'NTNU',
    duration: '4 months',
    role: 'Service Designer & UX Researcher',
    challenges: [
      'Diverse student population with varying needs',
      'Complex university organizational structure',
      'Mental health stigma and barriers',
      'Limited existing support infrastructure'
    ],
    solutions: [
      'Student-centered co-design workshops',
      'Service ecosystem mapping',
      'Multi-touchpoint intervention design',
      'Stakeholder alignment and buy-in'
    ],
    outcomes: [
      'Comprehensive well-being service framework',
      'Improved student support pathways',
      'Enhanced campus community initiatives',
      'Implementation roadmap for university'
    ]
  },
  {
    id: 'kraka-pub',
    title: 'Kråka Pub',
    description: 'UX/UI project through website design for Wettre Brewery',
    longDescription: 'This UX/UI project involved designing a complete website experience for Kråka Pub, part of Wettre Brewery. The project focused on creating an engaging digital presence that reflects the pub\'s unique character while providing excellent user experience for visitors seeking information about events, menu, and atmosphere.',
    image: krakaImg,
    category: 'UX/UI Design',
    year: '2021',
    client: 'Wettre Brewery',
    duration: '2 months',
    role: 'UX/UI Designer',
    challenges: [
      'Capturing authentic pub atmosphere online',
      'Mobile-first design for on-the-go users',
      'Integration with booking and event systems',
      'Balancing visual appeal with functionality'
    ],
    solutions: [
      'Immersive visual design reflecting brand personality',
      'Responsive design for all device types',
      'Streamlined user flows for common tasks',
      'Integration with existing brewery systems'
    ],
    outcomes: [
      'Engaging website launched successfully',
      'Increased online engagement and reservations',
      'Improved brand consistency across touchpoints',
      'Enhanced customer experience and satisfaction'
    ]
  }
];