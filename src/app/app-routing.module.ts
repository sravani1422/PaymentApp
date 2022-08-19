import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SenderComponent } from './sender/sender.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
            {
              path:'home',
              component:HomepageComponent,
            },
            {
              path: 'transfer', 
              component: SenderComponent,
            },
            {
              path: 'transaction', 
              component:TransactionComponent 
            },
            {path:'',component:LoginComponent},
           {path:'', redirectTo:'home', pathMatch:'full'},
        ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
