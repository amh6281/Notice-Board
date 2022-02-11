import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

export default function CategoryList() {
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
    <ul>
      {categorys.map((category) => (
        <li key={category.id}>
          <Link to={`/category/${category.category}`}>
            {/*category.category는 dummy data에 있는 categorys의 category*/}
            Category {category.category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
