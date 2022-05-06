import { Component, Input, OnInit } from '@angular/core';
import {  AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { fromEvent } from 'rxjs';
import {  filter, map } from 'rxjs/operators';
import { SearchService } from 'src/app/shared/services/search.service';
import { HttpClientModule } from '@angular/common/http';
import { Popular } from 'src/app/shared/models/popular.interface';
import { Categories } from '../shared/models/categories.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  {

  @Input() cat:Categories[];
  @ViewChild('mySelect') inputElement: ElementRef;
  @Output() click: EventEmitter<string> = new EventEmitter<string>();



  constructor(private searchService: SearchService) { }


  public onChange(event): any
  {

    let newVal = event.target.value;
    this.searchService.setTest(newVal);
    console.log(newVal);
    return newVal;
  }
  handleSearch() {

    this.searchService.getCategories()
      .subscribe((items: any) => {
        this.cat = items.map(item => {


          return( {
            title: item.snippet.title,
            id :item.id,

          });

        });
  });



}}
