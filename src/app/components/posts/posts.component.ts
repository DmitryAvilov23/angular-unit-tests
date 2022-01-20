import {Component, OnInit} from '@angular/core';
import {PostsService} from './posts.service';

@Component({
  template: `Posts component`,
  selector: 'app-posts'
})
export class PostsComponent implements OnInit {
  public posts: any[] = []
  public message: string = '';

  constructor(private _postsService: PostsService) {
  }

  ngOnInit(): void {
    this._postsService.fetch().subscribe(p => {
      this.posts = p
    })
  }

  add(title: string) {
    const post = { title };

    this._postsService.create(post).subscribe(() => {
      this.posts.push(post)
    });
  }

  delete(id: number) {
    if (window.confirm('Are you sure?')) {
      this._postsService.remove(id).subscribe()
    }
  }
}
