import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Post({ post: p }) {
  const [post, setPost] = useState(p);

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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <IconButton onClick={del} aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <Typography>{post.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{post.contents}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
