import { Link} from "react-router-dom";
import data from "./data.json";

const Course = () => {

  return (
    <>
    <div>
    <h1>Courses</h1>
    <div style={{textAlign:'center',display:'flex'}}>
      {data.map((stu) => (
        <Link key={stu.id} to={`/${stu.name}`} style={{ margin: 16 }}>
          <h3>{stu.name}</h3>
        </Link>
      ))}
      </div>
      </div>
    </>
  );
};

export default Course;