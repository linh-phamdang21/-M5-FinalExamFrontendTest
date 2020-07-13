import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Blog} from '../model/Blog';

const apiUrl = 'http://localhost:8080/api/blogs';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  shouldRefresh = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Blog[]> {
    return this.httpClient.get<Blog[]>(apiUrl);
  }
  getById(id: number): Observable<Blog>{
    return this.httpClient.get<Blog>(`${apiUrl}/${id}`);
  }
  createBlog(blog: Blog): Observable<Blog>{
    return this.httpClient.post<Blog>(apiUrl, blog);
  }
  updateBlog(blog: Blog): Observable<Blog>{
    return this.httpClient.put<Blog>(apiUrl, blog);
  }
  deleteBlog(id: number): Observable<any>{
    return this.httpClient.delete(`${apiUrl}/${id}`);
  }
}
