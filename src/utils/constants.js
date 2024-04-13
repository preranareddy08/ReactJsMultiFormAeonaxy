import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa"; // Using Font Awesome as an example
import { FaUserFriends } from "react-icons/fa"; // Using Font Awesome as an example
import { FaSyncAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const EyesIcon = () => {
  return <FaEye />;
};

const TargetIcon = () => {
  return <FaBullseye />;
};

const RefreshIcon = () => {
  return <FaSyncAlt />;
};

const GlobeIcon = () => {
  return <FaGlobe />;
};

const StocksGraphIcon = () => {
  return <FaChartLine />;
};

const HumanIcon = () => {
  return <FaUser />;
};

const TeacherIcon = () => {
  return <FaChalkboardTeacher />;
};

const LifelongLearnerIcon = () => {
  return (
    <div>
      <FaSyncAlt />
    </div>
  );
};

const ParentIcon = () => {
  return <FaUserFriends />;
};
const StudentIcon = () => {
  return <FaGraduationCap />;
};

const ProfessionIcon = () => {
  return <FaBriefcase />;
};

export const logoList1 = [
  {
    category: "Student",
    content: "or soon to be enrolled",
    logo: <StudentIcon />,
    id: 1,
  },
  {
    category: "Professional",
    content: "pursuing a career",
    logo: <ProfessionIcon />,
    id: 2,
  },
  {
    category: "Parent",
    content: "of a school age child",
    logo: <ParentIcon />,
    id: 3,
  },
  {
    category: "Lifelong learner",
    logo: <LifelongLearnerIcon />,
    id: 4,
  },
  {
    category: "Teacher",
    logo: <TeacherIcon />,
    id: 5,
  },
  {
    category: "Other",
    logo: <HumanIcon />,
    id: 6,
  },
];

export const logoList2 = [
  {
    content: "Learning specific skills to advance my career",
    logo: <StocksGraphIcon />,
    id: 7,
  },
  {
    content: "Exploring new topics  I'm interested in",
    logo: <GlobeIcon />,
    id: 8,
  },
  {
    content: "Refreshing by math foundation",
    logo: <RefreshIcon />,
    id: 9,
  },
  {
    content: "Exercising my brain to stay strong",
    logo: <TargetIcon />,
    id: 10,
  },
  {
    content: "Something else",
    logo: <EyesIcon />,
    id: 11,
  },
];

export const img1_url =
  "https://i.postimg.cc/LsVhNtY4/Screenshot-2024-04-13-120941.png";

export const img2_url =
  "https://i.postimg.cc/HL4bmtby/Screenshot-2024-04-13-121016.png";

export const img3_url =
  "https://i.postimg.cc/d0HCSfJ5/Screenshot-2024-04-13-121032.png";
