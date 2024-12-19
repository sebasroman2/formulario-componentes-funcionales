import { Container, Typography } from '@mui/material';

import FormSignUp from './components/FormSignUp';

function App() {

  const handleSubmit = (data) => {
    console.log('APPJS', data);
  }

  return (
    <Container component={'section'} maxWidth='sm'>
      <Typography variant='h3' align='center' component={"h1"}>Formulario de registro</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;