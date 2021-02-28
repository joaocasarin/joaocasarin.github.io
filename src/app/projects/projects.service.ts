import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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

  url:string = 'https://self-api.herokuapp.com/projects';

  constructor(private httpClient: HttpClient) { }

  // Obtem todos os carros
  getProjects() : Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url).pipe(retry(2), catchError(this.handleError));
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
