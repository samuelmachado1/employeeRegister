import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form() {
  const classes = useStyles();
  return (
    <div id="form">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Nome Completo"
          defaultValue="Digite seu nome"
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
      </form>
    </div>
  );
}
