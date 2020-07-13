import { Component, OnInit } from '@angular/core';
import {BlogService} from '../service/blog.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  blogId: number;
  isShowSuccess = false;
  message: string;

  blogform: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl('')
    }
  );

  constructor(private blogService: BlogService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.blogId = params.id;
      this.blogService.getById(this.blogId).subscribe(value => {
        this.blogform.setValue(value);
      });
    });
  }

  onSubmit(): void{
    if (this.blogId){
      this.blogService.updateBlog(this.blogform.value).subscribe(result => {
        this.isShowSuccess = true;
        this.message = 'Updated blog infomation';
      });
    } else {
        this.isShowSuccess = false;
        this.message = 'Cant update blog information!';
      }
    }
}
