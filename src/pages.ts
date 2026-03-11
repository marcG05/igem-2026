import Award from "./contents/Award";
import { Education } from "./contents/Engagement/Education";
import {
  Attributions,
  Home,
  HumanPractices,
  Members,
  Project,
  Math,
  DryLab,
  Wetlab,
  BusinessModelCanvas,
} from "./contents/index";
import { Safety } from "./contents/Lab/safety";
import { Contribution } from "./contents/Team/contributions";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  title: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  lead: string | undefined;
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    component: Home,
    lead: "Your iGEM Journey Begins Here! We wish you a successful and rewarding season!",
  },
  {
    name: "Project",
    folder: [
      {
        name: "Engineering",
        title: "Engineering",
        path: "/engineering",
        component: Project,
        lead: "Present the results of your project, along with a detailed analysis and discussion of their significance. Also outline future plans and reflections on the impact of your project.",
      },
      
      {
          name: "Model",
          title: "Model",
          path: "/model",
          component: Math,
          lead: "Present the results of your project, along with a detailed analysis and discussion of their significance. Also outline future plans and reflections on the impact of your project.",
      }
    ],
  },
  {
    name: "Labs",
    folder: [
      {
        name: "Drylab",
        title: "Drylab",
        path: "/drylab",
        component: DryLab,
        lead: "Present Labs",
      },
      {
        name: "Wetlab",
        title: "Wetlab",
        path: "/wetlab",
        component: Wetlab,
        lead: "Present Labs",
      },
      {
        name: "Safety",
        title: "Safety",
        path: "/safety-and-security",
        component: Safety,
        lead: "Present Labs",
      }
    ],
  },
  {
    name: "Team",
    folder: [
      {
        name: "Members",
        title: "Meet Our Team",
        path: "/team",
        component: Members,
        lead: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
      },
      {
        name: "Attributions",
        title: "Attributions",
        path: "/attributions",
        component: Attributions,
        lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
      },
      {
        name: "Contributions",
        title: "Contributions",
        path: "/contribution",
        component: Contribution,
        lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
      },
      {
        name: "Awards",
        title: "Awards",
        path: "/awards",
        component: Award,
        lead: "Accurate attribution is essential in the iGEM Competition. It ensures that the judges can properly assess your team's contributions and recognize the support provided by external collaborators. This page is dedicated to fulfilling the Attributions requirement for judging.",
      },
    ],
  },
  {
    name: "Engagement",
    folder: [
      {
        name: "Human Practices",
        title: "Human Practices",
        path: "/human-practices",
        component: HumanPractices,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
      },
      {
        name: "Entrepreneurship",
        title: "Entrepreneurship",
        path: "/entrepreneurship",
        component: BusinessModelCanvas,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
      },
      {
        name: "Education",
        title: "Education",
        path: "/education",
        component: Education,
        lead: "We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.",
      },
    ],
  },
];

export default Pages;
