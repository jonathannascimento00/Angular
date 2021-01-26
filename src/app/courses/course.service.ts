import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './course';

//torna a classe possível para a injeção de dependencia
@Injectable({
    providedIn: 'root' //carregado na raiz da aplicação
})
export class CourseService{
    private coursesUrl: string = 'http://localhost:3100/api/courses';

    constructor(private httpClient: HttpClient) { }

    retriveAll(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    retrieveById(id: number): Observable<Course>{
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`)
    }

    save(course: Course): Observable<Course>{
        if(course.id){
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        }else{
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }

    deleteById(id: number): Observable<any>{
        return this.httpClient.delete<any>(`${this.coursesUrl}/${id}`);
    }
}

var COURSES: Course[] = [
    
    {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '',
        price: 99.9,
        code: 'XPS-8796',
        description: 'Curso sobre mexer com formulário no Angular',
        duration: 120,
        rating: 4.4,
        release: 'November 4, 2020'
    },
    {
        id: 2,
        name: 'HTTP',
        imageUrl: '',
        price: 10.5,
        code: 'HTS-5492',
        description: 'Cursinho de HTTP básicão',
        duration: 50,
        rating: 4.8,
        release: 'July 6, 2010'
    }
]