import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from "./components/formulario/formulario.component";
import { ListadoComponent } from "./components/listado/listado.component";
import { Noticia } from './interfaces/noticia.type=interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormularioComponent, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog';
  arrNoticias: Noticia[]=[
    {titulo:"titulo01",url:"https://cdn.pixabay.com/photo/2019/12/14/08/47/waves-4694496_960_720.jpg",
      texto:"Lorem fistrum a peich de la pradera condemor ese hombree de la pradera a wan no puedor diodenoo ese hombree. A peich la caidita pupita ahorarr te voy a borrar el cerito ahorarr torpedo ahorarr. Papaar papaar ahorarr ese que llega ahorarr condemor a wan tiene musho peligro condemor la caidita llevame al sircoo fistro. No te digo trigo por no llamarte Rodrigor ese pedazo de benemeritaar la caidita diodenoo papaar papaar a gramenawer está la cosa muy malar de la pradera diodeno. Va usté muy cargadoo pecador qué dise usteer diodenoo la caidita diodenoo apetecan está la cosa muy malar.", fecha:new Date},
      {titulo:"titulo02",url:"https://cdn.pixabay.com/photo/2018/05/10/10/09/palm-tree-3387205_960_720.jpg",
        texto:"Lorem fistrum a peich de la pradera condemor ese hombree de la pradera a wan no puedor diodenoo ese hombree. A peich la caidita pupita ahorarr te voy a borrar el cerito ahorarr torpedo ahorarr. Papaar papaar ahorarr ese que llega ahorarr condemor a wan tiene musho peligro condemor la caidita llevame al sircoo fistro. No te digo trigo por no llamarte Rodrigor ese pedazo de benemeritaar la caidita diodenoo papaar papaar a gramenawer está la cosa muy malar de la pradera diodeno. Va usté muy cargadoo pecador qué dise usteer diodenoo la caidita diodenoo apetecan está la cosa muy malar.", fecha:new Date},
        {titulo:"titulo01",url:"https://cdn.pixabay.com/photo/2019/12/14/08/47/waves-4694496_960_720.jpg",
          texto:"Lorem fistrum a peich de la pradera condemor ese hombree de la pradera a wan no puedor diodenoo ese hombree. A peich la caidita pupita ahorarr te voy a borrar el cerito ahorarr torpedo ahorarr. Papaar papaar ahorarr ese que llega ahorarr condemor a wan tiene musho peligro condemor la caidita llevame al sircoo fistro. No te digo trigo por no llamarte Rodrigor ese pedazo de benemeritaar la caidita diodenoo papaar papaar a gramenawer está la cosa muy malar de la pradera diodeno. Va usté muy cargadoo pecador qué dise usteer diodenoo la caidita diodenoo apetecan está la cosa muy malar.", fecha:new Date},
          {titulo:"titulo01",url:"https://cdn.pixabay.com/photo/2019/12/14/08/47/waves-4694496_960_720.jpg",
            texto:"Lorem fistrum a peich de la pradera condemor ese hombree de la pradera a wan no puedor diodenoo ese hombree. A peich la caidita pupita ahorarr te voy a borrar el cerito ahorarr torpedo ahorarr. Papaar papaar ahorarr ese que llega ahorarr condemor a wan tiene musho peligro condemor la caidita llevame al sircoo fistro. No te digo trigo por no llamarte Rodrigor ese pedazo de benemeritaar la caidita diodenoo papaar papaar a gramenawer está la cosa muy malar de la pradera diodeno. Va usté muy cargadoo pecador qué dise usteer diodenoo la caidita diodenoo apetecan está la cosa muy malar.", fecha:new Date},
            {titulo:"titulo01",url:"https://cdn.pixabay.com/photo/2019/12/14/08/47/waves-4694496_960_720.jpg",
              texto:"Lorem fistrum a peich de la pradera condemor ese hombree de la pradera a wan no puedor diodenoo ese hombree. A peich la caidita pupita ahorarr te voy a borrar el cerito ahorarr torpedo ahorarr. Papaar papaar ahorarr ese que llega ahorarr condemor a wan tiene musho peligro condemor la caidita llevame al sircoo fistro. No te digo trigo por no llamarte Rodrigor ese pedazo de benemeritaar la caidita diodenoo papaar papaar a gramenawer está la cosa muy malar de la pradera diodeno. Va usté muy cargadoo pecador qué dise usteer diodenoo la caidita diodenoo apetecan está la cosa muy malar.", fecha:new Date},
                      
  ];

  ngOnInit(){

  }
  procesarNoticias(event:Noticia){
    this.arrNoticias.push(event)
    
  }
}
