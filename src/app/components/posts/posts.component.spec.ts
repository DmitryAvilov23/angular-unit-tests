import { EMPTY, of, throwError } from "rxjs";

import { PostsComponent } from "./posts.component"
import { PostsService } from "./posts.service";

describe('PostsComponent', () => {

  let component: PostsComponent;
  let service: PostsService;

  beforeEach(() => {
    service = new PostsService();
    component = new PostsComponent(service);
  });

  // NgOnInit and fetch
  it('should call fetch when ngOnInit', () => {
    const spy = spyOn(service, 'fetch').and.callFake(() => {
      return EMPTY;
    });

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });

  // Get Posts
  it('should get posts during ngOnInit', () => {
    const posts = [1, 2, 3, 4];

    spyOn(service, 'fetch').and.returnValue(of(posts));

    component.ngOnInit();

    expect(component.posts.length).toBe(posts.length);
  });

  // Add post
  it('should add new post', () => {
    const post = { title: 'test' };
    const spy = spyOn(service, 'create').and.returnValue(of(post));

    component.add('test');

    expect(spy).toHaveBeenCalled();
    expect(component.posts.includes(post)).toBeTruthy();
  });

  // Create post error
  it('should set message to error message', () => {
    const error = 'Error message';

    spyOn(service, 'create').and.returnValue(throwError(error));

    component.add('title');

    expect(component.message).toBe(error);
  });
})
