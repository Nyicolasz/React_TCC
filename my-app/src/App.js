//Importações
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {// Componente funcional/função JS

  //Inicio do JSX
  return (
    <div className="App">
      <form class="login-form" action="javascript:void(0);">
<h1>Login</h1>
<div class="form-input-material">
  <input type="text" name="username" id="username" placeholder=" " autocomplete="off" class="form-control-material" required />
  <label for="username">Username</label>
</div>
<div class="form-input-material">
  <input type="password" name="password" id="password" placeholder=" " autocomplete="off" class="form-control-material" required />
  <label for="password">Password</label>
</div>
<button type="submit" class="btn btn-primary btn-ghost">Login</button>
</form>
    </div>
  );
}

export default App;


