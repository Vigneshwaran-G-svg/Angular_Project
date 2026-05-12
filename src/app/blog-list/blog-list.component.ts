import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit {
   blogs: any[] = [];
 


   constructor(private blog_Services: BlogService, private router: Router){}
  ngOnInit(): void {
    this.blog_Services.getBlogs().subscribe((blogs) => {
      this.blogs = blogs;
      console.log(this.blogs);
    });
  }

 goHome() {
  this.router.navigate(['']);
}
}
