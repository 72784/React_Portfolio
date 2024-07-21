import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `As a passionate software developer based in California, I’m currently working towards my Master’s in Computer Science at California State University Sacramento. Outside of coding, I love diving into new cuisines, traveling to new places, and immersing myself in the great outdoors. I approach every project with creativity and dedication, striving to build cutting-edge web and mobile applications. Let’s team up and bring our innovative ideas to life!`
export const ABOUT_TEXT = `I am a dedicated software developer pursuing a Master's degree in Computer Science at California State University Sacramento. My academic background includes a Bachelor's degree in Information & Communication Technology, which has provided me with a solid foundation in various programming languages such as Python, Java, C#, JavaScript, TypeScript, HTML/CSS, SQL, SML, and PHP. My professional experience includes hands-on work with frameworks and libraries like TensorFlow, Angular, and OpenCV, enhancing my ability to tackle diverse and complex projects.`
export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Developer Intern",
    company: "Yardi Systems",
    description:`
    Developed dynamic dashboards with Angular and TypeScript, integrated with SQL Server for data management, implemented backend services using C# and .NET, and designed RESTful APIs with .NET Core to support front-end functionalities.`,


     technologies: [".NET", "Angular", "SQL Server", "C#", "Java"],
  },
  {
    year: "January - May 2024",
    role: "Web Developer Student Assistant",
    company: "CSU Sacramento",
    description: `
    Developed and maintained responsive web applications for the Technology Department, enhancing various online platforms. Implemented client-side validation and form handling with JavaScript, ensuring data integrity and improving user experience. Utilized Git for version control and collaborated with team members through code reviews and merge requests.`,
     technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    year: "January 2023 - May 2023",
    role: "Web Developer Intern",
    company: "Tops Technologies",
    description: `
    Contributed to the development of an online household services ordering platform using Java, Spring MVC, and MySQL. Designed and implemented customer, service provider, and admin portals. Added features like user registration, service ordering, payment integration (Razorpay API), and bug fixing.`,
    technologies: ["JAVA", "MySQL", "RazorPay", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "+1 (916)-713-9709",
  email: "parthshiroya2001@gmail.com",
};
