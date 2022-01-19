import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Output() counterEmmiter: EventEmitter<number> = new EventEmitter<number>();
  
  public counter: number = 0;
  public form!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      login: ['', Validators.required],
      email: ['']
    });
  }

  ngOnInit(): void { }

  increment(): void {
    this.counter++;
    this.counterEmmiter.emit(this.counter);
  }

  decrement(): void { this.counter--; }

}
