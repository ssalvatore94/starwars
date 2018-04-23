import { Component, OnInit, Input } from '@angular/core';
import { Starship } from '../../models/starship';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css'],
  
})
export class StarshipComponent implements OnInit {
  @Input() starship:Starship

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

  }

}
