import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AllocationSystemComponent } from './allocation-system/allocation-system.component';

export const ROUTES: Routes = [
    {
        path: '', component: LayoutComponent,

        children: [
            { path: '', component: WelcomeComponent },
            { path: 'welcome', component: WelcomeComponent },
            { path: 'allocationsys', component: AllocationSystemComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
