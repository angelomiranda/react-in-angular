import {
  AfterViewInit,
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges,
  OnDestroy,
  Input,
  SimpleChanges
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "../react/Counter";

@Component({
  selector: "counter",
  templateUrl: "../main/counter.component.html",
  encapsulation: ViewEncapsulation.None
})
export class CounterComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild("counterComponent", { static: false }) containerRef: ElementRef;

  @Input() public counter = 10;

  constructor() {
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
  }

  public Increment() {
    this.counter++;
    this.render();
  }

  public Decrement() {
    this.counter--;
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    const { counter } = this;

    ReactDOM.render(
      <Counter decrement={this.Decrement} increment={this.Increment} />,
      this.containerRef.nativeElement
    );
  }
}
