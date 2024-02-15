import KanbasNavigation from "./Navigation";
import {Route, Routes} from "react-router";
import Dashboard from "./Dashboard";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
            <Route path="/Account" element={<h1>Account</h1>} />
            <Route path="/Dashboard" element={<Dashboard/>} />
            <Route path="/Courses" element={<h1>Courses</h1>} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;