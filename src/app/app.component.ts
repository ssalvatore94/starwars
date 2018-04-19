import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm:string;
  searchName(searchTerm){
    console.log('searchName : '+searchTerm );    
    this.searchTerm=searchTerm;
  }

}
