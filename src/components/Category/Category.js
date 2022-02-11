import dummy from "../../db/data.json";
import { useParams } from "react-router-dom";
import Post from "../Post/Post";

export default function Category() {
  // dummy.posts이용

  //useParams() = url에 category를 가져옴
  const { category } = useParams();
  const postList = dummy.posts.filter(
    (post) => post.category === Number(category)
  );
  return (
    <div>
      <h2>Category {category}</h2>
      <div>
        {postList.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
