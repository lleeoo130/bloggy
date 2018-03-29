import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../models/post.model';
import { PostServiceService } from '../post-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {


  postForm : FormGroup;

  constructor(private formBuilder: FormBuilder,
              private postService: PostServiceService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.formBuilder.group({
      title : ['', Validators.required],
      content: ['', Validators.required],
      loveIts : '',
      created_at : '',
    }
    );
  }


  onSubmitForm() {
    const formValue = this.postForm.value;
    const newPost = new Post(
      formValue['title'],
      this.postForm.value['content'],
      0,
      new Date()
    );
    console.log(newPost);
    this.postService.addPost(newPost);
    this.router.navigate(['/posts']);
  }

}
