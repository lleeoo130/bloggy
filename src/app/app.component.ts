import { Component } from '@angular/core';
import * as firebase from 'firebase';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    var config = {
      apiKey: "AIzaSyDkz3HZKGjE1MvQqKcXlpodwUrZCY7BhQI",
      authDomain: "bloggy-5e523.firebaseapp.com",
      databaseURL: "https://bloggy-5e523.firebaseio.com",
      projectId: "bloggy-5e523",
      storageBucket: "",
      messagingSenderId: "491676106333"
    };
    firebase.initializeApp(config);
  }
  
}
