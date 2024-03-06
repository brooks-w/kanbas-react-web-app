import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import TopAssignmentButtons from "./TopButtons";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <TopAssignmentButtons />
      <ul className="wd-modules">
        <li className="">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="">
                <FaEllipsisV className="me-2" />
                <IoNewspaper className="me-2" style={{color: "green"}}/>
                <Link style={{color: "black", textDecoration: "none", fontWeight: "bold"}}
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;