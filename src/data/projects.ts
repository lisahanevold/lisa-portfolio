export interface ContentBlock {
  type: 'text' | 'image' | 'header' | 'list' | 'video';
  // For 'text' blocks, use content as the paragraph text
  // For 'image' blocks, content may be used as the caption (fallback)
  // For 'list' blocks, use content as the list items (separated by newlines)
  // For 'video' blocks, use content as the video URL or file path
  content: string;
  image?: string; // For 'image' blocks
  alt?: string;   // For 'image' blocks
  caption?: string; // Optional explicit caption for images/videos
  level?: 1 | 2 | 3 | 4; // For headers
  listType?: 'bullet' | 'numbered'; // For list blocks
  transparentBackground?: boolean; // For images that should not have a background/shadow
  fullWidth?: boolean; // For images/videos that should span the full width of the content area
  autoplay?: boolean; // For videos - whether to autoplay
  loop?: boolean; // For videos - whether to loop
  muted?: boolean; // For videos - whether to start muted
  controls?: boolean; // For videos - whether to show controls (default: true)
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
  collaborators?: string;
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
import midwife_led_unit from '@/assets/master/smallertxt_mid_led.png';
import doctor_led_unit from '@/assets/master/smallertxt_doc_led_unit.png';
import target_users from '@/assets/master/targetusers2.png';
import swot from '@/assets/master/SWOT2.png';
import strategic_matrix from '@/assets/master/Plan_matrix.png';
import teamBirth_drawing from '@/assets/master/bilde-kopi.png';
import db_process from '@/assets/digiBirth/process.png';
import db_painpoints from '@/assets/digiBirth/pain points.png';
import db_highlighted_painpoints from '@/assets/digiBirth/4painpoints.png';
import db_user_journey from '@/assets/digiBirth/userjourney.png';
import ck_keyFindings from '@/assets/circleK/CK_keyFindings.png';
import ck_plan from '@/assets/circleK/CK_plan.png';
import ck_app from '@/assets/circleK/CK_app.png';
import ck_frontscreen from '@/assets/circleK/CK_frontscreen.png';
import ck_apps from '@/assets/circleK/Apps2.png';
import d8_contents from '@/assets/d8/contents.png';
import d8_value_creation from '@/assets/d8/value_creation loop.png';
import d8_swot from '@/assets/d8/swot_d8.png';
import kraka_logos from '@/assets/kråka/logos.png';
import kraka_main_logo from '@/assets/kråka/main_logo.png';
import kraka_dark_logos from '@/assets/kråka/dark_logos.png';
import kraka_color_palette from '@/assets/kråka/color_palette.png';
import kraka_sitemap_kraka from '@/assets/kråka/sitemap_kråka.png';
import kraka_sitemap_gui from '@/assets/kråka/sitemap_gui.png';
 
export const projects: Project[] = [
  {
    id: 'teambirth',
    title: 'Adapting TeamBirth to Urban Nepal',
    description: 'A UX research project to adapt TeamBirth, a communication tool for labor and delivery, to the context of urban Nepal.',
    longDescription: 'This thesis aims to identify both opportunities and barriers for the implementation of TeamBirth in Nepali health facilities and to propose adaptations that address these barriers. TeamBirth was originally developed by Ariadne Labs for hospitals in the United States. It is now being explored if their intervention can address the unmet needs for respectful care in low- to middle-income countries as well, beginning with Nepal. More information about TeamBirth can be found on <a href="https://www.ariadnelabs.org/delivery-decisions-initiative/teambirth/" target="_blank" rel="noopener noreferrer" class="text-portfolio-accent hover:text-portfolio-primary underline transition-colors duration-200">Ariadne Labs website</a>.',
    image: teambirthImg,
    category: 'UX Research',
    year: '2024',
    duration: '6 months',
    role: 'UX Researcher & Service Designer',
    collaborators: 'Ane Sofie Forseth',
    content: [
      {
        type: 'header',
        content: 'Project Description',
        level: 2
      },
      {
        type: 'text',
        content: 'This thesis aims to identify both opportunities and barriers for the implementation of TeamBirth in Nepali health facilities and to propose adaptations that address these barriers. TeamBirth was originally developed by Ariadne Labs for hospitals in the United States. It is now being explored if their intervention can address the unmet needs for respectful care in low- to middle-income countries as well, beginning with Nepal. More information about TeamBirth can be found on <a href="https://www.ariadnelabs.org/delivery-decisions-initiative/teambirth/" target="_blank" rel="noopener noreferrer" class="text-portfolio-accent hover:text-portfolio-primary underline transition-colors duration-200">Ariadne Labs website</a>.'
      },
      {
        type: 'image',
        content: '',
        image: teamBirthHuddle,
        alt: 'TeamBirth being used in a clincal setting',
        caption: 'TeamBirth being used in a clincal setting. From Ariadne Labs. <a href="https://www.ariadnelabs.org/delivery-decisions-initiative/teambirth/" target="_blank" rel="noopener noreferrer" class="text-portfolio-accent hover:text-portfolio-primary underline transition-colors duration-200">https://www.ariadnelabs.org/delivery-decisions-initiative/teambirth/</a>.',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Background',
        level: 2
      },
      {
        type: 'header',
        content: 'The Problem',
        level: 4
      },
      {
        type: 'text',
        content: 'Norway is considered one of the safest countries in the world to give birth. Maternal mortality is nearly eliminated, and infant mortality are among the lowest globally. Nevertheless, recent studies show that approximately 4% of all mothers in Norway develop post-traumatic stress disorder (PTSD) as a result of their birth experience, with even more suffering from birth-related trauma symptoms.'
      },
      {
        type: 'text',
        content: 'Many face barriers to accessing the help they need,as birth-related trauma remains a stigmatized topic with limited awareness of its prevalence and treatment options. This lack of understanding extends to healthcare professionals, family members, and the women themselves. Additionally, the Norwegian healthcare system is heavily burdened by a lack of time and resources.'
      },
      {
        type: 'header',
        content: 'About TeamBirth',
        level: 4
      },
      {
        type: 'text',
        content: 'Ingvill Engvik Øvsthus, a psychologist and PhD candidate at NTNU, have started the project DigiBirth, a project developing a digital platform for treating women with birth-related trauma symptoms. DigiBirth aims to improve care through early intervention to prevent long-term health issues and development of PTSD. The app-based program will include elements from cognitive behavioral therapy, offering accessible care to all women in need of help. DigiBirth is planned to undergo clinical testing during fall 2025.'
      },
      {
        type: 'header',
        content: 'Process',
        level: 2
      },
      {
        type: 'text',
        content: 'The project was approached from a service design perspective, aiming to create a comprehensive overview of the current childbirth system—before, during, and after birth. This began with the perspective of postpartum women and later included the perspective of healthcare professionals. Using methods such as interviews, focus groups, personas, user journeys, and service blueprints, we identified pain points and areas for improvement in today\'s postpartum care.'
      },
      {
        type: 'text',
        content: 'We further explored the potential for integrating an app for treating birth-related trauma symptoms, focusing on how it could provide the greatest value to the women who will use it.'
      },
      {
        type: 'image',
        content: '',
        image: masterProcess,
        alt: 'Illustration of the process',
        /*caption: 'Illustration of process',*/
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Insights',
        level: 2
      },
      {
        type: 'header',
        content: 'Key Findings',
        level: 3
      },
      {
        type: 'text',
        content: 'After the discovery phase of the project, we had large amounts of information that we sorted first in affinity diagrams and later transformed the most recurring pain points into the diagram below. As the project was conducted in Norwegian, the diagram is written in Norwegian, but we selected five pain points that we considered the most essential for our solution that will be presented later.'
      },
      {
        type: 'image',
        content: '',
        image: masterGrid,
        alt: 'Key pain points from the insight phase',
        caption: 'Pain points from research spanned over three levels',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Highlighted Pain Points',
        level: 3
      },
      {
        type: 'image',
        content: '',
        image: swot,
        alt: 'Highlighted pain points',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'User Journeys',
        level: 3
      },
      {
        type: 'text',
        content: 'To visualize and foster empathy for the issue, we developed personas and user journeys. One of the user journeys we created is presented below. It illustrates the journey of two of the personas before, during and after birth. The purpose of this user journey is to illustrate how two seemingly similar birth experiences can be perceived very differently, depending on how the women are treated during labor and supported after birth.'
      },
      {
        type: 'image',
        content: '',
        image: teamBirth_drawing,
        alt: 'One created user journey',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Solution',
        level: 2
      },
      {
        type: 'header',
        content: 'Midwife-Led Unit',
        level: 3
      },
      {
        type: 'text',
        content: 'Based on our research, we proposed a midwife-led unit as a solution to address the identified pain points. This unit would provide a more personalized and supportive environment for women during labor and delivery.'
      },
      {
        type: 'image',
        content: '',
        image: midwife_led_unit,
        alt: 'Midwife-led unit concept',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Doctor-Led Unit',
        level: 3
      },
      {
        type: 'text',
        content: 'We also explored how the existing doctor-led units could be improved to better support women and reduce trauma experiences.'
      },
      {
        type: 'image',
        content: '',
        image: doctor_led_unit,
        alt: 'Doctor-led unit concept',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Target Users',
        level: 3
      },
      {
        type: 'text',
        content: 'Our solution targets both healthcare providers and women seeking care, with a focus on creating better communication and understanding between all parties involved in the birthing process.'
      },
      {
        type: 'image',
        content: '',
        image: target_users,
        alt: 'Target users for the solution',
        transparentBackground: true
      }
    ]  
  },
  {
    id: 'maternity-care',
    title: 'Improving Postpartum Care to Reduce Consequences of Birth Trauma',
    description: 'A service design project to ensure adequate follow-up after a traumatic birth experience',
    longDescription: 'This service design project focused on addressing the gaps in postpartum care following traumatic birth experiences. Through extensive research and stakeholder interviews, we developed a comprehensive service blueprint to improve support systems for new mothers.',
    image: maternityImg,
    category: 'Service Design',
    year: '2024',
    duration: '5 months',
    role: 'Service Designer & UX Researcher',
    collaborators: 'Ane Sofie Forseth',
    client: 'NTNU - DigiBirth',
    content: [
      {
        type: 'header',
        content: 'Project Description',
        level: 2
      },
      {
        type:'text',
        content: 'This project was carried out in collaboration with the ongoing research project DigiBirth, which aims to develop a digital treatment program for birth-related trauma symptoms. The main goal of DigiBirth is to increase knowledge about traumatic birth experiences and improve healthcare services for affected women. Currently, the available services and follow-up care are inadequate, and postpartum care faces numerous challenges.'
      },
      {
        type:'text',
        content: 'Our project, though independent from DigiBirth, shared the same objectives. It involved an extensive insight phase where we mapped pain points and areas for improvement in the Norwegian postpartum care. We explored how DigiBirth should be designed to meet the needs of the users, and proposed a solution for integrating DigiBirth into a comprehensive follow-up system to better support and identify women in need of help after childbirth.'
      },
      {
        type: 'header',
        content: 'Process',
        level: 2
      },
      {
        type:'text',
        content: 'The project was approached from a service design perspective, aiming to create a comprehensive overview of the current childbirth system—before, during, and after birth. This began with the perspective of postpartum women and later included the perspective of healthcare professionals. Using methods such as interviews, focus groups, personas, user journeys, and service blueprints, we identified pain points and areas for improvement in today\'s postpartum care.'
      },
      {
        type:'text',
        content: 'We further explored the potential for integrating an app for treating birth-related trauma symptoms, focusing on how it could provide the greatest value to the women who will use it.'
      },
      {
        type: 'image',
        content: '',
        image: db_process,
        alt: 'Illustration of the process',
        /*caption: 'Illustration of process',*/
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Background',
        level: 2
      },
      {
        type: 'header',
        content: 'The Problem',
        level: 4
      },
      {
        type:'text',
        content: 'Norway is considered one of the safest countries in the world to give birth. Maternal mortality is nearly eliminated, and infant mortality are among the lowest globally. Nevertheless, recent studies show that approximately 4% of all mothers in Norway develop post-traumatic stress disorder (PTSD) as a result of their birth experience, with even more suffering from birth-related trauma symptoms.'
      },
      {
        type:'text',
        content: 'Many face barriers to accessing the help they need,as birth-related trauma remains a stigmatized topic with limited awareness of its prevalence and treatment options. This lack of understanding extends to healthcare professionals, family members, and the women themselves. Additionally, the Norwegian healthcare system is heavily burdened by a lack of time and resources.'
      },
      {
        type: 'header',
        content: 'About TeamBirth',
        level: 4
      },
      {
        type:'text',
        content: 'Ingvill Engvik Øvsthus, a psychologist and PhD candidate at NTNU, have started the project DigiBirth, a project developing a digital platform for treating women with birth-related trauma symptoms. DigiBirth aims to improve care through early intervention to prevent long-term health issues and development of PTSD. The app-based program will include elements from cognitive behavioral therapy, offering accessible care to all women in need of help. DigiBirth is planned to undergo clinical testing during fall 2025.'
      },
      {
        type: 'header',
        content: 'Insights',
        level: 2
      },
      {
        type: 'header',
        content: 'Key Findings',
        level: 3
      },
      {
        type:'text',
        content: 'After the discovery phase of the project, we had large amounts of information that we sorted first in affinity diagrams and later transformed the most recurring pain points into the diagram below. As the project was conducted in Norwegian, the diagram is written in Norwegian, but we selected five pain points that we considered the most essential for our solution that will be presented later.'
      },
      {
        type: 'image',
        content: '',
        image: db_painpoints,
        alt: 'Key pain points from the insight phase',
        caption: 'Pain points from research spanned over three levels',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Highlighted Pain Points',
        level: 3
      },
      {
        type: 'image',
        content: '',
        image: db_highlighted_painpoints,
        alt: 'Highlighted pain points',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'User Journeys',
        level: 3
      },
      {
        type:'text',
        content: 'To visualize and foster empathy for the issue, we developed personas and user journeys. One of the user journeys we created is presented below. It illustrates the journey of two of the personas before, during and after birth. The purpose of this user journey is to illustrate how two seemingly similar birth experiences can be perceived very differently, depending on how the women are treated during labor and supported after birth.'
      },
      {
        type: 'image',
        content: '',
        image: db_user_journey,
        alt: 'One created user journey',
        transparentBackground: true,
        fullWidth: true
      },
   
    ]  
  },
  {
    id: 'laerdal',
    title: 'Strategic Design for Laerdal Medical',
    description: 'A strategic design project to develop a comprehensive design strategy for Laerdal Medical\'s educational products.',
    longDescription: 'This project involved developing a strategic design approach for Laerdal Medical\'s educational products, focusing on creating a cohesive user experience across their product portfolio.',
    image: laerdalImg,
    category: 'Strategic Design',
    year: '2023',
    duration: '4 months',
    role: 'Strategic Designer',
    content: [
      {
        type: 'header',
        content: 'Project Overview',
        level: 2
      },
      {
        type: 'text',
        content: 'This strategic design project focused on developing a comprehensive design strategy for Laerdal Medical\'s educational products. The goal was to create a cohesive user experience across their product portfolio while maintaining the company\'s mission of helping save lives through simulation-based learning.'
      },
      {
        type: 'header',
        content: 'Research & Analysis',
        level: 2
      },
      {
        type: 'text',
        content: 'We conducted extensive research into Laerdal\'s current product offerings, user needs, and market positioning. This included stakeholder interviews, user journey mapping, and competitive analysis to understand the current state and identify opportunities for improvement.'
      },
      {
        type: 'image',
        content: '',
        image: d8_contents,
        alt: 'Laerdal product contents overview',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Value Creation Loop',
        level: 2
      },
      {
        type: 'text',
        content: 'We developed a value creation loop that demonstrates how Laerdal\'s products create value for both educators and learners, emphasizing the continuous improvement cycle that drives better learning outcomes.'
      },
      {
        type: 'image',
        content: '',
        image: d8_value_creation,
        alt: 'Value creation loop for Laerdal products',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Strategic Analysis',
        level: 2
      },
      {
        type: 'text',
        content: 'Our strategic analysis included a comprehensive SWOT analysis to identify strengths, weaknesses, opportunities, and threats in the current market landscape.'
      },
      {
        type: 'image',
        content: '',
        image: d8_swot,
        alt: 'SWOT analysis for Laerdal Medical',
        transparentBackground: true
      }
    ]
  },
  {
    id: 'circlek',
    title: 'Circle K App Redesign',
    description: 'A UX design project to redesign the Circle K mobile app, focusing on improving user experience and consolidating multiple apps into one unified platform.',
    longDescription: 'This project involved redesigning the Circle K mobile app to create a more cohesive user experience by consolidating multiple existing apps into one unified platform. The focus was on improving usability and creating a more intuitive interface for customers on the road.',
    image: circleKImg,
    category: 'UX Design',
    year: '2023',
    duration: '3 months',
    role: 'UX Designer',
    content: [
      {
        type: 'header',
        content: 'Project Overview',
        level: 2
      },
      {
        type: 'text',
        content: 'Circle K operates multiple apps for different services, creating confusion and friction for customers. This project aimed to consolidate these apps into one unified platform while improving the overall user experience.'
      },
      {
        type: 'header',
        content: 'Key Findings',
        level: 2
      },
      {
        type: 'list',
        content: `Several features are overlapping in the existing apps of Circle K today.
Customers on the road have many of the same needs and interests, unrelated to what kind of car they are driving.
Many Circle K customers drives different cars and are both private and company customers.`,
        listType: 'numbered'
      },
      {
        type: 'header',
        content: 'Current App Landscape',
        level: 2
      },
      {
        type: 'text',
        content: 'We analyzed the current app ecosystem to understand the overlap and identify consolidation opportunities.'
      },
      {
        type: 'image',
        content: '',
        image: ck_apps,
        alt: 'Current Circle K apps overview',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Strategic Plan',
        level: 2
      },
      {
        type: 'text',
        content: 'Based on our research, we developed a strategic plan for consolidating the apps while maintaining all essential functionality.'
      },
      {
        type: 'image',
        content: '',
        image: ck_plan,
        alt: 'Strategic plan for app consolidation',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Key Findings Summary',
        level: 2
      },
      {
        type: 'text',
        content: 'Our research revealed several key insights that informed the redesign strategy.'
      },
      {
        type: 'image',
        content: '',
        image: ck_keyFindings,
        alt: 'Key findings from user research',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'App Design',
        level: 2
      },
      {
        type: 'text',
        content: 'We designed a unified app interface that consolidates all Circle K services into one intuitive platform.'
      },
      {
        type: 'image',
        content: '',
        image: ck_app,
        alt: 'Unified Circle K app design',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Front Screen Design',
        level: 2
      },
      {
        type: 'text',
        content: 'The front screen was designed to provide quick access to the most commonly used features while maintaining a clean, intuitive interface.'
      },
      {
        type: 'image',
        content: '',
        image: ck_frontscreen,
        alt: 'Circle K app front screen design',
        transparentBackground: true
      }
    ]
  },
  {
    id: 'studywell',
    title: 'StudyWell - Student Study Platform',
    description: 'A UX design project to create a comprehensive study platform for students, focusing on improving study habits and academic performance.',
    longDescription: 'StudyWell is a comprehensive study platform designed to help students improve their study habits and academic performance through personalized learning tools and progress tracking.',
    image: studywellImg,
    category: 'UX Design',
    year: '2023',
    duration: '2 months',
    role: 'UX Designer',
    content: [
      {
        type: 'header',
        content: 'Project Overview',
        level: 2
      },
      {
        type: 'text',
        content: 'StudyWell was designed to address the common challenges students face when studying, including lack of motivation, poor time management, and difficulty tracking progress. The platform provides personalized study tools and insights to help students achieve their academic goals.'
      }
    ]
  },
  {
    id: 'kraka',
    title: 'Kråka - Brand Identity & Website Design',
    description: 'A comprehensive brand identity and website design project for Kråka, a creative agency.',
    longDescription: 'This project involved creating a complete brand identity for Kråka, including logo design, color palette, typography, and website design. The focus was on creating a modern, professional brand that reflects the agency\'s creative capabilities.',
    image: krakaImg,
    category: 'Brand Design',
    year: '2023',
    duration: '2 months',
    role: 'Brand Designer & Web Designer',
    content: [
      {
        type: 'header',
        content: 'Project Overview',
        level: 2
      },
      {
        type: 'text',
        content: 'Kråka needed a complete brand identity and website to establish their presence in the creative industry. The project involved developing a cohesive visual identity that would work across all touchpoints.'
      },
      {
        type: 'header',
        content: 'Logo Design',
        level: 2
      },
      {
        type: 'text',
        content: 'We created multiple logo variations to ensure flexibility across different applications and contexts.'
      },
      {
        type: 'image',
        content: '',
        image: kraka_logos,
        alt: 'Kråka logo variations',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Main Logo',
        level: 2
      },
      {
        type: 'text',
        content: 'The main logo was designed to be versatile and memorable, representing the agency\'s creative and professional approach.'
      },
      {
        type: 'image',
        content: '',
        image: kraka_main_logo,
        alt: 'Kråka main logo',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Dark Logo Variations',
        level: 2
      },
      {
        type: 'text',
        content: 'Dark versions of the logo were created for use on light backgrounds and to provide additional design flexibility.'
      },
      {
        type: 'image',
        content: '',
        image: kraka_dark_logos,
        alt: 'Kråka dark logo variations',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Color Palette',
        level: 2
      },
      {
        type: 'text',
        content: 'A carefully selected color palette was developed to support the brand identity and ensure consistency across all applications.'
      },
      {
        type: 'image',
        content: '',
        image: kraka_color_palette,
        alt: 'Kråka color palette',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Website Sitemap',
        level: 2
      },
      {
        type: 'text',
        content: 'We developed a comprehensive sitemap for the Kråka website, ensuring logical navigation and clear information architecture.'
      },
      {
        type: 'image',
        content: '',
        image: kraka_sitemap_kraka,
        alt: 'Kråka website sitemap',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'GUI Sitemap',
        level: 2
      },
      {
        type: 'text',
        content: 'A detailed GUI sitemap was created to map out the user interface elements and their relationships.'
      },
      {
        type: 'image',
        content: '',
        image: kraka_sitemap_gui,
        alt: 'Kråka GUI sitemap',
        transparentBackground: true
      }
    ]
  }
];