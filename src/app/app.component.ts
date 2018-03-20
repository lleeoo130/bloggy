import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  
  posts = [
    {
      title : 'Premier Post: Bonjour à toi!',
      content: 'Lorem Ipsum Frerot',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : 'Deuxième Post: Bonjour à toie!',
      content: 'Lorem Ipsum Soeur',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title : 'Troisème Post: Bonjour à tous!',
      content: 'Lorem Ipsum tous!',
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
