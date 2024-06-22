import { Link } from "react-router-dom";

const Employee = () => {
  return (
    <div>
      <h1>This is Employee page</h1>
      <Link to="/dashboard">
        <button className="btn btn-square">Go ahead</button>
      </Link>
    </div>
  );
};

export default Employee;
