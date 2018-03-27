import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from './models/post.model';
import * as firebase from 'firebase';

@Injectable()
export class PostServiceService {

  posts : Post[] = [];

  postSubject = new Subject<Post[]>();

  noPosts: boolean = true;

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }
  
  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (bookEl) => {
        if(bookEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

}
