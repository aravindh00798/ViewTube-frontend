import { Component, Input, OnInit } from '@angular/core';
import { CatDisplay } from 'src/app/shared/models/cat-display.interface';
@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  @Input() cat :CatDisplay[]
  constructor() { }

  ngOnInit(): void {
  }

}
