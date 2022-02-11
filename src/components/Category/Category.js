import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Post from "../Post/Post";

export default function Category() {
  // dummy.posts이용

  //useParams() = url에 category를 가져옴
  const { category } = useParams();
  // const postList = dummy.posts.filter(
  //   (post) => post.category === Number(category)
  // );
  const posts = useFetch(`http://localhost:3001/posts?category=${category}`);
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/posts?category=${category}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setPosts(data);
  //     });
  // }, []);

  return (
    <div>
      <h2>Category {category}</h2>
      {posts.length === 0 && <span>Loading...</span>}
      <div>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
