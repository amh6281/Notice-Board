import { useState } from "react";

export default function Post({ post: p }) {
  const [post, setPost] = useState(p);
  const [isShow, setIsShow] = useState(false);
  const [isDelete, setIsDelete] = useState(post.delete);

  function clickShow() {
    setIsShow(!isShow);
  }

  function clickDelete() {
    setIsDelete(!isDelete);
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/posts/${post.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setPost({ id: 0 });
        }
      });
    }
  }

  if (post.id === 0) {
    return null;
  }

  return (
    <div>
      <span>
        <input type="checkbox" checked={isDelete} onChange={clickDelete} />
      </span>
      <span>{post.title}</span>
      <span>{isShow && post.contents}</span>
      <span>
        <button onClick={clickShow}>본문 {isShow ? "숨기기" : "보기"} </button>
        <button onClick={del}>삭제</button>
      </span>
    </div>
  );
}
