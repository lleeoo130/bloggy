import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { PostServiceService } from '../post-service.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  template: `
      <div class="row justify-content-md-center ">
        <div *ngFor="let post of posts; let i = index" class="list-group-item-{{ post.loved }}"   class="col-sm-12">
          
              <h2 class="title"> {{ post.title }}</h2>

              <span class="date"> {{ post.created_at | date:'short' }} </span>

              <p> {{ post.content }} </p>

              <span class="loveItsCounter"> Nombre de LoveIts: {{ post.loveIts }} </span><br>
              
              <button class="btn btn-success"  (click)="increaseLoveIts(i)"  >Love It! :)</button>
              <button class="btn btn-danger"   (click)="decreaseLoveIts(i)" >Don't Love It! :(</button>
              <button class="btn btn-warning float-right"   (click)="onRemove(post)" >Remove Post</button>
              
        </div>
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
    .list-group-item-danger,.list-group-item-warning,.list-group-item-success {
      border: 1px solid black;
    }
  `]
})
export class PostListItemComponent implements OnInit, OnDestroy {

  posts: Post[];
  postSubscription: Subscription;


  constructor(private postservice : PostServiceService,
              private router: Router) { }

  ngOnInit() {
    this.postSubscription = this.postservice.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postservice.getPosts();
    this.postservice.emitPosts();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }

  increaseLoveIts(index){
    this.postservice.posts[index].loveIts++;
    this.postIsNotLoved(index);
    this.postservice.savePosts();

    this.postservice.emitPosts();
    
  }

  decreaseLoveIts(index){
    this.postservice.posts[index].loveIts--;
    this.postIsNotLoved(index);
    this.postservice.savePosts();
    this.postservice.emitPosts();
  }

  postIsNotLoved(index){
    if(this.postservice.posts[index].loveIts>0){
      this.postservice.posts[index].loved = 'success';
    }
    else if(this.postservice.posts[index].loveIts == 0){
      this.postservice.posts[index].loved = 'warning';

    }
    else{
      this.postservice.posts[index].loved = 'danger';
    }
  }

  onRemove(post: Post){
    this.postservice.removePost(post);  
  }



}
