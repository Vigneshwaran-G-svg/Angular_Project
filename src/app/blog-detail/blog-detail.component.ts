import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements  OnInit {
  
    blog: any;

  
  
  /**
   *
   */
  constructor(private route: ActivatedRoute, private blog_Services: BlogService, private router: Router) {
  
    
  }
  ngOnInit(): void {
     const id = this.route.snapshot.params['id'];
    this.blog_Services.getBlogs().subscribe(data => {
      this.blog = data.find(b => b.id == id);
    });
  }
   goHome() {
  this.router.navigate(['/blog']);
}
  }



