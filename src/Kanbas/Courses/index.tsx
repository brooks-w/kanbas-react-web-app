import { courses_db } from "../../Kanbas/Database";
import { useLocation, Navigate, Route, Routes, useParams, Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";
import Assignments from "./Assignments";
import { IoIosArrowForward } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import CourseNav from "./NavPage/coursenav";
import MainNav from "./NavPage/mainnav";

function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <div className="d-none d-md-block">
      <h1 className="course-header"><HiMiniBars3 style={{padding: "2px", marginRight: "8px"}}/>{course?.name} ({course?._id}) <IoIosArrowForward style={{color: "grey", marginLeft: "10px"}}/> <span>{pathname.split('/').pop()}</span> </h1>
      <hr className="home-hr"/>
      </div>
      <div className="d-block d-sm-none upper-banner">
          <span>CS4540 <br/>{pathname.split('/').pop()}</span>
        <Link to="mainNav" className="float-start xs-banner-hamburger"><HiMiniBars3/></Link>
        <Link to="courseNav" className="float-end xs-banner-chevron"><FaChevronDown/></Link>
      </div>
      <CourseNavigation />
      <div className="d-md-block h-100 w-100">
        <div
          className="overflow-y-scroll custom-fixed bottom-0 end-0"
          style={{ left: "200px", top: "75px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="courseNav" element={<CourseNav />} />
            <Route path="mainNav" element={<MainNav />} />
          </Routes>
        </div>
        </div>
    </div>
  );
}
export default Courses;