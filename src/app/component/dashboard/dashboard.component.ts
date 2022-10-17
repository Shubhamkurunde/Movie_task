import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Modal/movie';
import { DataService } from 'src/app/Services/data.service';
import { StateService } from 'src/app/Services/state.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Top250Movies: any[]=[];
  pageSize = 12;
  currentPage = 1;
  total_pages = 0;
  
  pages:number[]=[];
  constructor(private dataservice:DataService, public state:StateService) { }

  ngOnInit(): void {
    this.getTop250()
  }

  // getTop250(){
  //   this.dataservice.getTop250().subscribe((err:any)=>{
  //     console.log('Error While fetching data for Top250')
  //   },(res: Movie)=>{
  //      this.Top250Movies = res;
  //      console.log(this.Top250Movies)
  //   })
  // }
  generatepages(limit:number){
    this.pages = [];
    for(let i=1; i <= limit; i++){
      this.pages.push(i);
    }
  }

  getTop250(){
    this.dataservice.getTop250().subscribe((res: any)=>{
      this.Top250Movies = res.items;
      this.total_pages = this.Top250Movies.length/this.pageSize;
      // console.log(this.Top250Movies)
    },(err: any)=>{
      console.log(err)
    })
  }


}
