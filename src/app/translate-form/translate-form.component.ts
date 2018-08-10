import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-translate-form',
  templateUrl: './translate-form.component.html',
  styleUrls: ['./translate-form.component.css']
})
export class TranslateFormComponent implements OnInit {
  textToTranslate: string = '';
  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }

  onTranslate(e): any {
    
    e.preventDefault();
    this.messageEvent.emit(this.textToTranslate);
  }
}
