import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Output() counterEmmiter: EventEmitter<number> = new EventEmitter<number>();
  
  public counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment(): void {
    this.counter++;
    this.counterEmmiter.emit(this.counter);
  }

  decrement(): void { this.counter--; }

}
