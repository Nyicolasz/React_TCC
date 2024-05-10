//Importações
import React from 'react';
import './App.css'; //Importação do CSS
import LembrarSenha from './LembrarSenha'; //Importação do COMPONENETE "LembrarSenha"


function CamposForms() {

  return (
    <div className="App">
      <div class="wrapper fadeInDown">
        <div class="content-login">
          <h2 class="active"> Login </h2>

          <form class="box-login" method="post" action="#">
            <input type="email" id="email" class="campo" name="email" placeholder="E-mail" />
            <input type="text" id="password" class="campo" name="senha" placeholder="Senha" />
            <input type="submit" class="botao" value="Entrar" />
          </form>

          <LembrarSenha /> {/*Componenente "Lembrar Senha"*/}

        </div>
      </div>
    </div>
  );
}

export default CamposForms;


