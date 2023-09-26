import styled from 'styled-components';
import { PropsWithChildren, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit'
import { GenericModal } from '../../../../components/GenericModal';

type EditDataProps = {
  editableAttributes: string[];
  data: Record<string, any>[];
}

export const EditData = ({ editableAttributes, data }: EditDataProps & PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Table>
        <Row>
          <Header>Nome</Header>
          {/* <> n attributes... </> */}
          <Header></Header>
        </Row>

        <Row>
          <Data>Finanças</Data>
          <DataIcon>
            <Icon onClick={() => setOpen(true)} />
          </DataIcon>
        </Row>
      </Table>

      <GenericModal open={open} onClose={handleClose} />
    </Container>
  )
}

const Container = styled.div`
  height: 20rem;
  overflow-y: auto;
`

const Table = styled.table`
  margin-top: .5rem;
  border-spacing: 2rem 1rem;
  width: 25rem;
  height: auto;
  margin: 0 auto;
`

const Row = styled.tr`
  padding: 1rem;
`
const Header = styled.th`
  font-size: 18px;
`

const Data = styled.td`
  word-break: break-all;
  border-bottom: 1px solid #efeeee;
  font-size: 14px;
`

const DataIcon = styled.td`
  border-bottom: 1px solid #efeeee;
  width: 2.5rem;
  border-radius: .5rem;
  cursor: pointer;

  :hover {
    background: var(--main-white, #FFF);
    box-shadow: 8px 13px 44px -6px #DFDBF6;
  }
`

const Icon = styled(EditIcon)``