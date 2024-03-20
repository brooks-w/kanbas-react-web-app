import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import Buttons from "./Buttons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import { IoMdClose } from "react-icons/io";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  
  return (
    <div className="flex-fill">
    <Buttons />
    <hr className="home-hr"/>
      <ul className="wd-modules">
      <div className="container">
      <button className="add"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className="update"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
          </div>
        {moduleList
        .filter((module) => module.course === courseId)
        .map((module) => (
          <li onClick={() => setSelectedModule(module)}>
            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "-10px" }}>
            <button style={{backgroundColor: "light-blue", color: "black", borderRadius: "80%", fontSize: "12px", marginRight: "10px"}}
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button className="delete-button"
              onClick={() => dispatch(deleteModule(module._id))}>
              <IoMdClose/>
            </button>
            </div>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="">
                {module.lessons?.map((lesson: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                  <li className="indent-course-material">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;
