import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number = 5;

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    const interval = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
}
