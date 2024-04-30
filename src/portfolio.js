/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rajeev L Raman",
  description:
    "A passionate individual who always thrives to work Hard and go the extra mile to achieve results.",
  og: {
    title: "Rajeev Raman Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Rajev L Raman",
  logo_name: "Rajeev L Raman",
  nickname: "Rajeev",
  subTitle:
    "hey,I am an individual who has a interest in building systems and fixing issues. spent most of the spare time fixing mobile devices and systems for friends.i like challenges and would go the extra mile to achieve results. I am interested in exploring the mitigation strategies for emerging threats.",
  resumeLink:
    "https://1drv.ms/b/s!AuLLb2oJkW3Xg6t9pMzsVw5ZvtWpGw?e=p6CuBO",
  portfolio_repository: "https://github.com/rajeevlraman/Homelab/tree/main",
  githubProfile: "https://github.com/rajeevlraman",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/rajeevlraman",
  // linkedin: "https://www.linkedin.com/in/rajeevlraman",
  // gmail: "rajeevlraman@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/rajeevlraman",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajeevlraman",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:rajeevlraman@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Cybersecurity analyst",
      fileName: "StagImg",
      skills: [
        "⚡ Experience in Monitoring and analysing security logs.",
        "⚡ Experience of working with Security Onion, Splunk Enterprise and Snort",
        "⚡ Knowledge of Cybersecurity Frameworks like NIST, OSINT, Australian Essential 8, and OWASp top 10",
        "⚡ Knowledge of creating Phishing campaigns and implementing network security measures.",
      ],
      softwareSkills: [
        {
          skillName: "replit",
          imageSrc: "devicon--replit.png",
        },
        {
          skillName: "Nist",
          imageSrc: "nist_logo.png",
        },
        {
          skillName: "Wireshark",
          imageSrc: "simple-icons--wireshark.png",
        },
        {
          skillName: "Splunk",
          imageSrc: "simple-icons--splunk.png",
        },
        {
          skillName: "Kali Linux",
          imageSrc: "simple-icons--kalilinux.png",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "IT Support",
      fileName: "AppDevelopImg",
      skills: [
        "⚡ Building Computer systems from scratch",
        "⚡ Troubleshoot and fix Hardware and software issues",
        "⚡ Configuring Cisco Switches, Routers and Firewall",
        "⚡ proficient in Windows Active directory services and M365 administration. ",
        "⚡ Familiar with IAM and MECM (microsoft Endpoint configuration and manager)",
      ],
      softwareSkills: [
        {
          skillName: "Call Support",
          imageSrc: "teenyicons--headset-outline.png",
        },
        {
          skillName: "tools",
          imageSrc: "bi--tools.png",
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Virtual box",
          imageSrc: "simple-icons--virtualbox.png",
        },
        {
          skillName: "Virus scanner",
          imageSrc: "fa-solid--shield-virus.png",
        },
        {
          skillName: "Iot",
          imageSrc: "eos-icons--iot.png",
        },
        {
          skillName: "printer",
          imageSrc: "twemoji--printer.png",
        },
        {
          skillName: "server",
          imageSrc: "fa--server.png",
        },
      ],
    },
    {
      title: "R & D Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Design and Development of Fuel Injection Pumps",
        "⚡ Performing Trials and optimizing fuel pumps for performance and Emission",
        "⚡ preparing trial reports and presentations",
        "⚡ Preparation of Pump for Engine trials. ",
      ],
      softwareSkills: [
        {
          skillName: "Pump",
          imageSrc: "vepump.png",
        },
        
        {
          skillName: "gears",
          imageSrc: "fa--gears.png",
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "graph",
          imageSrc: "codicon--graph-line.png",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },

        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Maintenance Technician",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience working on automated machines",
        "⚡ Experience in troubleshooting and fixing hydraulic, pneumatic and mechanical problems in machinery",
        "⚡ Experience in troubleshooting plc and motion control softwares",
        "⚡ interpreting mechanical, hydraulic, pneumatic, and electrical drawings",
        "⚡ Assisted in the Design and Drawing of the organization Canteen catering for over 3000 employees",
      ],
      softwareSkills: [
        {
          skillName: "Maintenace",
          imageSrc: "fa--gears.png",
        },
        {
          skillName: "tools",
          imageSrc: "bi--tools.png",
        },
        {
          skillName: "Autocad",
          imageSrc: "fa-solid--drafting-compass.png",
        },
        {
          skillName: "cnc",
          imageSrc: "cnc.png",
        },
        {
          skillName: "lathe",
          imageSrc: "lathe.png",
        },
        {
          skillName: "scada",
          imageSrc: "scada.png",
        },
          {
            skillName: "vice",
            imageSrc: "vice.png",
          },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Python",
      iconifyClassname: "devicon:python",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://www.w3schools.com/python/default.asp",
    },
    {
      siteName: "TryHackMe",
      iconifyClassname: "simple-icons:tryhackme",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://tryhackme.com/",
    },
    {
      siteName: "Replit",
      iconifyClassname: "devicon:replit",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://replit.com/",
    },
    {
      siteName: "Holmesglen",
      iconifyClassname: "simple-line-icons:graduation",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "CompTIA",
      iconifyClassname: "simple-icons:comptia",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.comptia.org/",
    },
    {
      siteName: "ISC2",
      iconifyClassname: "simple-icons:isc2",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.isc2.org/certifications/digital-badges",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Holmesglen -chadstone Australia",
      subtitle: "Certificate-IV in Cybersecurity - 2022-2024",
      logo_path: "holmes_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ Gained comprehensive technical skills and knowledge to.",
        "⚡ Understand the risks of cyber security attacks. Monitor the risks of cyber security attacks",
        "⚡ Assist in the preparation and implementation of appropriate mitigation solutions. Use a range of tools and procedures to identify and block cyber security threats",
        "⚡ Assist to protect an organization from insider security breaches. Asist in the development and implementation of risk mitigation in cloud services.",
        "⚡ Assist in the implementation of privacy and compliance in accordance with cyber laws. Understanding of NIST, OSINT and Australian essential 8 cyber security frameworks",
        "⚡ Collaboration with team and various stakeholders to conduct Pentesting, Phishing campaigns, and Network security design and implementation",
      ],
      website_link: "https://www.holmesglen.edu.au/explore-courses",
    },
    {
      title: "MEI Polytechnic",
      subtitle: "Diploma in mechanical Engineering - 1994-1997",
      logo_path: "mei_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "1994 - 1997",
      descriptions: [
        "⚡ learnt skills both theoretical and practical about design and process involved in manufacturing.",
        "⚡ complete metallurgy and engineering mathematics, with engineering drawing.",
        "⚡ practical experience in a working environment and live project design as part of final year",
      ],
      website_link: "https://www.meipolytechnic.com/en/index/",
    },
    {
      title: "Bosch",
      subtitle: "Vocational training - FITTER - 1990 - 1993",
      logo_path: "bosch_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "1990 - 1993",
      descriptions: [
        "⚡ 3 year vocational training in metal trade. basic bench skills using hand tools and power tools, creating components on tool room machines.",
        "⚡ Apart from this, learnt a lot about engineering mathematics, engineering drawing, Basic computers, Autocad, theory of manufacturing and hands on experience in a industry employing over 6000 people.",
        "⚡ During my time at the training centre we have oppurtunity to work as apprentice in various departments like Heat treatment, machine building, Drafting, logistics, pump and engine trials.",
        "⚡ I completed my training with a distinction and came first in the batch, state level and earned a Gold Medal for being the best in National level exam.",
        "⚡ I earned the responsibility of representing the training centre in a national Auto expo, where the whole world show off their innovations in the Automobile industry.",
      ],
      website_link: "https://www.bosch.in/our-company/bosch-in-india/#products-and-services",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CompTIA A+",
      subtitle: "- CompTIA",
      logo_path: "aplus_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f42d415b-c55d-46c9-8249-709d75876f51/public_url",
      alt_name: "CompTIA",
      color_code: "#8C151599",
    },
    {
      title: "ISC2 Certificate in Cybersecurity",
      subtitle: "- ISC2-CC",
      logo_path: "isc2_logo.png",
      certificate_link:
        "https://www.credly.com/badges/5fbf90c3-4630-4eea-aa57-e1ee7f0251aa/public_url",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Certificate-IV in Cybersecurity",
      subtitle: "- Holmesglen",
      logo_path: "holmes_logo.png",
      certificate_link:
        "https://www.myequals.net/sharelink/6e67a5a4-8b43-493e-b46b-c80de8cc3e4d/9d6812be-4b43-4b0f-aaf3-4265d1c4eec9",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "CCNA Network Fundamentals",
      subtitle: "- Cisco",
      logo_path: "CCNANT_logo.png",
      certificate_link:
        "https://www.credly.com/badges/87c02556-0d56-4055-ad83-6dc7bfdc2be5/public_url",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Cisco NEtwork Security",
      subtitle: "- Cisco",
      logo_path: "ccnans_logo.png",
      certificate_link:
        "https://www.credly.com/badges/de21364b-e817-444c-8e2f-b96eb6f00b57/public_url",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Amazon Cloud Foundations",
      subtitle: "- Kim Akers",
      logo_path: "aws_logo.png",
      certificate_link:
        "https://www.credly.com/badges/6a4775c4-5c0c-4254-98f6-dbaef9ddc985/public_url",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft 365: Administration",
      subtitle: "- Linkedin",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/6d13fba3166cb8cb7ff4a901f097683eae4e16ddb73e88130725dad8d5a9f1bf?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BflxjnNchSpa69uUNJex1Pg%3D%3D",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Identity and Access Management",
      subtitle: "- Linkedin",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/25676f59f855c6a180c309531ec7d3eb7c246c3aeb866f49abbfdd199e817858?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BflxjnNchSpa69uUNJex1Pg%3D%3D",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "The Cyber Security Threat Landsccape",
      subtitle: "- Laurence Moroney",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/b6d47df03e225383122a66366d07fd01d100a3b376497fa237f5353542f512c4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BflxjnNchSpa69uUNJex1Pg%3D%3D",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    
    {
      title: "Gold Medalist-National Level Fitter",
      subtitle: "- Bosch",
      logo_path: "bosch_logo.png",
      certificate_link:
        "",
      alt_name: "GCP",
      color_code: "#4285F499",

      /*
    },
    
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
      */
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience",
  description:
    "I have worked with Major Auutomobile component manufactures as a Maintenance Technician looking after Plant and Machnery. later joined the research and developemnt team performing trials on fuel injection pumps. Migrated to Australia on OCT 2003 and joined another Automobile component manufacturer as a maintenance tech. Joined a Optical Media manufacturing firm specialising in Blu-ray, DVD and CD's as a Technician. this is where my involvememnt in the It infrastructure took a major turn. supporting IT with changes in machine Industrial computer systems and Networking components. ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Technician",
          company: "TECHNICOLOR AUSTRALIA PTY LTD / now VANTIVA",
          company_url: "https://www.vantiva.com/who-we-are/",
          logo_path: "vantiva_logo.png",
          duration: "June 2009 - Jan 2024",
          location: "Braeside-Victoria Australia",
          description:
            "Troubleshooting and MAintenance of Plant and Machinery. IT support to Production line pcs. IT support to industrial computers and digital measuring systems and High speed Vision systems and scanners",
          color: "#000000",
        },
        {
          title: "Maintenance Technician",
          company: "MtM Australia Pty Ltd",
          company_url: "https://www.mtmauto.com/",
          logo_path: "mtm_logo.png",
          duration: "Mar 2005 - May 2009",
          location: "Oakleigh-Victoria Australia",
          description:
            "I worked as a Maintenance teech looking after Plant and Machinery, including High speed Moulding machines, robots, assembly lines, Press and tools. performed Inspectionand tagging of Electrical equipment for compliance. was a first aid officer.",
          color: "#0879bf",
        },
        {
          title: "R & D Engineer",
          company: "Bosch India",
          company_url: "",
          logo_path: "bosch_logo.png",
          duration: "May 1999 - Oct 2003",
          location: "Bangalore, India",
          description:
            "I have worked on Various Fuel Injection pumps for diesel engines, involving assembly, testing and optimizing the pump for performance and emmission. used a lot of Plotters, Oscilloscopes, and measuring instruments. prepared reports and assisted in engine trials.",
          color: "#9b1578",
        },
        {
          title: "Maintenance Technician",
          company: "Bosch India",
          company_url: "",
          logo_path: "bosch_logo.png",
          duration: "Jan 1994 - may 1999",
          location: "Bangalore, India",
          description:
            "Machine tool Assembly, jigs and fixture manufacturing, maintenance of machinery involving high speed CNC and toolroom machinery and special purpose machines. Maintenance of Overhead Cranes, Weighing machines, Presses, Furnaces, water treaatment Plant. digital conversion of all maintenance documents to custom maintenance software.",
          color: "#fc1f20",
        },
      ],
    },
  /*  {
      title: "Internships",
      work: false,
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },*/
 /*   {
      title: "Volunteerships",
      work: false,
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },*/
  ],
};

// Projects Page
const projectsHeader = {
  title: "Lab Activities",
  description:
    "My Lab Activity projects involves Virtual Platforms and Cloud Services to create and learn from various scenarios. I have tried out Virtual Box, VmWare, Proxmox and Hyper-V to create VMs and Networks. Experimenting with various topologies and Network setups was educational. monitoring Logs using Security Onion, Splunk, and Wireshark was interesting. creating firewall using PfSense and Opensense was a good learning experience. Created VPN using OpenVpn and Wireguard. I have used Azure and Aws free trials to create few lab activities, understanding Entra ID, M365 admiistration, IAM administration, Automating user adition and providing privilege using power Utomate and forms. used AWS to tryout web application hosting, load balancing and elasticity. there are screenshots which can be viewd below under each Lab.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
 /*   {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },*/
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_rajeev.png",
    description:
      "I am available on my Mobile and Email. You can message me, I will reply within 24 hours. I am in the process of changing my career.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://github.com/rajeevlraman/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Cranbourne North Victoria 3977, Australia",
    locality: "Cranbourne North",
    country: "AUSTRALIA",
    region: "Victoria",
    postalCode: "3977",
    streetAddress: "Prosperity Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/QiwV5WYMHXYwytgx7",
  },
  phoneSection: {
    title: "Mobile",
    subtitle: "0401205612",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
