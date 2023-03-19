import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-view',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent  implements OnInit {
@Input () type!: any;
  constructor() { }

  ngOnInit() {}

}
