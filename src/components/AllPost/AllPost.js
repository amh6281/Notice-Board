import dummy from "../../db/data.json";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AllPost() {
  return (
    <div>
      {dummy.posts.map((post) => (
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  display: "table",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {post.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                style={{
                  display: "table",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {post.contents}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
    </div>
  );
}
