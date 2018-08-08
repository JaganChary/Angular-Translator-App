import { Routes, RouterModule } from '@angular/router';
import { TranslateFormComponent } from './translate-form/translate-form.component';
import { NgModule } from '../../node_modules/@angular/core';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/translate',
        pathMatch: 'full'
    },
    {
        path: 'translate',
        component: TranslateFormComponent
    },
    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [

    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {

}