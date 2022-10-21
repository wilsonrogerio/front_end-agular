import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderizarProdutos()


  }

  renderizarProdutos(){
    let secaoProdutos:any = document.getElementById("secao_produtos")
  
    let listaProdutos = [
      {
        nome: "Mouse Gamer",
        imagem: "/assets/img/T1 1.png",
        descricao: "Mouse gamer cobra, rgb",
        valor: 99.90
      },
      {
        nome: "mousepad gamer",
        imagem: "/assets/img/T1 1.png",
        descricao: "Mouse pad gamer",
        valor: 99.90
      },
      {
        nome: "Teclado T-dagger",
        imagem: "/assets/img/T1 1.png",
        descricao: "Teclado gamer t-dagger",
        valor: 199.90
      },
      {
        nome: "Webcam logitech",
        imagem: "/assets/img/T1 1.png",
        descricao: "Webcam logitech",
        valor: 1299.90
      },
      {
        nome: "Headset redragon",
        imagem: "/assets/img/T1 1.png",
        descricao: "Headset gamer Redragon",
        valor: 399.90
      },
      {
        nome: "controle xbox",
        imagem: "/assets/img/T1 1.png",
        descricao: "Controle xbox series x,s",
        valor: 599.90
      },
      {
        nome: "Asus rog",
        imagem: "/assets/img/T1 1.png",
        descricao: "Smartphone gamer",
        valor: 5399.90
      },
      {
        nome: "Monitor gamer",
        imagem: "/assets/img/T1 1.png",
        descricao: "Monitor gmaer 165hz",
        valor: 1399.90
      }
  
    ]
    let template = ""
  
    for(let index =0; index < listaProdutos.length; index++){
      template += `
      <div class="cards">
        <img src="${ listaProdutos[index].imagem }" alt="">
        <h3>${ listaProdutos[index].nome }</h3>
        <p>${ listaProdutos[index].descricao}</p>
        <p id="valor">R$${ listaProdutos[index].valor }</p>
        <a href="">comprar</a>
       </div>
      `
  
    }
  
    secaoProdutos.innerHTML = template
  
    
  
  }

}
/* mudar o banner*/

// $(document).ready(function(){

//   let listaSlides = ["banner-f1", "banner_cs", "banner_lol"]
//   let slideAtual = 1
 
//   function mudarSlide(){
//     console.log(slideAtual)


//     if (slideAtual > 0) {
//       $(".banner").removeClass(listaSlides[slideAtual -1])

      
//     }else{
//       $(".banner").removeClass(listaSlides[(listaSlides.length -1)])
//     }

    



//     $(".banner").addClass(listaSlides[slideAtual])

//     slideAtual++

//     if (slideAtual > (listaSlides.length - 1) ) {
//       slideAtual = 0

//     }
//   }
//   setInterval(mudarSlide, 3000)

// })