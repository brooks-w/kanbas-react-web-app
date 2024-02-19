/* eslint-disable jsx-a11y/anchor-is-valid */
import ModuleList from "../Modules/List";
import { FaCalendar, FaCheckCircle, FaCircleNotch } from "react-icons/fa";


function Home() {
  return (
    <div style={{display: "flex"}}>
      <div>
      <h2>Home</h2>
      <ModuleList />
      </div>
      <div className="d-flex flex-grow-0 me-2 d-none d-lg-block" style={{width: "250px"}}>
        <h2>Course Status</h2>
        <button type="button"><FaCircleNotch/>
          Unpublish</button>
        <button type="button" className="published-button"><FaCheckCircle/>
          Published</button>
        <ul className="list-group">
            <li className="btn btn-primary list-group-item"><a className="list-group-item-link" href="#">Import Existing Content</a></li>
            <li className="btn btn-primary list-group-item"><a className="list-group-item-link" href="#">Import From Commons</a></li>
            <li className="btn btn-primary list-group-item"><a className="list-group-item-link" href="#">Choose Home Page</a></li>
            <li className="btn btn-primary list-group-item"><a className="list-group-item-link" href="#">View Course Stream</a></li>
            <li className="btn btn-primary list-group-item"><a className="list-group-item-link" href="#">New Announcement</a></li>
            <li className="btn btn-primary list-group-item"><a className="list-group-item-link" href="#">View Analytics</a></li>
            <li className="btn btn-primary list-group-item"><a className="list-group-item-link" href="#">View Course Notifications</a></li>
        </ul>
        <div>
        <h4 className="h4-calc">Comming Up</h4>
        <a className="calc"href="#"><FaCalendar/>
           View calendar</a>
        </div>

        <hr />
        <ul>
            <li><a className="list-group-item-link-red" href="#">Lecture CS4540, 12631 202410 Sep 7 at 11:45am</a></li>
            <li><a className="list-group-item-link-red" href="#">Lecture CS4540, 12631 202410 Sep 11 at 11:45am</a></li>
            <li><a className="list-group-item-link-red" href="#">Lecture CS5610 06, SP23 Sep 11 at 6pm</a></li>
        </ul>
      </div>
      </div>
  );
}
export default Home;