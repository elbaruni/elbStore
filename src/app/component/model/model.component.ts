import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {}
}
