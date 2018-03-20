import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  template: `
  <div [ngClass]="{    'list-group-item-success': postIsLoved === true,
                       'list-group-item-danger': postIsLoved === false    }" >
    <h2 class="title">
      {{ postTitle }}
    </h2>
    <span class="date"> {{ postCreatedAt | date:'short' }} </span>
    <p>
      {{ postContent }}
    </p>
    <span class="loveItsCounter"> Nombre de LoveIts: {{ postLoveIts }} </span>
    <br>
    <button class="btn btn-success"  (click)="increaseLoveIts()"  >Love It! :)</button>
    <button class="btn btn-danger"   (click)="decreaseLoveIts()" >Don't Love It! :(</button>
  </div>
  `,
  styles: [
    `div{
      width: 65%;
      border-radius: 25px;
      padding: 25px;
      margin-bottom: 15px;
    }
    .title{
      display: inline-block;
    }
    .date{
      display: inline-block;
      float: right;
    }
  `]
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  postIsLoved : boolean;

  constructor() { }

  ngOnInit() {
  }

  checkLoveIts(){
    if(this.postLoveIts>0){
      this.postIsLoved = true;
    }
    else{
      this.postIsLoved = false;
    }
  }

  increaseLoveIts(){
    this.postLoveIts = this.postLoveIts +1;
    this.checkLoveIts();
  }

  decreaseLoveIts(){
    this.postLoveIts = this.postLoveIts -1;
    this.checkLoveIts();
  }



}
