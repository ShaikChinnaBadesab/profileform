import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  displayColums :string[]=["id","name","empcount","revenue","address","isactive","action"]

}
