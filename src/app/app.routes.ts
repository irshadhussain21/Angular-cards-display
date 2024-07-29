import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { CardlistComponent } from './ui/cardlist/cardlist.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [


{
    path:'',component: HomeComponent
},
{
    path:'contact',component: ContactComponent
},
{
    path:'login',component: LoginComponent
    
},
{
    path:'cardlist',loadComponent: () => import('./ui/cardlist/cardlist.component').then((m) => m.CardlistComponent)
},
{
    path:'product-page/:id',loadComponent: () => import('./pages/single-product/single-product.component').then((m) => m.SingleProductComponent ) 
},
{
    path:'todo',loadComponent: () => import('./todo-app/todo/todo.component').then((m) => m.TodoComponent ) 
},
{
    path:'signup',loadComponent: () => import('./pages/signup/signup.component').then((m) => m.SignupComponent ) 
},




];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }

