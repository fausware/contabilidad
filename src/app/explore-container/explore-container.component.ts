import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {

  private eventsSubscription: any

  @Input() events: Observable<void>;
  @Input() modelo: {};

  constructor() { }

  ngOnInit() {
    console.log(this.modelo);
    if (this.events !== undefined) {
      this.eventsSubscription = this.events.subscribe(() => this.actualizar())
    }
  }

  public actualizar() {
    this.modelo = this.modelo;
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe()
  }

}
