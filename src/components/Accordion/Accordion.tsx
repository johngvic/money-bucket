import {
  styled as MuiStyled,
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { PropsWithChildren } from "react";

type AccordionProps = PropsWithChildren & {
  summary: string;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export const Accordion = ({ summary, expanded, onChange, children }: AccordionProps) => {
  return (
    <Container expanded={expanded} onChange={onChange}>
      <Summary>
        <Typography>{summary}</Typography>
      </Summary>
      <Details>{children}</Details>
    </Container>
  );
};

const Container = MuiStyled((props) => (
  <MuiAccordion
    children={[]}
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: "1rem",
  borderRadius: ".5rem",
  width: "95%",
  fontWeight: "1rem",
  "&:before": {
    display: "none",
  },
}));

const Summary = MuiStyled((props) => (
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  color: "#0177FB",
  fontWeight: "bold",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const Details = MuiStyled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));