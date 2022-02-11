import { useState } from "react";

export default function Post({ post }) {
  const [isShow, setIsShow] = useState(false);
  const [isDelete, setIsDelete] = useState(post.delete);

  function clickShow() {
    setIsShow(!isShow);
  }

  function clickDelete() {
    setIsDelete(!isDelete);
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
        <button>삭제</button>
      </span>
    </div>
  );
}
