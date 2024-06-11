import { Component } from '@angular/core';
import { AccReqService } from '../shared/acc-req.service';
import { NgForm } from '@angular/forms';
// import { log } from 'console';
import { AccReq } from '../shared/acc-req.model';

@Component({
  selector: 'app-acc-req-form',
  templateUrl: './acc-req-form.component.html',
  styleUrl: './acc-req-form.component.scss',
})
export class AccReqFormComponent {
  constructor(public service: AccReqService) {}

  // ngOnInit(): void {
  //   this.service.refreshList();
  // }

  onSubmit(form: NgForm) {
    this.service.postDetail().subscribe({
      next: (res) => {
        this.service.list = res as AccReq[];
        // this.toastr.success('Inserted SuccesFully', 'AccReq Registered');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
