import { Link } from "react-router-dom";
import dummy from "../../db/data.json";

export default function CategoryList() {
  console.log(dummy);
  return (
    <ul>
      {dummy.categorys.map((category) => (
        <li key={category.id}>
          <Link to={`/category/${category.category}`}>
            Category {category.category}
          </Link>
        </li>
      ))}
    </ul>
  );
}
