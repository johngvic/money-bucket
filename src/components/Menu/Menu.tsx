import styled from 'styled-components';
import { ReactComponent as DashboardIcon } from '../../assets/dashboard.svg';
import { ReactComponent as WalletIcon } from '../../assets/wallet.svg';
import { ReactComponent as ChartIcon } from '../../assets/chart.svg';
import { ReactComponent as ActivityIcon } from '../../assets/activity.svg';
import { ReactComponent as CalendarIcon } from '../../assets/calendar.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
// import { ReactComponent as LogoutIcon } from '../../assets/logout.svg';

export const Menu = () => {
  return (
    <Aside>
      <Logo />

      <Container>

        <ContainerTitle>GERAL</ContainerTitle>
        
        <ContainerOption>
          <DashboardIcon />
          <p>Dashboard</p>
        </ContainerOption>

        <ContainerOption>
          <WalletIcon />
          <p>Cartões</p>
        </ContainerOption>

        <ContainerOption>
          <ChartIcon />
          <p>Métricas</p>
        </ContainerOption>

        <ContainerOption>
          <ActivityIcon />
          <p>Atividade</p>
        </ContainerOption>

        <ContainerOption>
          <CalendarIcon />
          <p>Calendário</p>
        </ContainerOption>

      </Container>

      <Container>

        <ContainerTitle>PREFERÊNCIAS</ContainerTitle>

        <ContainerOption>
          <SettingsIcon />
          <p>Configurações</p>
        </ContainerOption>

      </Container>
      
      {/* 
      <LogoutContainer>
        <LogoutIcon />
        <p>Logout</p>
      </LogoutContainer> */}

    </Aside>
  )
}

const Aside = styled.aside`
  height: 94.5vh;
  width: 18vw;
  padding: 1rem;
  border: 1px solid black;
  position: absolute;
`

const Logo = styled.div`
  height: 5rem;
  width: 18vw;
  background-color: white;
  border: 1px solid black;
`

const ContainerTitle = styled.p`
  text-align: left;
  margin-left: 1.5rem;
  padding-top: 1rem;
  font-size: 0.75rem;
  color: #A5B3CD;
`

const Container = styled.div`
  background-color: white;
  margin-top: 1rem;
  justify-content: center;
  margin: 0 auto;
  display: block;
  text-align: center;
  border-radius: .5rem;
  transition: all 350ms ease-out;
`

const ContainerOption = styled.div`
  display: flex;
  width: 15vw;
  margin: 1rem auto;
  align-items: center;
  justify-content: left;
  cursor: pointer;
  transition: all 200ms ease-in;
  border: 1px solid #c2bfbf;
  border-radius: .3rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    border: 1px solid #888888;
    transition: all 200ms ease-in;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    svg {
      path {
        transition: all 200ms ease-in;
        fill: #0177FB;
      }
    }

    p {
      transition: all 200ms ease-in;
      color: #0177FB;
    }
  }

  svg {
    margin-left: 1rem;
  }

  p {
    font-size: 1rem;
    margin-left: 1rem;
    color: #A5B3CD;
  }
`

const LogoutContainer = styled.div`
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  align-items: center;
  /* margin-top: 3rem; */
  justify-content: center;

  &:hover {
    transition: all 200ms ease-in;

    svg {
      path {
        transition: all 200ms ease-in;
        fill: #0177FB;
      }
    }

    p {
      transition: all 200ms ease-in;
      color: #0177FB;
    }
  }

  p {
    font-size: 1rem;
    margin-left: .5rem;
    color: #A5B3CD;
  }
`