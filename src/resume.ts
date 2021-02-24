export interface Link {
  text: string;
  href: string;
}

export interface Basics {
  name: string;
  email: string;
  phone: string;
  links: Link[];
}

export interface Project {
  name: string;
  tools: string[];
  description: string;
  url: string;
}

export interface Expertise {
  name: string;
  items: string[];
}
export interface Skill {
  name: string;
  items: Array<Link | string>;
}

export interface Job {
  company: {
    name: string;
    link: string;
  };
  location: string;
  position: string;
  dates: string;
}

export interface Section<T> {
  heading: string;
  data: T[];
}

export interface Resume {
  header: {
    basics: Basics;
    skills: Skill[];
  };
  body: {
    expertise: Section<Expertise>;
    projects: Section<Project>;
    work: Section<Job>;
  };
}

export const resumeData: Resume = {
  header: {
    basics: {
      name: "Charlie Thomson",
      email: "charliecthomson@gmail.com",
      phone: "(540) 229-2296",
      links: [
        { text: "charliecthomson.com", href: "http://charliecthomson.com" },
        {
          text: "github/charliethomson",
          href: "https://www.github.com/charliethomson",
        },
      ],
    },
    skills: [
      {
        name: "Systems",
        items: ["Rust", "C#", "C", "C++"],
      },
      {
        name: "Frontend",
        items: ["VueJS", "Svelte", "Blazor", "Bootstrap"],
      },
      {
        name: "Backend",
        items: ["actix-web", "rocket", "django", "ExpressJS", "ASP.NET"],
      },
      {
        name: "Database",
        items: ["MySQL", "MongoDB", "PostgreSQL", "MariaDB"],
      },
      {
        name: "Scripting",
        items: ["Python", "Shell", "Typescript", "Javascript", "Dart"],
      },
      {
        name: "Platforms",
        items: ["Windows", "MacOS", "Linux", "Web"],
      },
    ],
  },
  body: {
    expertise: {
      heading: "Expertise",
      data: [
        {
          name: "Systems",
          items: [
            "Utilize Object-oriented and Data-oriented design paradigms for greater performance and code legibility",
            "Create applications to aid the efficiency of employee operations",
            "Design tools to automate monotonous tasks",
            "Develop comprehensive unit tests to ensure proper functionality",
          ],
        },
        {
          name: "Backend",
          items: [
            "Design strongly typed RESTful CRUD APIs",
            "Implement efficient algorithms for data transfer and transform",
            "Provide a secure interface for SQL based databases",
          ],
        },
        {
          name: "Frontend",
          items: [
            "Build responsive, asynchronous web applications interfacing with public and private APIs",
          ],
        },
      ],
    },

    projects: {
      heading: "Projects",
      data: [
        {
          name: "Ticket Manager",
          tools: ["Rust", "actix-web", "diesel", "MariaDB", "Svelte"],
          description:
            "A full stack web application co-developed with my roommate. I contributed a RESTful CRUD API written in Rust using actix-web and a MariaDB database with the diesel ORM.",
          url: "https://www.github.com/charliethomson/ticket",
        },
        {
          name: "Language",
          tools: ["Dart"],
          description:
            "An educational programming language written in Dart with a hand rolled lexer, parser, and interpreter",
          url: "https://www.github.com/charliethomson/lang",
        },
        {
          name: "Pemdrs",
          tools: ["Rust"],
          description:
            "A calculator written in rust that respects order of operations. I created a lexer, implemented the shunting yard algorithm, and implemented a stack-based postfix notation evaluator",
          url: "https://www.github.com/charliethomson/pemdrs",
        },
      ],
    },
    work: {
      heading: "Work History",
      data: [
        {
          company: {
            name: "uBreakiFix",
            link: "https://www.ubreakifix.com",
          },
          location: "Fredericksburg, VA",
          position: "Repair Technician",
          dates: "Jan 2020 - Present",
        },
        {
          company: {
            name: "Orange County Public Schools",
            link: "https://www.ocss-va.org",
          },
          location: "Orange, VA",
          position: "Information Technology Intern",
          dates: "Sept 2018 - Sept 2019",
        },
      ],
    },
  },
};
