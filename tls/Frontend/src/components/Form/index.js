import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Form(offices) {
  //   console.log("-- off -->", offices.offices.id[0].description);
  const classes = useStyles();
  return (
    <div id="form">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Nome Completo"
          defaultValue="Digite seu nome"
          //   value={offices.offices.id[0].description}
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="CPF"
          defaultValue="000.000.000-00"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-required"
          label="RG"
          defaultValue="Digite seu RG"
          variant="outlined"
        />

        <TextField
          id="outlined-required"
          label="Cargo Pretendido"
          defaultValue="Digite o cargo pretendido"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Estado Cívil"
          defaultValue="Digite seu estado cívil"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Data de Nascimento"
          defaultValue="01/01/1900"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Gênero"
          defaultValue="Digite seu gênero"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="CEP"
          defaultValue="Digite seu cep"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Endereço"
          defaultValue="Digite o logradouro"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Número"
          defaultValue="Digite o número"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Bairro"
          defaultValue="Digite seu bairro"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Cidade"
          defaultValue="Digite sua cidade"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Estado"
          defaultValue="Digite seu estado"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Telefone Fixo"
          defaultValue="Digite o número do telefone"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Telefone Fixo 2"
          defaultValue="Digite o número do telefone 2"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Celular"
          defaultValue="Digite o número do celular"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Contato"
          defaultValue="Digite o nome do contato"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="email"
          defaultValue="Digite seu email"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Profissão"
          defaultValue="Digite sua profissão"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Possuí CNH?"
          defaultValue="Sim/Não"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Possui Veículo?"
          defaultValue="Sim/Não"
          variant="outlined"
        />
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">Cargo</InputLabel>
          <Select
            native
            value={MenuItem.value}
            // onChange={handleChange}
            label="Office"
            inputProps={{
              name: "office",
              id: "outlined-age-native-simple",
            }}
          >
            {offices.offices.id
              ? offices.offices.id.map((office) => (
                  <option value={office.id}>{office.description}</option>
                ))
              : null}
          </Select>
        </FormControl>

        {/* <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={MenuItem.value}
          // onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          {offices.offices.id ? (
            offices.offices.id.map((office) => (
              <MenuItem value={office.id}>{office.description}</MenuItem>
            ))
          ) : (
            <em>None</em>
          )}
        </Select> */}
      </form>
    </div>
  );
}
