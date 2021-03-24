import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome
  idade: number = 20

  alterarNome (nomeInputEvent){
    console.log(nomeInputEvent.target.value)
    this.nome = nomeInputEvent.target.value;
  }

  lancarDado(){
    return Math.floor(Math.random() * 6) + 1;
  }

  adicionar (nomeInput){
    console.log(nomeInput)
    this.nome = nomeInput.value;
  }
}
