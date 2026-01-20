export interface ContentBlock {
  type: 'text' | 'image' | 'video' | 'header' | 'list';
  // For 'text' blocks, use content as the paragraph text
  // For 'image' blocks, content may be used as the caption (fallback)
  // For 'video' blocks, content may be used as the caption (fallback)
  // For 'list' blocks, use content as the list items (separated by newlines)
  content: string;
  image?: string; // For 'image' blocks
  video?: string; // For 'video' blocks
  alt?: string;   // For 'image' and 'video' blocks
  caption?: string; // Optional explicit caption for images and videos
  level?: 1 | 2 | 3 | 4; // For headers
  listType?: 'bullet' | 'numbered'; // For list blocks
  transparentBackground?: boolean; // For images and videos that should not have a background/shadow
  fullWidth?: boolean; // For images and videos that should span the full width of the content area
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
import db_bottleneck from '@/assets/digiBirth/bottleneck_morespacing.png';
import db_roadmap from '@/assets/digiBirth/roadmap.png';
import db_measures from '@/assets/digiBirth/measures2.png';
import db_blueprint from '@/assets/digiBirth/blueprint.png';
import d8_background from '@/assets/d8/Background_laerdal.png';
import d8_process from '@/assets/d8/process_overview.png';
import d8_swot from '@/assets/d8/swot_d8.png';
import d8_value_creation_loop from '@/assets/d8/value_creation loop.png';
import d8_content_book from '@/assets/d8/contents.png';
import ck_app from '@/assets/circleK/CK_frontscreen.png';
import ck_plan from '@/assets/circleK/CK_plan.png';
import ck_keyfindings from '@/assets/circleK/CK_keyFindings.png';
import ck_wireframes from '@/assets/circleK/Apps2.png';
import gui_sitemap from '@/assets/kråka/sitemap_kråka.png';
import gui_colors from '@/assets/kråka/color_palette.png';
import gui_light_logo from '@/assets/kråka/main_logo.png';
import gui_dark_logos from '@/assets/kråka/dark_logos.png';
import gui_logos from '@/assets/kråka/logos.png';
import gui_video from '@/assets/kråka/Compressed_kråka_record.mp4';
 
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
    collaborators: 'Ane Sofie Forseth',
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
        content: 'This thesis aims to identify both opportunities and barriers for the implementation of TeamBirth in Nepali health facilities and to propose adaptations that address these barriers. TeamBirth was originally developed by Ariadne Labs for hospitals in the United States. It is now being explored if their intervention can address the unmet needs for respectful care in low- to middle-income countries as well, beginning with Nepal. More information about TeamBirth can be found on <a href="https://www.ariadnelabs.org/delivery-decisions-initiative/teambirth/" target="_blank" rel="noopener noreferrer" class="text-portfolio-accent hover:text-portfolio-primary underline transition-colors duration-200">Ariadne Labs´ website</a>.'
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
        type: 'text',
        content: 'Some of the key findings from the primary research were barriers for implementing TeamBirth in Nepal. Some of the identified barriers were limited recognition of respectful care practices, a lack of autonomy and decision-making power among women, and strong hierarchical social structures.'
      },
      {
        type: 'header',
        content: 'Two Kinds of Birthing Facilities',
        level: 3
      },
      {
        type: 'text',
        content: 'Another key insight was that there are big differences between how maternity care is provided in Nepal. The two most common types of birthing facilities in urban areas are midwife-led and doctor-led units at public and private hospitals, and they operate quite differently.'
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
      {
        type: 'header',
        content: 'Doctor-led units',
        level: 4
      },
      {
        type:'text',
        content: 'Doctor-led units are led by <strong>doctors</strong>. When the woman is admitted to this unit, she changes rooms three times during childbirth.'
      },
      {
        type: 'image',
        content: '',
        image: doctor_led_unit,
        alt: 'Illustration of a doctor-led unit',
        transparentBackground: true,
      },

      {
        type: 'header',
        content: 'Target Users',
        level: 3
      },
      {
        type:'text',
        content: 'We gathered several perspectives during our field research. Four of these were considered the target users of TeamBirth in the context of Nepal. The target users are new mothers, her husband, the doctor and the midwife a government hospital. Each of these have distinct needs, challenges, and motivations that must be taken into consideration for TeamBirth to work as intended.'
      },
      {
        type: 'image',
        content: '',
        image: target_users,
        alt: 'Illustration of the defined target users',
       transparentBackground: true,
      },
      {
        type: 'header',
        content: 'Evaluating TeamBirth in Nepal',
        level: 2
      },
      {
        type:'text',
        content: 'To evaluate the feasibility and impact of implementing TeamBirth in Nepali health facilities we performed an analysis of the target users to understand their needs and challenges, a sustainability analysis to identify barriers for implementing TeamBirth in Nepal, and a strategic analysis to translate these barriers into actionable opportunities to guide the project’s final direction. The results of these analyses are roughly summarized in the strengths/opportunities and weaknesses/threats (SWOT) figure below.'
      },
      {
        type: 'image',
        content: '',
        image: swot,
        alt: 'Abbreviated SWOT analysis',
        transparentBackground: true,
      },
      {
        type: 'header',
        content: 'Our Evaluation',
        level: 4
      },
      {
        type:'text',
        content: 'There is a need for an intervention to facilitate respectful care in Nepal, and TeamBirth has a potential to meet this need. However, significant barriers may hinder the acceptance and feasibility of TeamBirth.'
      },
      {
        type: 'header',
        content: 'Result: Strategic Plan',
        level: 2
      },
      {
        type:'text',
        content: 'Our final delivery is a strategic plan with a short-, mid-, and long-term perspective that focuses on gradual change and iterative development to provide recommendations for the future work of Ariadne Labs. The plan aims to align with local constraints, future trends and Ariadne Labs´ vision for upcoming work. An overview over the strategic plan can be seen in the matrix below.'
      },
    
      {
        type: 'image',
        content: '',
        image: strategic_matrix,
        alt: 'Overview of the strategic plan in a matrix',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type:'text',
        content: 'We developed suggestions for specific design choices for all terms in the strategic plan, although these will not be presented in the portfolio. Please reach out if you are interested in the full report or more details. Our insights and the strategic plan have been presented to Ariadne Labs, and they will continue working on the project from our findings.'
      },
      {
        type: 'header',
        content: 'Reflections',
        level: 2
      },
      {
        type:'text',
        content: 'This project has probably been the most challenging, but also the most rewarding project I have worked on so far. We travelled to Nepal without any previous contact points in the country and encountered challenges we would not have faced working on a project in Norway. Throughout the project, we had to work around a language barrier, experienced how different social norms affect results and interactions, and had to be flexible and adapt quickly to unforeseen situations and opportunities that came our way. In Norway, we have an intuitive understanding of people and situations through understanding the language, social cues, and norms. In Nepal, a lot of this was foreign to us and we often felt unsure what was considered impolite to ask about or discuss.'
      },
      {
        type:'text',
        content: 'We also experienced uncertainties about whether people gave us honest answers. This was especially challenging when testing the original TeamBirth board. Since this is an already well-developed tool that we brought with us, we felt that many people wanted to be polite and positive towards it. It took some trial and error when doing user testing to find a good way to present it to get users´ honest opinions on it.'
      },
      {
        type:'text',
        content: 'Additionally, we got to test out the use of different design methods on users from a different culture and without much previous knowledge of design. This made us reflect around when to use different tools and gave us the opportunity to get creative and test out new methods.'
      },
      {
        type:'text',
        content: 'This project has given me the opportunity to grow as a designer and broadened my perspective. I have learnt about ethnographic research, gotten more confident as a service and strategic designer, and learnt from collaborating with talented people from two internationally recognized organizations. I am grateful for the opportunity to have worked with Ariadne Labs and Leardal Global Health on this project, and look forward to seeing the results of their work in Nepal.'
      },
      {
        type: 'image',
        content: '',
        image: teamBirth_drawing,
        alt: 'Overview of the strategic plan in a matrix',
        fullWidth: true
    
      },
  


    ]
  },
  {
    id: 'circle-k',
    title: 'Circle K Summer Project',
    description: 'An explorative UX project for Circle K on how they should move forward with their app development',
    longDescription: 'During my summer internship with Circle K, I led a comprehensive UX research project to determine the direction for their mobile app development. This involved user research, competitive analysis, and prototype development to guide future app initiatives.',
    image: circleKImg,
    additionalImages: [
      circleKImg,
      krakaImg
    ],
    category: 'UX Design',
    year: '2023',
    client: 'Circle K E-mobility',
    duration: '2 months',
    role: 'UX Designer & Researcher',
    content: [
      {
        type: 'header',
        content: 'Project Description',
        level: 2
      },
      {
        type: 'text',
        content: 'The summer of 2023, I had an internship within the eMobility team of Circle K Europe. The internship had a duration of 8 weeks and during these weeks I conducted an UX-project where I worked with exploring the possibilities of creating a holistic app-experience for the customers of Circle K.'
      },
      {
        type: 'text',
        content: 'Currently, Circle K Europe provides three mobile applications. One for private customers consuming fuel, carwash and convenience services (Circle K app), one for private customers driving electric vehicles to charge along the road (Circle K Charge) and one for company customers driving fossil fuel cars (Circle K Pro). The problem statement I worked with on the project was:'
      },
      {
        type: 'text',
        content: '<strong>Should Circle K Europe continue with the current multi-app strategy or work towards a consolidation of the different experiences?</strong>'
      },
      {
        type: 'text',
        content: 'The main part of the project was field research to understand the needs and interests of the different customers, but I also made a prototype of how a potential solution with a combined customer experience could look like.'
      },
      {
        type: 'header',
        content: 'Process',
        level: 2
      },
      {
        type: 'image',
        content: '',
        image: ck_plan,
        alt: 'Overview of the process',
        transparentBackground: true
      },
      {
        type: 'text',
        content: 'I started the projectby obtaining knowledge of the company and the purpose and functionality of the existing apps. Then I proceeded with getting to know the different customers of Circle K. My focus was to get an overview and understanding of all kind of drivers who use Circle K´s services, and find out which needs are similar and which are different across Circle K´s range of customer profiles. I sorted the most prominent insights from the interviews into six key findings.'
      },
      {
        type: 'header',
        content: 'Key Findings',
        level: 2
      },
      {
        type: 'header',
        content: 'Key Findings from User Interviews',
        level: 4
      },
      {
        type: 'image',
        content: '',
        image: ck_keyfindings,
        alt: 'Key findings from user interviews',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Other Important Findings',
        level: 4
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
        content: 'Result: Circle K - On the Go',
        level: 2
      },
      {
        type: 'text',
        content: 'Based on the findings from the research, I made a proposal of a prototype for a combined Circle K app. The app is a suggestion that includes both private and company customers, as well as customers who drive EV´s, fossile fuel cars or both. It will be an app that covers all of Circle K´s services on the road, making it intuitive for the user where to find the information they are looking for.'
      },
      {
        type: 'text',
        content: 'The research revealed that many Circle K customers had to download more than one of Circle K´s apps to get access to all the services that apply to them. With Circle K - On the Go, the user will get the ability to customize the app after their needs, as well as making it easy to switch between cars if they have more than one!'
      },
      {
        type: 'image',
        content: '',
        image: ck_app,
        alt: 'Image of the frontscreen of my suggestion for the Circle K app',
        transparentBackground: true
      },
      {
        type: 'header',
        content: 'Selected Wireframes from Circle K - On the Go',
        level: 4
      },
      {
        type: 'image',
        content: '',
        image: ck_wireframes,
        alt: 'Wireframes of Circle K - On the Go',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Reflections',
        level: 2
      },
      {
        type: 'text',
        content: 'During my summer internship with Circle K, I experienced significant growth as an independent designer and got better at initiating actions critical for the development of a project. This was my first time independently managing a project of this scale within such a large organization. Along the way, I had the opportunity to connect with many people who provided invaluable insights into navigating the complexities of a large company and balancing conflicting customer needs. I also participated in weekly design meetings with Circle K’s design team, where we shared updates, discussed challenges, and explored opportunities moving forward. These meetings provided me with valuable feedback on my project, as well as allowing me to participate in discussions with experienced designers across diverse design fields on their projects.'
      },
    ]  
  
  },
  {
    id: 'laerdal-medical',
    title: 'Strategic Direction for Laerdal Medical',
    description: 'A strategic design project in collaboration with Laerdal Medical Inc., to improve simulation-based education for medical students in the U.S.',
    longDescription: 'Working directly with Laerdal Medical, a leading provider of medical simulation equipment, we conducted strategic research to identify opportunities for improving medical education in the United States. This project combined market research, user interviews, and strategic design thinking to develop actionable recommendations.',
    image: laerdalImg,
    category: 'Strategic Design',
    year: '2024',
    client: 'Laerdal Medical Inc.',
    duration: '4 months',
    role: 'Strategic Designer & Researcher',
    collaborators: 'Ane Sofie Forseth, Michelle Lous & Kaja Grindheim Ronglan',
    content: [
      {
        type: 'header',
        content: 'Project Description',
        level: 2
      },
      {
        type:'text',
        content: 'This project presents the development of a strategic direction for Laerdal Medical Inc. Laerdal Medical is a global company developing physical and digital products for healthcare simulations, medical education and resuscitation training. Laerdal is currently exploring how simulation training can be connected to Entrustable Professional Activities (EPAs) in medical education. EPAs are activities that medical students are expected to perform without supervision before entering residency.'
      },
      {
        type:'text',
        content: 'One of Laerdal’s key customers is medical education institutions who uses simulation products in medical training and assessment of students. Our project was exploring how Laerdal can optimize their products and services for medical education in relation to EPA-based assessment of clinical preparedness of medical students through use of strategic design methods.'
      },
      {
        type: 'header',
        content: 'Background',
        level: 2
      },
      {
        type: 'image',
        content: '',
        image: d8_background,
        alt: 'Background information for the project',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Process',
        level: 2
      },
      {
        type:'text',
        content: 'Throughout the project, we followed a strategic design process to create a proposal that aligned with Laerdal Medical’s goals. Our process was iterative and analytical, keeping a close dialogue with Laerdal throughout the whole process.'
      },
      {
        type: 'image',
        content: '',
        image: d8_process,
        alt: 'Overview of the process',
        caption: 'Overview of the process',
        transparentBackground: true,
      },
      {
        type: 'header',
        content: 'From Project Brief to Strategic Direction',
        level: 4
      },
      {
        type:'text',
        content: 'After our first meeting with Laerdal, we divided the team into two focus areas. One group conducted an internal analysis of Laerdal, while the other performed an external analysis. I was one of the team members responsible for the external analysis.'
      },
      {
        type:'text',
        content: 'The purpose of the internal analysis was to understand Laerdal as a company, focusing on their products, resources, and capabilities. Through workshops, research, meetings, and the development of a service blueprint, we identified Laerdal’s strengths and weaknesses. Meanwhile, the external analysis focused on understanding how medical education works today, explore emerging trends in the field of medical education, and obtain an overview over partners and competitors. This helped uncover potential opportunities and threats.'
      },
      {
        type:'text',
        content: 'The findings from the analyses were compiled into a SWOT matrix that we used as a foundation to conduct a TOWS analysis, which is a tool used to transform the components from the SWOT-analysis into specific action points and strategic directions. The action points that emerged were later used to establish five search fields to narrow down the problem space. A concise version of the SWOT matrix is presented below.'
      },
      {
        type: 'image',
        content: '',
        image: d8_swot,
        alt: 'Abbreviated SWOT analysis',
        /*caption: 'Shortened SWOT diagram',*/
        transparentBackground: true,
        fullWidth: true
      },
      {
        type:'text',
        content: 'After several iterations, the search fields were refined into one through a bottleneck analysis. This search field laid the foundation for our strategic direction, which we believe would create value for Laerdal. Finally, by using a Value Proposition Canvas, we proposed how Laerdal could deliver value through short-, mid-, and long-term goals in a strategic plan.'
      },
      {
        type: 'header',
        content: 'Result: Strategic Direction',
        level: 2
      },
      {
        type:'text',
        content: 'Our final delivery to Leardal Medical was a report with findings from the research we did, together with the strategic proposal. This included a plan with short-term, mid-term and long-term goals that we believed would provide value for Laerdal to optimize their products for EPA-based assessment of medical students.'
      },
      {
        type:'text',
        content: 'We formed the problem statement:'
      },
      {
        type:'text',
        content: '<strong>How can Laerdal improve the learning outcomes of medical students through a feedback system that will give value both to the students and Laerdal?</strong>'
      },
      {
        type:'text',
        content: 'With the strategic proposal we wanted to achieve two goals:'
      },
      {
        type:'text',
        content: '1. Ensure student focus in product development to create better products that meets the needs of the users. 2. Provide Laerdal with valuable insights for product development and strengthen their role in the market.'
      },
      {
        type: 'image',
        content: '',
        image: d8_value_creation_loop,
        alt: 'Value creation loop',
        transparentBackground: true,
      },
      {
        type:'text',
        content: 'Due to confidentiality constraints, I will not show you our solution in detail, but content of the report delivered to Laerdal Medical is visualized below'
      },
      {
        type: 'image',
        content: '',
        image: d8_content_book,
        alt: 'Contents of report',
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Reflections',
        level: 2
      },
      {
        type:'text',
        content: 'Working on the strategic design project for Laerdal Medical was an enriching experience where I developed new skills in strategic design and learned about the industry of medical technology. As part of a four-member team, I focused on conducting external analysis, understanding the existing system, discovering emerging trends, and performing competitor research. This groundwork was important in shaping our strategic direction. During the conceptualization phase, I mapped connections and patterns, ensuring our solution addressed the correct problem.'
      },
      {
        type:'text',
        content: 'This project provided me with invaluable first-hand experience in entering a new and unfamiliar sector as a designer. Initially, we faced challenges with unfamiliar terminology and understanding the existing system. However, as we connected the dots in our research, I realized our value as design students in an established company and saw how we could contribute with new perspectives. This project has boosted my confidence in tackling complex projects and contributing with innovative ideas in new fields.'
      },
      
      
   
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
        content: 'The project was approached from a service design perspective, aiming to create a comprehensive overview of the current childbirth system—before, during, and after birth. This began with the perspective of postpartum women and later included the perspective of healthcare professionals. Using methods such as interviews, focus groups, personas, user journeys, and service blueprints, we identified pain points and areas for improvement in today’s postpartum care.'
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
      {
        type: 'header',
        content: 'Scoping',
        level: 2
      },
      {
        type:'text',
        content: 'After the discovery phase, we had substantial knowledge about the maternity care in Norway, the complexity of birth traumas, and the perspectives and needs of various stakeholders, as well as insight into the number of challenges and limitations the healthcare sector faces.'
      },
      {
        type:'text',
        content: 'To determine what we wanted to focus on, we started with the highlighted pain points and mapped out opportunities for potential solutions. The scoping process kan be visualized through a bottleneck analysis where we identified constraints to narrow down the problem. We also came to the realization that there is no established treatment system for birth-related trauma symptoms. Therefore, we chose to focus on how such a treatment system can be developed, and how DigiBirth can play a central role in this.'
      },
      {
        type: 'image',
        content: '',
        image: db_bottleneck,
        alt: 'Bottleneck analysis',
        transparentBackground: true,
      },
      {
        type: 'header',
        content: 'Solution: Follow-Up System',
        level: 2
      },
      {
        type:'text',
        content: 'The current plan for DigiBirth is to serve as an early intervention to help women understand and process their emotions and symptoms through exercises and validated information. We aim to expand the concept of DigiBirth to contribute to long-term change by establishing a comprehensive follow-up system.'
      },
      {
        type:'text',
        content: 'Our solution is a concept for how a future follow-up system could be structured. We envision DigiBirth functioning as a catalyst for the creation of this system and helping to raise awareness of the topic. We propose integrating new functionalities into DigiBirth, alongside a supporting system, to offer better and more adequate follow-up care. The solution is visualized below, with the figure (roadmap) illustrating the system along with specific measures for how it can be realized.'
      },
      {
        type: 'header',
        content: 'Roadmap',
        level: 3
      },
      {
        type: 'image',
        content: '',
        image: db_roadmap,
        alt: 'Roadmap of system',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Proposed Measures',
        level: 3
      },
      {
        type: 'image',
        content: '',
        image: db_measures,
        alt: 'Proposed measures',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Service Blueprint',
        level: 3
      },
      {
        type:'text',
        content: 'The service blueprint below illustrates how the treatment system allows for better communication between different healthcare services and the women in need of help. Additionally, it shows how and when the new proposed functionalities in DigiBirth becomes relevant. The blueprint is created in Norwegian as the blueprint is aimed at Norwegian stakeholders.'
      },
      {
        type: 'image',
        content: '',
        image: db_blueprint,
        alt: 'Service blueprint',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Reflections',
        level: 2
      },
      {
        type:'text',
        content: 'This project has been both rewarding and educational, offering valuable insights into a problem and user group that we initially knew far less about than anticipated. Through our work, we’ve developed a deeper respect for childbirth and motherhood, as well as a frustration over the lack of prioritization and open discussion about these topics in society.'
      },
      {
        type:'text',
        content: 'The research phase was particularly eye-opening, providing opportunities for insightful conversations with users, stakeholders, along with practical experience in interviewing and designing for a vulnerable user group. However, navigating the complexities of the healthcare system was challenging, as it involves balancing clinical, organizational, economic, political, and human considerations. This made me reflect on how designers can strive to create positive user experiences for patients within the constraints of such a system.'
      },
  
    ]
  },
  /*{
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
  },*/
  {
    id: 'kraka-pub',
    title: 'Website Design for Kråka Pub',
    description: 'UX/UI project through website design for Wettre Brewery',
    longDescription: 'This UX/UI project involved designing a complete website experience for Kråka Pub, part of Wettre Brewery. The project focused on creating an engaging digital presence that reflects the pub\'s unique character while providing excellent user experience for visitors seeking information about events, menu, and atmosphere.',
    image: krakaImg,
    category: 'UX Design',
    year: '2022',
    client: 'Wettre Brewery',
    duration: '4 months',
    role: 'UX/UI Designer',
    content: [
      {
        type: 'header',
        content: 'Project Description',
        level: 2
      },
      {
        type: 'text',
        content: 'This project presents a brand identity and website design for Kråka Pub. Kråka Pub is the pub of Wettre Bryggeri, which is a microbrewery located in Vettre, Asker (Norway). The brewery currently has a website for selling their beer, but it does not include the pub itself. The purpose of this website for Kråka Pub is to provide information about the pub, its events and make it more accessible to vistors. It is designed to be easy to navigate, reflect the atmosphere of the pub and make users easily find information about upcoming events.'
      },
      {
        type: 'text',
        content: 'The project resulted in a suggestion for a brand identity for Kråka Pub that suits the image of Wettre Brewery and prototype for a website created in Figma.'
      },
      {
        type: 'header',
        content: 'Brand Identity',
        level: 2
      },
      {
        type: 'header',
        content: 'Color Palette',
        level: 3
      },
      {
        type: 'image',
        content: '',
        image: gui_colors,
        alt: 'Main color palette',
        transparentBackground: true,
      },
      {
        type: 'header',
        content: 'Logo',
        level: 3
      },
      {
        type: 'text',
        content: 'The logo was created to suit the logo of Wettre Brewery, while still being unique and recognizable for Kråka Pub.'
      },
      {
        type: 'image',
        content: '',
        image: gui_logos,
        alt: 'Main color palette',
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Website Design',
        level: 2
      },
      {
        type: 'header',
        content: 'Sitemap',
        level: 3
      },
      
      {
        type: 'image',
        content: '',
        image: gui_sitemap,
        alt: 'Sitemap of the website architecture',
        transparentBackground: true,
        fullWidth: true
      },
      {
        type: 'text',
        content: 'The website consists of a main page and five category pages. On the main page, users can scroll down to get a quick overview of all the information available on the site. This provides visitors unfamiliar with Kråka a simple way to learn about what Kråka is and what it offers. The category pages provide detailed information about all of Kråka’s services.'
      },
      {
        type: 'text',
        content: 'The “What’s Happening” category page includes subpages that users can click through. On some pages, users can book a table or the entire venue. These pages provide feedback to confirm successful bookings through a booking confirmation. In the navigation bar, all categories have the same design except for “Book a Table,” which is styled as a button to make it highly accessible. This design ensures that users visiting the site solely to book a table can quickly complete their action without needing to navigate other information.'
      },
      {
        type: 'header',
        content: 'Figma Prototype',
        level: 3
      },
      {
        type: 'video',
        content: 'Screen recording of the Figma prototype',
        video: gui_video,
        alt: 'Screen recording of the Figma prototype',
        fullWidth: true
      },
      {
        type: 'header',
        content: 'Reflections',
        level: 2
      },
      {
        type: 'text',
        content: 'Through the process of designing a website from scratch for Wettre Brewery, I improved and advanced my skills in Figma and gained valuable insights into the importance of tone of voice and UX writing in engaging the target audience. I also learned the importance of providing user feedback to confirm successful actions, enhancing the overall user experience.'
      },
      {
        type: 'text',
        content: 'The project involved multiple iterations of trial and error to ensure that the layout and content were user-friendly, effectively communicated the desired message, and enabled both existing and potential customers of Kråka Pub to quickly find the information they needed. Additionally, I enhanced my proficiency in creating rapid prototypes for testing and conducting user testing to refine the design.'
      },
    ]
    
  }
];