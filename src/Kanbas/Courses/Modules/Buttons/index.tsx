import "./index.css";
import { FaCheckCircle } from "react-icons/fa"
import { FaPlus } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";


function Buttons() {
    return (
        <div className="align-buttons">
        <button className="top-row-buttons">Collapse All</button>
        <button className="top-row-buttons">View Progress</button>
        <select className="top-row-buttons">
          <option><FaCheckCircle style={{color: "green"}}/>Publish All</option>
        </select>
        <button className="module-button-red top-row-buttons"><FaPlus style={{marginRight: "5px"}}/> Module</button>
        <button className="top-row-buttons kebab-button"><CiMenuKebab style={{color: "black", fontSize: '20px', }}/></button>
      </div>
    )
}
export default Buttons;