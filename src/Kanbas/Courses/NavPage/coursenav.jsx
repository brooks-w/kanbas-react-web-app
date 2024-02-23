import { Link, useParams} from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { FaRecycle } from "react-icons/fa";
import { CiPlug1 } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa6";
import { courses } from "../../../Kanbas/Database";
import "./index.css";


function CourseNav() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);


  const links = [
      { label: "Home",   icon: <FaHouse className="fs-2" />  },
      { label: "Modules", icon: <FaRecycle className="fs-2" />  },
      { label: "Piazza",   icon: <CiPlug1 className="fs-2" /> },
      { label: "Grades",  icon: <FaBook className="fs-2" /> },
      { label: "Assignments",  icon: <FaRegNewspaper  className="fs-2" /> },
    ];
    return (
      <div>
        <Link to={`/Kanbas/Courses/${course?._id}/Home`}><button class="float-end x-button"><IoMdClose/></button></Link>
        <ul className="courseNav">
          {links.map((link, index) => (
          <li key={index}>
            <Link style={{color: "red", textDecoration: "none"}} to={`/Kanbas/Courses/${course?._id}/${link.label}`}> {link.icon} {link.label} </Link>
          </li>
        ))}
        </ul>
      </div>
    );
  }

export default CourseNav;


