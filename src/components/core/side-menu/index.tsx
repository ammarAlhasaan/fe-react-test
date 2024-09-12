import {Link} from "react-router-dom";

export default function Sidebar() {
  return (
    <div id="sidebar">
      <nav>
        <ul>

          <li>
            <Link to="employee/list">Employees</Link>
          </li>
          <li>
            <Link to="salary/list">Salaries</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
