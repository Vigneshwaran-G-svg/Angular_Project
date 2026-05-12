import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }
    getBlogs() {
    // return this.http.get<any[]>('assets/blogs.json');
        return this.http.get<any[]>('assets/blog.json');

  }
}
