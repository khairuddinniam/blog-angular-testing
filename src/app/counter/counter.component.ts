import { ChangeDetectorRef, Component, Input } from '@angular/core'

@Component({
  selector: 'counter',
  template: `
    <button (click)="decrement()">-</button>
    <span data-testid="count">Current Count: {{ counter }}</span>
    <button (click)="increment()">+</button>
  `,
  standalone: true,
})
export class CounterComponent {
  constructor(private cdr: ChangeDetectorRef) {
  }

  @Input() counter = 0

  increment() {
    this.counter += 1
  }

  decrement() {
    this.counter -= 1
  }
}
