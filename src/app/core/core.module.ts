import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Error404Component } from './component/404/error-404.component';
import { NavBarComponent } from './component/navbar/navbar.component';

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
        ],
    exports: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                //não encontrou a página
                path: '**', component: Error404Component
              }
        ])
    ]
})
export class CoreModule{

}