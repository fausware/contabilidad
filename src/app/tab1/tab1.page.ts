import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  p: number = 1;
  facturas = [{
    idFactura: 1, Cliente: "Piter", Cantidad: 5
  },
  {
    idFactura: 2, Cliente: "Mark", Cantidad: 10
  },
  {
    idFactura: 3, Cliente: "Dani", Cantidad: 15
  },
  {
    idFactura: 4, Cliente: "Edu", Cantidad: 20
  },
  {
    idFactura: 5, Cliente: "Adri", Cantidad: 25
  },
  {
    idFactura: 6, Cliente: "Isma", Cantidad: 35
  },
  {
    idFactura: 7, Cliente: "Julia", Cantidad: 45
  },
  {
    idFactura: 8, Cliente: "Maria", Cantidad: 55
  },
  {
    idFactura: 9, Cliente: "Cristina", Cantidad: 65
  },
  {
    idFactura: 10, Cliente: "Jose", Cantidad: 75
  }];
  constructor() { }

}
