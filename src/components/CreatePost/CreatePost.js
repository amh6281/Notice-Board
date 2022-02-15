import useFetch from "../../hooks/useFetch";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CreatePost() {
  const categorys = useFetch("http://localhost:3001/categorys");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch(`http://localhost:3001/posts/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: categoryRef.current.value,
          title: titleRef.current.value,
          contents: contentsRef.current.value,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("게시글이 작성되었습니다.");
          navigate(`/category/${categoryRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  const categoryRef = useRef(null);
  const titleRef = useRef(null);
  const contentsRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "10px",
          }}
        >
          제목
        </label>
        <input
          type="text"
          placeholder="제목을 써주세요."
          ref={titleRef}
          style={{
            width: "400px",
            height: "40px",
            fontSize: "20px",
            paddingTop: "0px",
            paddingBottom: "0px",
            padding: "10px",
          }}
        />
      </div>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "10px",
          }}
        >
          내용
        </label>
        <input
          type="text"
          placeholder="내용을 써주세요."
          ref={contentsRef}
          style={{
            width: "400px",
            height: "40px",
            fontSize: "20px",
            paddingTop: "0px",
            paddingBottom: "0px",
            padding: "10px",
          }}
        />
      </div>
      <div
        style={{
          marginBottom: "10px",
        }}
      >
        <label
          style={{
            display: "block",
            marginBottom: "10px",
          }}
        >
          게시판
        </label>
        <select
          ref={categoryRef}
          style={{
            width: "400px",
            height: "40px",
            fontSize: "20px",
          }}
        >
          {categorys.map((category) => (
            <option key={category.id} value={category.category}>
              {category.category}
            </option>
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1,
          padding: "10px",
          fontSize: "18px",
          cursor: "pointer",
          border: "none",
          borderRadius: "6px",
          color: "white",
          backgroundColor: "dodgerblue",
        }}
      >
        {isLoading ? "Saving..." : "저장하기"}
      </button>
    </form>
  );
}
