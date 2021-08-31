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
      minWidth: "15ch",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "15ch",
    maxWidth: "25ch",
  },
}));

export default function Form(offices) {
  //   console.log("-- off -->", offices.offices.id[0].description);
  const classes = useStyles();
  return (
    <div id="form">
      <div id="alignForm">
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            id="outlined-required"
            label="Nome"
            defaultValue="Digite seu nome"
            //   value={offices.offices.id[0].description}
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Sobrenome"
            defaultValue="Digite seu sobrenome"
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
            id="outlined-read-only-input"
            label="Data de Nascimento"
            defaultValue="01/01/1900"
            variant="outlined"
          />

          <TextField
            id="outlined-read-only-input"
            label="Salário"
            defaultValue="Qual pretenção salarial"
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
    </div>
  );
}
