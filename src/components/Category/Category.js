import dummy from "../../db/data.json";

export default function Category() {
  // dummy.posts이용

  const category = 1;
  const postList = dummy.posts.filter((post) => post.category === category);
  return (
    <div>
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
