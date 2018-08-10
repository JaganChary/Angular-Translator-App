import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MyCustomType } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  translatedText: string;

  constructor(
    private httpClient: HttpClient
  ) { }

  receiveMessage(e: any): any {
    this.message = e;
    this.httpClient.get<MyCustomType>('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180808T133456Z.c34f9371d5136659.8295e66d42e804a94488c8202b7491fd836c64c9&lang=te&text='+e)
    .subscribe((res): any => {

      this.translatedText = res.text[0];

    }, (err: HttpErrorResponse): any => {
      console.log(err);
    })
  }
}
