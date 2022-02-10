import dummy from "../../db/data.json";
import { useParams } from "react-router-dom";

export default function Category() {
  // dummy.posts이용

  const category = useParams().category;
  const postList = dummy.posts.filter(
    (post) => post.category === Number(category)
  );
  return (
    <div>
      <h2>Category {category}</h2>
      <div>
        {postList.map((post) => (
          <div key={post.id}>
            <span>{post.title}</span>
            <span>{post.contents}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
