import { EngenhariaComponent } from './app/engenharia/engenharia.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './app/about-me/about-me.component';
import { AppComponent } from './app/app.component';
import { ArquiteturaComponent } from './app/arquitetura/arquitetura.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'engenharia', component: EngenhariaComponent },
  { path: 'arquitetura', component: ArquiteturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
