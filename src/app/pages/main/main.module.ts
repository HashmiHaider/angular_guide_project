import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material_module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const login_routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [],
  },
];
@NgModule({
  declarations: [MainComponent, TopBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(login_routes),
  ],
  providers: [],
})
export class MainModule {}
