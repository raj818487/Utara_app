import { Component, OnInit } from '@angular/core';
import { AccReqService } from '../shared/acc-req.service';

@Component({
  selector: 'app-acc-req',
  templateUrl: './acc-req.component.html',
  styleUrl: './acc-req.component.scss',
})
export class AccReqComponent implements OnInit {
  constructor(public service: AccReqService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
}
