import { useState } from "react";
import style from "./RegisterPage.module.css";

function RegisterPage() {

  const [pasword, setPasword] = useState('')
  const [rePasword, setRePasword] = useState ('')
  const [email, setEmail] = useState ('')

function handleSubmit (e){
  e.preventDefault()
if (!email || !pasword || !rePasword ){
  alert ('Amigo hay que remplir el formulario')
  return
}
if (pasword.length < 6 ){
  alert('Amigo el paswor debe tener mas de 6 letras')
  return
}

if (pasword !== rePasword){
  alert('amiiigo! no es el mismo pasword')
  return
}

alert ('usuario Registrado')

}

  return (
    <div className={style.formulario}>
      <h2>Formularios de registro</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>

        <label htmlFor="pasword">Pasword</label>
        <input id="pasword" type="text" placeholder="Ungrese su contraseña" value={pasword} onChange={(e)=> {setPasword(e.target.value)}}/>

        <label htmlFor="confirmarPasword">Confirmar Pasword</label>
        <input id="confirmarPasword" type="text" placeholder="Repita su contraseña" value={rePasword} onChange={(e)=> {setRePasword(e.target.value)}}/>

        <button>Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterPage;


// que el formato del correo sea correcto
//en vez de mostrar un alert mostrar un mensaje abajo del parrafo ou abajo del boton

// limpiar el formulario