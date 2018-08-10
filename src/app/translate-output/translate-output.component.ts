import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-translate-output',
  templateUrl: './translate-output.component.html',
  styleUrls: ['./translate-output.component.css']
})
export class TranslateOutputComponent implements OnInit {
  
  @Input() outputMessage: string;
  constructor() { }

  ngOnInit() {
    this.outputMessage
  }

}
