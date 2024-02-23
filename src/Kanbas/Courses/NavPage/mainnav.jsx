import { IoMdClose } from "react-icons/io";
import { FaRegUserCircle, FaTachometerAlt, FaBook, FaRegCalendarAlt } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../../Kanbas/Database";
import "./index.css";


function MainNav() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    const links = [
        { label: "Account",   icon: <FaRegUserCircle className="fs-2" />},
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses",   icon: <FaBook className="fs-2" />},
        { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" />},
      ];
  return (
    <div>
      <Link to={`/Kanbas/Courses/${course?._id}/Home`}><button class="float-end x-button"><IoMdClose/></button></Link>
      <ul className="navPage">
        {links.map((link, index) => (
        <li key={index}>
          <Link style={{color: "red", textDecoration: "none"}} to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default MainNav;