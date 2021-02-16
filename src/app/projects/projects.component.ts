import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos: [];

  constructor(private reposService: ProjectsService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  // Chama o serviço para obtém todos os carros
  getRepos() {
    this.reposService.getProjects().subscribe((repos: []) => {
      this.repos = repos;
    });
  }

  listRepos() {
    console.log(this.repos);
  }
}
