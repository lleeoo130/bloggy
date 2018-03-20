import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  template: `
    
    <app-post-list-item [postTitle]="postTitle"
                        [postContent]="postContent"
                        [postLoveIts]="postLoveIts"
                        [postCreatedAt]="postCreatedAt">
    
    </app-post-list-item>

  `,
  styles: [`
  
  `]
})
export class PostListComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postCreatedAt: Date;

  constructor() { }

  ngOnInit() {
  }

}
