import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    nodejs,
    mongodb,
    git,
    tripguide,
    beckman,
    allegion,
    rollsroyce,
    carrington,
    csharp,
    python,
    oracle,
    awscloud,
    powerbi,
    unity,
    indyimaging,
    unitymario,
    pythonproject,
    ivytech,
    aws,
    siemensenergy // 12-18-2023
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "Data Analys",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Oracle",
      icon: oracle,
    },
    {
      name: "GitHub",
      icon: git,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "AWS",
      icon: awscloud,
    },
    {
      name: "PowerBi",
      icon: powerbi,
    },
  ];
  
  const experiences = [
    {
      title: "Accounts Receivables Manager",
      company_name: "Indy Imaging Inc",
      icon: indyimaging,
      iconBg: "#3B3B3B",
      date: "October 2017 - February 2020",
      points: [
        "Managed past due accounts with diplomacy, maintaining strong client relationships while promoting financial responsibility.",
        "Assisted in data analysis from credit bureaus for customers requesting higher credit or payment terms, contributing to informed decision-making.",
        "Demonstrated proficient use of QuickBooks to handle 90% of the workload, significantly increasing productivity and accuracy.",
        "Engaged in continuous learning and process improvement, demonstrating adaptability and a proactive attitude.",
      ],
    },
    {
      title: "Buyer",
      company_name: "Rolls-Royce North America",
      icon: rollsroyce,
      iconBg: "#E6DEDD",
      date: "March 2020 - April 2020",
      points: [
        "Operated with stakeholders across domestic and international regions.",
        "Resolved blocked or stalled invoices.",
        "Requested quotes from vendors and interacted with suppliers daily while negotiating contracts or blanket orders.",
        "Demonstrated experience in Global Vendor Master Management and SAP.",
      ],
    },
    {
      title: "Default Fees & Costs Coordinator",
      company_name: "Carrington Mortgage",
      icon: carrington,
      iconBg: "#3B3B3B",
      date: "Jun 2021 - March 2022",
      points: [
        "Requested and compiled fees and costs via Tempo com tag or email and summarize in Fiserv.",
        "Aided reinstatement letters by sending to the correct predetermined avenue..",
        "Ensured compliance deadlines were met.",
        "Communicated with various law firms to gather the required information needed for the outstanding fees/costs.",
      ],
    },
    {
      title: "Nonconformance Analyst",
      company_name: "Beckman Coulter Life Sciences",
      icon: beckman,
      iconBg: "#E6DEDD",
      date: "March 2022 - March 2023",
      points: [
        "Utilized Oracle ERP, Power BI, Teams, Miro Board, and other MRP software to manage procurement and material management modules effectively.",
        "Analyzed and reconciled invoice/PO discrepancies, collaborating with department representatives and suppliers to resolve product discrepancies timely and efficiently.",
        "Negotiated quotes from vendors and maintained daily supplier interactions, negotiating contracts or blanket orders under the guidance of the Commodity Manager.",
        "Cultivated vendor relationships in accordance with Beckman Coulter policies and practices within an FDA regulated environment, fostering characteristics of preferred suppliers.",
      ],
    },
    {
      title: "PtP Analyst",
      company_name: "Allegion",
      icon: allegion,
      iconBg: "#3B3B3B",
      date: "May 2023 - July 2023",
      points: [
        "Manage the PtP mailbox, process approved requisitions into Pos, and update requestors and the team on the PO status, maintaining transparency in procurement.",
        "Refine and modernize existing work process documentation, enhancing accessibility and understanding for new team members to expedite onboarding process and operational efficiency.",
        "Streamline the Oracle-based PO/Shopping Cart approval and release process, ensuring procurement efficiency.",
        "Partner with diverse teams to troubleshoot and rectify systemic issues impacting both internal and supplier relations.",
      ],
    },
      // 12-18-2023
    {
      title: "Procurement Professional",
      company_name: "Siemens Energy",
      icon: siemensenergy,
      iconBg: "#E6DEDD",
      date: "September 2023 - PRESENT",
      points: [
        "Implemented long-term commodity strategies using Oracle ERP and MRP software, ensuring cost-efficiency and compliance with procurement guidelines.",
        "Skilled in conducting negotiations and generating significant savings, leveraging tools like Power BI and Teams for transparent result documentation.",
        "Managed supplier processes (qualification, evaluation, development) and fostered strong internal customer relations for early project involvement.",
        "Cultivated vendor relationships within an FDA-regulated environment, aligning with strict regulatory standards and company policies.",
      ],
    }, // 12-18-2023
      
  ];
  
  const testimonials = [
    {
      testimonial:
        "Associate of Applied Science",
      name: "Ivy Tech Community College ",
      designation: "August 2021",
      company: "to present Graduation date 2024",
      image: ivytech,
      cardTitle: "College",
    },
    {
      testimonial:
        "AWS Cloud Quest: Cloud Practitioner",
      name: "AWS Training and Certification",
      designation: "July 2023",
      company: "",
      image: aws,
      cardTitle: "Certificate", 
    },
    {
      testimonial:
        "Software Application Developer",
        name: "Ivy Tech Community College ",
        designation: "May 2023",
        company: "",
        image: ivytech,
        cardTitle: "Certificate",
      },
  ];
  
  const projects = [
    {
      name: "Mario World 1-1",
      description:
        "A classic Super Mario Bros. remake project in Unity. This 2D platformer reimagines the original game, featuring iconic elements like Mario, Goombas, power-ups, and more. Dive into the code to explore game mechanics, UI design, and audio management. ",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: unitymario,
      source_code_link: "https://github.com/MissLadyPandas/MarioUnityGame",
    },
    {
      name: "Health Application",
      description:
        "Health Assistant is a Python application that includes a BMI calculator and a text editor. The BMI calculator allows users to enter their height and weight to calculate their BMI, classify it, and keep track of their average weight while taking notes.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "ui design",
          color: "green-text-gradient",
        },
        {
          name: "github",
          color: "pink-text-gradient",
        },
      ],
      image: pythonproject,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "Project in Progress",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
