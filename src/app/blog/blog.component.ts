import { Component, OnInit } from '@angular/core';
import {Blog} from '../model/Blog';
import {BlogService} from '../service/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService: BlogService) { }
  blogs: Blog[];
  ngOnInit(): void {
    this.getAll();
    this.blogService.shouldRefresh.subscribe(result => {
    this.getAll();
    console.log(result);
    });
  }
  getAll(): void{
    this.blogService.getAll().subscribe((result) => {
      this.blogs = result;
    }, error => {
    });
  }

}
