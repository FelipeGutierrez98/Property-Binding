import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 

  products=[
    {
      producto: 'Macbook Air',
      precio: '900',
      procesador: 'M1'
    },
    {
      producto: 'Macbook Pro',
      precio: '1200',
      procesador: 'M1'
    },
    {
      producto: 'Macbook Air 2',
      precio: '1100',
      procesador: 'M2'
    },
    {
      producto: 'Macbook Pro 2',
      precio: '1400',
      procesador: 'M2'
    },
    {
      producto: 'Macbook Pro max',
      precio: '1800',
      procesador: 'M2 Max'
    },
  ]
  
 
}
