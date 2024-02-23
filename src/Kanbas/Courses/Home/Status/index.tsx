import { FaCalendar, FaCheckCircle, FaCircleNotch } from "react-icons/fa";
import { RiBrainFill } from "react-icons/ri";
import { FiTarget } from "react-icons/fi";
import { FaFileExport } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoIosMegaphone } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

import "./index.css";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../../Database"

function Status() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="main-status">
    <div
      className="d-flex flex-grow-0 me-2 d-none d-lg-block"
      style={{ width: "250px" }}>
      <div className="align-unpublished-published-buttons">
        <button type="button" className="unpublished-published-buttons">
          <FaCircleNotch style={{ marginRight: "6px", marginBottom: "-2px" }} />
          Unpublish
        </button>
        <button type="button" className="published-button unpublished-published-buttons">
          <FaCheckCircle style={{ marginRight: "6px", marginBottom: "-2px" }} />
          Published
        </button>
      </div>
      <div className="align-status">
      <ul className="list-group">
        <li className="btn btn-primary list-group-item icon-text-button"><FaFileExport style={{marginRight: "3px"}}/>
          Import Existing Content
        </li>
        <li className="btn btn-primary list-group-item icon-text-button"><RiBrainFill style={{marginRight: "3px"}}/> Import From Commons</li>
        <li className="btn btn-primary list-group-item icon-text-button"><FiTarget style={{marginRight: "3px"}}/> Choose Home Page</li>
        <li className="btn btn-primary list-group-item icon-text-button"><VscGraph style={{marginRight: "3px"}}/> View Course Stream</li>
        <li className="btn btn-primary list-group-item icon-text-button"><IoIosMegaphone style={{marginRight: "3px"}}/> New Announcement</li>
        <li className="btn btn-primary list-group-item icon-text-button"><VscGraph style={{marginRight: "3px"}}/>View Analytics</li>
        <li className="btn btn-primary list-group-item icon-text-button"><CiBellOn style={{marginRight: "3px"}}/>View Course Notifications</li>
      </ul>
      <div>
        <h4 className="h4-cal">To Do</h4>
        <span className="cal">
          <FaCalendar />
          View calendar
        </span>
      </div>
      <hr />
      <div style={{marginLeft: "-8px", marginBottom: "100px"}}>
      <ul>
      {assignmentList.map((assignment) => (
              <li style={{color: "red"}}>
                <Link style={{color: "red", textDecoration: "none", fontSize: "17px"}}
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                   <span className="float-end"><button style={{backgroundColor: "transparent", border: "none"}}><IoMdClose style={{color: "grey", fontSize: "15px"}} /></button></span>
                   <br/>
                   <span style={{color: "gray", fontSize: "10px"}}>100 points</span>
              </li>))}
      </ul>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Status;