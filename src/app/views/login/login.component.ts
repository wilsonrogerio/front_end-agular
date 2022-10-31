import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new  User();

  mensagem = "";

  receberDados(){
    this.LoginService.login(this.userModel).subscribe({
      next: (response) =>  { 
        console.log(response.body.user.nome)
        localStorage.setItem("nomeUsuario", response.body.user.nome)
        // localStorage.removeItem("nomeUsuario") remove o usuario do local storage
        
        this.router.navigateByUrl("/")

      },error: (msgErro) => {
        console.log(msgErro.error);
        this.mensagem = msgErro.error

        if (msgErro.error == "Password is too short") {
          this.mensagem = "Senha muito curta"
        }else{
          this.mensagem = msgErro.error
        }
        if (msgErro.error== "Incorrect password") {
          this.mensagem = "Senha incorreta"
        }else{
          this.mensagem = msgErro.error
        }




      }

    })

    
  }

}
