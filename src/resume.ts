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

export interface NameItems {
  name: string;
  items: string[];
}
export type Expertise = NameItems;
export type Skill = NameItems;

export interface Job {
  company: string;
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
        items: ["Rust", "C#", "C", "C++", "Python"],
      },
      {
        name: "Frontend",
        items: ["VueJS", "Svelte", "Blazor"],
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
          name: "Developer",
          items: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            "Sed malesuada sollicitudin condimentum",
            "Proin a nulla sit amet neque pellentesque fermentum et sed nulla",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
            "Aenean porttitor eu tellus at ultricies",
            "Ut id rhoncus arcu",
            "Nam pretium maximus nunc vel rhoncus",
            "Suspendisse ut neque erat",
            "Duis et nunc ut eros euismod tristique",
            "Aliquam posuere leo non tempor tincidunt",
            "Sed elementum luctus volutpat",
            "Sed iaculis faucibus nisi, et dictum felis viverra in",
            "Morbi facilisis tincidunt massa quis varius",
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos",
            "Aliquam bibendum nulla at dolor condimentum, vitae vestibulum nisl consequat",
            "Aliquam non orci tempus quam placerat rutrum",
            "Morbi magna erat, varius ut arcu placerat, mollis pharetra lectus",
          ],
        },
        {
          name: "Developer",
          items: ["bullet 1", "bullet 2"],
        },
        {
          name: "Developer",
          items: ["bullet 1", "bullet 2"],
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
          company: "uBreakiFix",
          location: "Fredericksburg, VA",
          position: "Repair Technician",
          dates: "Jan 2020 - Present",
        },
        {
          company: "Orange County Public Schools",
          location: "Orange, VA",
          position: "Information Technology Intern",
          dates: "Sept 2018 - Sept 2019",
        },
      ],
    },
  },
};
