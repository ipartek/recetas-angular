import { Component, OnInit } from '@angular/core';

import { Receta } from '../model/receta-model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.sass']
})
export class RecetasComponent implements OnInit {

  receta: Receta;

  constructor() { 
    console.log('RecetasComponent:constructor');
    this.receta = new Receta();
    this.receta.nombre = "Tortilla Patatas";
  }

  ngOnInit() {
    console.log('RecetasComponent:ngOnInit');
  }

}
