/*
  1. Api Call
  2. Rendering React Components
  3. React Supplying Data to Angular - Counter Example
    - Angular Rendering Data
  4. Event Handling
*/

import {
  AfterViewInit,
  Component,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
  OnChanges,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  SimpleChanges
} from "@angular/core";
import * as React from "react";
import * as ReactDOM from "react-dom";

// Main App
import ReactApp from "../react/ReactApp";

@Component({
  selector: "frb-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild("myReactComponent", { static: false }) containerRef: ElementRef;

  @Input() public counter = 10;
  @Output() public componentClick = new EventEmitter<void>();

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
      <ReactApp decrement={this.Decrement} increment={this.Increment} />,
      this.containerRef.nativeElement
    );
  }
}
