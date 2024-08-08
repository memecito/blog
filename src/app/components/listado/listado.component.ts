import { Component, Input } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.type=interface';
import { HtmlParser } from '@angular/compiler';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
@Input() noticias: Noticia[]=[
  
]; 
  ngOnInit(){
    this.cargarNoticias();
  }
  cargarNoticias(){
    let html:string="";
    this.noticias.forEach((noticia:Noticia)=>{
      html+=`<article class="noticia">
      <h3>${noticia.titulo}</h3>
      <div class="w_img">
            <img src="${noticia.url}" atl="${noticia.titulo}">
      </div>
      <br>
      <div class="fecha">
      <span>${noticia.fecha.getDate()}/${noticia.fecha.getMonth()}/${noticia.fecha.getFullYear()}</span>
      </div>
      <p>${noticia.texto}</p>
      </article>
      `
    })
    return html;

  }

}
