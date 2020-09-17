import { Component, OnInit } from '@angular/core';
import { DjangoService } from 'src/app/django.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DjangoService]
})
export class AppComponent implements OnInit {
  
  title = 'SoaFront';
  producto;
  productos:any[]=[];
  constructor(private api: DjangoService){}
  ngOnInit(): void {
    this.producto={
      nombre:'',
      precio:''
    }
    this.api.get().subscribe(response => {
      var x = 0;
      while (x < response.length) { 
        var datos:any[]=[]
        datos.push(response[x].nombre);
        datos.push(response[x].precio);
        this.productos.push(datos)
        x++;
     } 
    })
  }
  add(){
    this.api.add(this.producto).subscribe(
      response=>{
        console.log(response)
      },error=>{
        console.log(<any>error)
      }
    )
    window.location.reload()
  }
}
