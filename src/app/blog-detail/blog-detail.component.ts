import { Component, OnInit } from '@angular/core';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Blog} from '../model/Blog';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: Blog;
  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.blogService.getById(id).subscribe(
      next => (this.blog = next),
      error => {
        console.log(error);
        this.blog = null;
      }
    );
  }

}
