import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalComponent } from './technical/technical.component';
import { SendComponent } from './send/send.component';


const routes: Routes = [
{path:'',redirectTo:'technical',pathMatch:'full'},
{path:'technical',component:TechnicalComponent},
{path:'send',component:SendComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
