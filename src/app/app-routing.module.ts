import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { ColorComponent } from './components/color/color.component';
import { FirstComponent } from './components/first/first.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { DetailCvComponent } from './cv/detail-cv/detail-cv.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './components/login/login.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'cv', component: CvComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'color', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'word', component: NgstyleComponent },
  { path: 'cv/add', component: AddPersonneComponent, canActivate: [AuthGuard] },
  { path: 'cv/:id', component: DetailCvComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
