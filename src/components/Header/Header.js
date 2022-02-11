import { Wrapper, Content } from "./Header.styles";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to="/">게시판</Link>
        <Link to="/create_post">새 글 쓰기</Link>
      </Content>
    </Wrapper>
  );
}
