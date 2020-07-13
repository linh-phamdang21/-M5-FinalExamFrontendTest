import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  blogId: number;
  isShowSuccess = false;
  message: string;

  blogform: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
  });

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params.id;
      this.blogService.getById(this.blogId).subscribe(result => {
        this.blogform.setValue(result);
      });
    });
  }
  onSubmit(): void{
    if (!this.blogId){
      this.blogService.createBlog(this.blogform.value).subscribe(result => {
        this.isShowSuccess = true;
        this.message = 'Created new blog!';
        this.blogService.shouldRefresh.next('Do sth');
      });
    } else {
      this.isShowSuccess = false;
      this.message = 'Cant create new blog!';
    }
  }
}





