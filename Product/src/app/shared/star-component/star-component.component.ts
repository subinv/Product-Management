import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.css']
})
export class StarComponentComponent implements OnChanges {

  constructor() { }

  

  @Input() rating: number;
  starWidth :number;
  ngOnChanges() :void{
    this.starWidth = this.rating * 86/5;
  }

}
