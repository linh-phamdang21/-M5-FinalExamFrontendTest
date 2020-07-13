import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../service/blog.service';
import {Blog} from '../model/Blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: Blog;
  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
  }

  onDelete(id: number): void{
    this.blogService.deleteBlog(id).subscribe(() => {
      this.blogService.shouldRefresh.next();
    });
  }
}
