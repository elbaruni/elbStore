import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() checkoutSuccess: EventEmitter<string> = new EventEmitter();
  constructor() {}
  fullName: string = '';
  address: string = '';
  creditCard: string = '';
  ngOnInit(): void {}
  onSubmit(): void {
    this.checkoutSuccess.emit(this.fullName);
  }
}
