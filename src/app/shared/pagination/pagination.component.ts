import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.currentPage)
  }

  @Input() pageSize:number=0;
  @Input() totalElements:number=0;
  @Input() currentPage:number=0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  getTotalPages():number[] {
    return Array.from(Array(Math.ceil(this.totalElements / this.pageSize)).keys());
  }

  onPageChange(page:number){
    this.pageChange.emit(page);

  }
}
