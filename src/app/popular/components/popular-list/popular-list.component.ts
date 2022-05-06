import { Component, Input, OnInit } from '@angular/core';
import { Popular } from 'src/app/shared/models/popular.interface';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.css']
})
export class PopularListComponent implements OnInit {

  @Input() popular:Popular[];

  constructor() { }

  ngOnInit(): void {
  }

}
