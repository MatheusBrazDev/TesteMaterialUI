import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';

const statusOptions = ['Aguardando', 'Em Andamento', 'Concluída'];

const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [formValues, setFormValues] = useState({
    idTarefa: uuidv4(),
    tituloTarefa: '',
    descricaoTarefa: '',
    inicioTarefa: '',
    fimTarefa: '',
    statusTarefa: '',
    recursoTarefa: '',
  });

  useEffect(() => {
    setFormValues({
      ...formValues,
      idTarefa: uuidv4(),
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTarefas([...tarefas, formValues]);
    handleClose();
  };

  return (
    <Card sx={{ padding: '2rem', maxWidth: '500px', margin: '2rem auto' }}>
      <CardHeader title="Criar Tarefa" />
      <CardContent>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Título"
                name="tituloTarefa"
                value={formValues.tituloTarefa}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Descrição"
                name="descricaoTarefa"
                value={formValues.descricaoTarefa}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Data de Início"
                name="inicioTarefa"
                InputLabelProps={{ shrink: true }}
                value={formValues.inicioTarefa}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="date"
                label="Data de Finalização"
                name="fimTarefa"
                InputLabelProps={{ shrink: true }}
                value={formValues.fimTarefa}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="statusTarefa"
                  value={formValues.statusTarefa}
                  onChange={handleChange}
                >
                  {statusOptions.map((status) => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Recurso"
                name="recursoTarefa"
                value={formValues.recursoTarefa}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <CardActions sx={{ justifyContent: 'flex-end', mt: 2 }}>
            <Button type="submit" variant="contained">Criar</Button>
            <Button variant="outlined" onClick={handleClose}>Cancelar</Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CriarTarefa;
