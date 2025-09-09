export interface ContentBlock {
  type: 'text' | 'image' | 'header';
  // For 'text' blocks, use content as the paragraph text
  // For 'image' blocks, content may be used as the caption (fallback)
  content: string;
  image?: string; // For 'image' blocks
  alt?: string;   // For 'image' blocks
  caption?: string; // Optional explicit caption for images
  level?: 1 | 2 | 3 | 4; // For headers
  transparentBackground?: boolean; // For images that should not have a background/shadow
  fullWidth?: boolean; // For images that should span the full width of the content area
}

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
  content?: ContentBlock[];
  // Legacy properties for backward compatibility
  challenges?: string[];
  solutions?: string[];
  outcomes?: string[];
  additionalImages?: string[];
}

import teambirthImg from '@/assets/master/midwife_workshop_pic.png';
import maternityImg from '@/assets/digiBirth/digiBirth_lesspink.jpg';
import laerdalImg from '@/assets/d8/Books_edited.png';
import circleKImg from '@/assets/circleK/Front image.png';
import studywellImg from '@/assets/project-studywell.jpg';
import krakaImg from '@/assets/kråka/Kråka_mPc.jpg';
import teamBirthHuddle from '@/assets/master/TeamBirth_2.png';
import masterProcess from '@/assets/master/process.png';
import masterGrid from '@/assets/master/smallerGRID.png';
import midwife_led_unit from '@/assets/master/midwife_led_unit.png';
 
export const projects: Project[] = [
  {
    id: 'teambirth-nepal',
    title: 'Adapting TeamBirth to Urban Nepal',
    description: 'Master project to explore if and how a western-made product can be adapted and implemented in healthcare facilities in urban Nepal to facilitate for respectful maternity care',
    longDescription: 'This master thesis project explored the complex challenge of adapting western healthcare solutions for different cultural contexts. Working with TeamBirth, a communication and empowerment tool for maternity care, I investigated how to make it culturally appropriate and effective in urban Nepali healthcare settings.',
    image: teambirthImg,
    category: 'Service Design',
    year: '2025',
    client: 'Ariadne Labs & Laerdal Global Health',
    duration: '6 months',
    role: 'UX Researcher & Service Designer',
    content: [
      {
        type: 'header',
        content: 'Project Description',
        level: 2
      },
      {
        type: 'text',
        content: 'This master´s thesis explores whether TeamBirth, an intervention designed to promote respectful care, effective communication, and shared decision-making during labor, can contribute to improved health outcomes and birth experiences for mothers in urban Nepal. Multiple studies report that many women giving birth at Nepali health facilities experience at least one form of disrespect or abuse during labor. Furthermore, the Government of Nepal has identified the lack of respectful and quality care as a key barrier to reducing maternal and neonatal mortality rates.'
      },
      {
        type: 'text',
        content: 'This thesis aims to identify both opportunities and barriers for the implementation of TeamBirth in Nepali health facilities and to propose adaptations that address these barriers. TeamBirth was originally developed by Ariadne Labs for hospitals in the United States. It is now being explored if their intervention can address the unmet needs for respectful care in low- to middle-income countries as well, beginning with Nepal.'
      },
      {
        type: 'image',
        content: '',
        image: teamBirthHuddle,
        alt: 'TeamBirth being used in a clincal setting',
        caption: 'TeamBirth being used in a clincal setting',
        transparentBackground: true
      },
   
      {
        type: 'header',
        content: 'Process',
        level: 2
      },
      {
        type: 'text',
        content: 'This project was carried out as a service design project with a strategic design approach, utilizing methods from participatory design and ethnographic research. The approaches were used to form a holistic understanding of the current maternal healthcare system in urban Nepal, with the end-users’ needs and experiences in focus.'
      },
      {
        type: 'text',
        content: 'By using methods such as semi-structured interviews, focus groups, workshops, user journey mapping, and SWOT-analysis, we identified pain points for the targeted users, together with opportunities and barriers for adapting and implementing the TeamBirth model of care into health facilities in urban Nepal. During our field-trip in Nepal, we also conducted a version of a design sprint, including the phases of primary research, ideation, prototyping and user testing.'
      },
      {
        type: 'image',
        content: '',
        image: masterProcess,
        alt: 'Overview of the process',
        transparentBackground: true
      },
      
      
      {
        type: 'header',
        content: 'Primary Research',
        level: 2
      },
      {
        type: 'text',
        content: 'Before and during our 4 week field trip to Nepal we conducted primary research including interviews, focus groups, workshops and observation studies.'
      },
      {
        type: 'text',
        content: 'Our goal was to gain a comprehensive understanding of the cultural context, the maternal healthcare system, and issues related to motherhood, before focusing on TeamBirth specifically the last two weeks of the field trip. This was because we believed it was essential for us to address, as objectively as possible, whether TeamBirth could meet the actual needs of the users and add value within the Nepalese maternity care system.'
      },
      {
        type: 'text',
        content: 'We spoke with a range of relevant users and stakeholders including psychiatrists, doctors, midwives, Nepali mothers, husbands and women´s rights activists.'
      },
      {
        type: 'image',
        content: '',
        image: masterGrid,
        alt: 'Pictures from primary research',
        caption: 'Pictures from hospital visits in Nepal',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Key Insights',
        level: 2
      },
      {
        type: 'header',
        content: 'Two Kinds of Birthing Facilities',
        level: 3
      },
      {
        type: 'text',
        content: 'One key insight was that there are big differences between how maternity care is provided in Nepal. The two most common types of birthing facilities in urban areas are midwife-led and doctor-led units at public and private hospitals, and they operate quite differently.'
      },
      {
        type: 'header',
        content: 'Midwife-led units',
        level: 4
      },
      {
        type:'text',
        content: 'Midwife-led units are led by <strong>midwives</strong>. When the woman giving birthis admitted to this unit, she stays in one room for the entire delivery.'
      },
      {
        type: 'image',
        content: '',
        image: midwife_led_unit,
        alt: 'Illustration of a midwife-led unit',
        transparentBackground: true,
      },

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
    additionalImages: [
      circleKImg,
      studywellImg,
      krakaImg
    ],
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