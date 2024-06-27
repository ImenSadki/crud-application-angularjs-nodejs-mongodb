import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { routes } from './app.routes';
// import { EmployeecrudComponent } from './employeecrud/employeecrud.component';
import { TestComponent } from './test/test.component';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';
// import { EmployeecrudComponent } from './employeecrud/employeecrud.component';

@NgModule({
  declarations: [
    //   AppComponent,
    //  EmployeecrudComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
  
    HttpClientModule,
  
    RouterModule.forRoot(routes),

     AppComponent,
     EmployeecrudComponent,
    TestComponent,
    //normalemnt tekhdem lena zeda ama ma3rftech win lmouchkel hasilou
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
