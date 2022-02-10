import { Wrapper, Content } from "./Header.styles";

export default function Header() {
  return (
    <Wrapper>
      <Content>
        <a href="/">게시판</a>
        <a href="/">새 글 쓰기</a>
      </Content>
    </Wrapper>
  );
}
