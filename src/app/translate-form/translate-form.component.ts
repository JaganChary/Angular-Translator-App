import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-translate-form',
  templateUrl: './translate-form.component.html',
  styleUrls: ['./translate-form.component.css']
})
export class TranslateFormComponent implements OnInit {
  textToTranslate: string = '';
  constructor() { }

  ngOnInit() {

  }

  onTranslate(e): any {
    alert(this.textToTranslate);
    e.preventDefault();
  }
}
