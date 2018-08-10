import { Routes, RouterModule } from '@angular/router';
import { TranslateFormComponent } from './translate-form/translate-form.component';
import { NgModule } from '../../node_modules/@angular/core';
import { TranslateOutputComponent } from './translate-output/translate-output.component';

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
    {
        path: 'output',
        component: TranslateOutputComponent
    }
    
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