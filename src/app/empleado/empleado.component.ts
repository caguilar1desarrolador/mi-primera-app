import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: '<p>Aquí un empleado inline</p>',
  styleUrls: ['./empleado.component.css']
  // styles: ['p{background-color:skyblue}']
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";
  apellido = "Díaz";
  edad = 18;
  empresa = "Google";

  habilitacionCuadro = true;

  userRegistered = false;

  textoDeRegistro = "No hay nadie registrado";

  constructor() { }

  ngOnInit(): void {
  }

  getRegistroUsuario(){
    this.userRegistered = false;
  }

  setUsuarioRegistrado( evento : Event){
    //alert("El usuario se acaba de registrar");
    //this.textoDeRegistro = "El usuario se acaba de registrar";

    if ((<HTMLInputElement>evento.target).value == "si"){
      this.textoDeRegistro = "El usuario se acaba de registrar";
    }
    else{
      this.textoDeRegistro = "No hay nadie registrado";
    }
  }

}
