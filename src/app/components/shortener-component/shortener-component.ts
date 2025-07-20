import { Component } from '@angular/core';

@Component({
  selector: 'app-shortener-component',
  imports: [],
  templateUrl: './shortener-component.html',
  styleUrl: './shortener-component.scss'
})
export class ShortenerComponent {
  i: string = "a";
  submit(event : any){
    return console.log(event);
  }
  verdadeiro: boolean = false;
  listItems = ["a","b","c"];
  listItems2 = [1, 2, 3];

}
