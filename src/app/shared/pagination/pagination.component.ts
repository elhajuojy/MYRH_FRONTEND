import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.currentPage)
  }


  constructor(private router :Router,
    private activatedRoute:ActivatedRoute) {
  }
  @Input() pageSize:number=0;
  @Input() totalElements:number=0;
  @Input() currentPage:number=0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  getTotalPages():number[] {
    let numbers = [];
    for (let i = 0; i < this.totalElements; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  onPageChange(page:number){
    this.router.navigate(['/job_offers'],
      {queryParams:{
          ...this.activatedRoute.snapshot.queryParams,
          page:page,
        }
      })


  }
}
