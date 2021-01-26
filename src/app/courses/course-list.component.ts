import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{
    filteredCourses: Course[] = [];
    
    _courses: Course[] = [];

    
    _filterBy: string; //variável fica somente nesse componente

//vai ser responsável por carregar o course service e fazer a injeção de dependencia
//vai fazer referência ao mesmo objeto que está elegível para fazer a injeção
constructor(private courseService: CourseService){ }

    ngOnInit(): void {
        this.retrieveAll();
        
    }

    retrieveAll(): void{
        this.courseService.retriveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;       
            },
            error:err => console.log('Error', err)
        })
    }

    deleteById(courseId:number): void{
        this.courseService.deleteById(courseId).subscribe({
            next: () => {
                console.log('Deletado');
                this.retrieveAll();
            },
            error: err => console.log('Error', err)
        })
    }

    set filter(value: string){
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }
}