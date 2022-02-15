import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Button from "@mui/material/Button";
import AllPost from "../AllPost/AllPost";

export default function CategoryList({ post: p }) {
  const categorys = useFetch("http://localhost:3001/categorys");
  if (categorys.length === 0) {
    return <span>Loading...</span>;
  }
  // const [categorys, setCategorys] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/categorys")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCategorys(data);
  //     });
  // }, []);

  return (
    <div>
      <ul>
        {categorys.map((category) => (
          <Button variant="contained" key={category.id}>
            <Link
              to={`/category/${category.category}`}
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              {/*category.category는 dummy data에 있는 categorys의 category*/}
              {category.category}
            </Link>
          </Button>
        ))}
      </ul>
      <AllPost />
    </div>
  );
}
