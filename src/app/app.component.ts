import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { EmployeecrudComponent } from './employeecrud/employeecrud.component';
import { TestComponent } from './test/test.component';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';

@Component({  selector: 'app-root',//lweh tbadel fiha  ??? hedhi m3ach tbadelha
  templateUrl: './app.component.html',  styleUrls: ['./app.component.css'],
  standalone:true,

  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TestComponent,
     EmployeecrudComponent
  ]
})
export class AppComponent {
  title = 'front-end';
}
