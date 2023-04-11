import { Menu } from "../../components/Menu";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { styled as MuiStyled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import styled from "styled-components";

const Accordion = MuiStyled((props) => (
  <MuiAccordion children={[]} disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '.5rem',
  width: '95%',
  fontWeight: '1rem',
  // backgroundColor: 'red',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = MuiStyled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  color: '#0177FB',
  fontWeight: 'bold',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = MuiStyled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export const Activity = () => {
  return (
    <Outer>
      <Menu />

      <Container>
        <TitleContainer>
          <Title>Atividade</Title>
          <Description>Veja o que você pode fazer hoje</Description>
        </TitleContainer>

        <AccordionContainer>
          <Accordion expanded={false} onChange={() => console.log('any')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Adicionar categoria</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={false} onChange={() => console.log('any')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Adicionar forma de pagamento</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionContainer>
      </Container>
    </Outer>
  )
}

const Outer = styled.div`
  background-color: blue;
`

const Container = styled.div`
  position: absolute;
  background-color: green;
  margin-left: 18.5rem;
  margin-top: 1rem;
  width: 77%;
  text-align: left;
`

const TitleContainer = styled.div`
  display: inline-block;
  text-align: left;
  margin-left: 1rem;
  padding-bottom: .5rem;
`

const Title = styled.h2`
  margin: .5rem 0 .2rem 0;
`

const Description = styled.span``

const AccordionContainer = styled.div`
  padding: 1rem;
`