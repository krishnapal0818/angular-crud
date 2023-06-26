import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { TableComponent } from './table/table.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path: '', component: TableComponent},
  {path: 'details/:id', component: DetailsComponent},
  { path: 'create-record', component: CreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
