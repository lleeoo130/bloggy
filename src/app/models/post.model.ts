export class Post {
    loved: string;

    constructor(public title: string,public content: string, public loveIts: number,public created_at: Object) {
    }
  }