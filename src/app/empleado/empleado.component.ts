import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  // template: <p>Aquí un empleado inline</p>',
  styleUrls: ['./empleado.component.css']
  // styles: ['p{background-color:skyblue}']
})
export class EmpleadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
