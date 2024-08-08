import { Component, EventEmitter, Output } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.type=interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  @Output() enviar= new EventEmitter<Noticia>();
  newNoticia: Noticia = {titulo:"",url:"",texto:"",fecha:new Date};
  cargarDatos(){
    if(this.newNoticia.texto !=""&& this.newNoticia.url !=""&& this.newNoticia.texto!=""&& this.newNoticia.fecha!=null){
    this.enviar.emit(this.newNoticia);
    this.newNoticia={titulo:"",url:"",texto:"",fecha:new Date};
    console.log(this.newNoticia.fecha)
  }else{
    alert("Debe rellenar todos los campos, gracias")
  }
  }

}
