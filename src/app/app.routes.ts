import {Routes, RouterModule} from '@angular/router';


import { AboutComponent,MainComponent,ItemComponent } from './components/index.paginas';


const app_routes:Routes = [
    {path:'',component: MainComponent},
    {path:'about',component: AboutComponent},
    {path:'item',component: ItemComponent},
    {path:'**',component: MainComponent}
    ];
    
export const app_routing = RouterModule.forRoot(app_routes,{useHash:true});
    