import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Project {
  name: string;
  desription: string;
  app?: string;
  github?: string;
  logo: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url: string = 'https://self-api.herokuapp.com/projects';

  constructor(private httpClient: HttpClient) { }

  getProjects() {
    return this.httpClient.get<Project[]>(this.url);
  }
}
