import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs/Subscription';
import { PostServiceService } from '../post-service.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-post-list',
  template: `
  
    <app-post-list-item></app-post-list-item>

  `,
  styles: [`
  
  `]
})
export class PostListComponent implements OnInit, OnDestroy {

  private posts: Post[];
  postSubscription: Subscription;


  constructor(private postservice: PostServiceService ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  

}
