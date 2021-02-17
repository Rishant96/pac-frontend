import { Header } from "../components";

export const HeaderContainer: React.FC = ({children, ...restProps}) => (
  <>
  <Header>
    <Header.Brand>Online PAC</Header.Brand>
  </Header>
  <Header.Content>{children}</Header.Content>
  </>
);