import { useState } from 'react';

import { TextField, Button, Switch, FormControlLabel, FormGroup } from '@mui/material';

const FormSignUp = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [promotions, setPromotions] = useState(false);
  const [news, setNews] = useState(true);

  const [errors, setErrors] = useState({
    name: {
      name: false,
      message: 'El nombre debe tener al menos 3 caracteres',
    },
  });

  const validateName = (name) => {
    if (name.length < 3) {
      return {
        name: {
          error: true,
          message: 'El nombre debe tener al menos 3 caracteres',
         }
      };
    } else {
      return {
        name: {
          error: false,
          message: '',
         }
      };
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, lastName, email, promotions, news });
      }}
    >
      <FormGroup sx={{
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '1.5rem 3rem',
        margin: '1rem 0',
        backgroundColor: '#f9f9f9',
        boxShadow: '2px 2px 6px rgba(0,0,0,0.6)',
      }}>
        <TextField
          id="name"
          label="Nombre"
          variant="outlined"
          margin='normal'
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          error={errors.name.error}
          helperText={errors.name.error && errors.name.message}
          onBlur={(e) => setErrors(validateName(e.target.value))}
        />
        <TextField
          id="last-name"
          label="Apellidos"
          variant="outlined"
          margin='normal'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
        />
        <TextField
          id="email"
          label="Correo Electronico"
          variant="outlined"
          margin='normal'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <FormControlLabel
          control={<Switch
            checked={promotions}
            onChange={(e) => setPromotions(e.target.checked)}
          />}
          label="Promociones"
        />
        <FormControlLabel
          control={<Switch
            checked={news}
            onChange={(e) => setNews(e.target.checked)}
          />}
          label="Novedades"
        />
        <Button
          variant='contained'
          type='submit'
        >
          Registrarse
        </Button>
      </FormGroup>
    </form>
  )
}

export default FormSignUp