import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() search=new EventEmitter();
  private searchTerm:string;
  constructor() { }

  ngOnInit() {
  }
  searchEmit(searchTerm) {
    console.log(searchTerm);
    this.search.emit(searchTerm)
  }

}
