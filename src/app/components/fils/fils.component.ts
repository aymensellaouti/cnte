import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  /* 1- Créer l evenement */
  @Output() sendMessageToDad = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {}
  sendMessage() {
    /* 2 + 3 mettre data dans event et le déclencher*/
    this.sendMessageToDad.emit('cc papa');
  }
}
