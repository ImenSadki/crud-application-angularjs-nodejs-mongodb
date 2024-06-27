/*import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css'],
  standalone: true,
 
  imports: [CommonModule, FormsModule] 
})
export class EmployeecrudComponent {
  name: string = "";
  address: string = "";
  phone: string = "";

  EmployeeArray : any[] = [];
  currentEmployeeID = " ";

  constructor(private http: HttpClient) {
    this.getAllEmplyee();
   }
   getAllEmplyee(){
    this.http.get("http://localhost:8000/user/getAll")
    .subscribe((resultData: any)=>
      {
        console.log(resultData);
        this.EmployeeArray=resultData.data;
      }
    
    )
   }
   

  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone
    };

    this.http.post("http://localhost:8000/usr/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Employee registered successfully");
      this.name = '';
      this.address = '';
      this.phone = '';
    });
  }
}

*/
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Ajout de CommonModule et FormsModule
})
export class EmployeecrudComponent {
  EmployeeArray: any[] = [];
  currentEmployeeID = " ";

  name: string = "";
  address: string = "";
  phone: string = "";

  

  constructor(private http: HttpClient) {
    this.getAllEmplyee();
  }

  getAllEmplyee() {
    this.http.get("http://localhost:8000/user/getAll")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.EmployeeArray = resultData.data;
      });
  }


  setUpdate(data: any) {

this.name= data.name;
this.address = data.address;
this.phone =data.phone; 

this.currentEmployeeID = data._id;
  }

UpdateRecords(){
  let bodyData ={
    "name" : this.name,
    "adress" : this.address,
    "phone" :this.phone
  };

this.http.patch("http://localhost:8000/user/update" + "/"+this.currentEmployeeID,bodyData).subscribe((resulData: any)=>{

console.log(resulData);
alert("Employee registred updated")
this.getAllEmplyee();
})

}
 
  setDelete(data: any) {
  
this.http.delete("http://localhost:8000/user/delete"+ "/" +data._id).subscribe((resultData: any )=>{
console.log(resultData);
alert("Employee deleted")
this.getAllEmplyee();


})

    }
  
  save(){
    if(this.currentEmployeeID == '')
      {
        this.register();

      }else
      {
        this.UpdateRecords();
      }
  }






  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    this.http.post("http://localhost:8000/user/create", bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert("Employee registered successfully");
      this.name = '';
      this.address = '';
      this.phone = '';
      this.getAllEmplyee();
    });
  }
}
