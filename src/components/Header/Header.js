// import { Wrapper, Content } from "./Header.styles";
// import { Link } from "react-router-dom";
// import Fab from "@mui/material/Fab";
// import EditIcon from "@mui/icons-material/Edit";
// export default function Header() {
//   return (
//     <Wrapper>
//       <Content>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           게시판
//         </Link>
//         <Link to="/create_post">
//           <Fab color="secondary" aria-label="edit">
//             <EditIcon />
//           </Fab>
//         </Link>
//       </Content>
//     </Wrapper>
//   );
// }

import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
const pages = [];

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              게시판
            </Link>
          </Typography>
          {/* 로고 */}

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/* 글 추가 */}
          <Link to="/create_post">
            <Fab aria-label="edit">
              <EditIcon />
            </Fab>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
