import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {

  MostPopularMovies :any;
  constructor(private dataservice:DataService, public state:StateService) { }

  ngOnInit(): void {
   
  }

MostPopular(){
  this.dataservice.MostPopular().subscribe(res=>{
    this.MostPopularMovies = res;
  },err=>{
    console.log(err);
  })
}

}
