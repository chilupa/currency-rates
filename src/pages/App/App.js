import { Container } from '@material-ui/core';
import Header from '../../components/Header/Header';
import Home from '../Home/Home';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Home />
    </Container>
  );
}

export default App;
