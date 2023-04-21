import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  UserArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
  username: string ="";
  course: string ="";
  currentUserId = "";
  constructor(private http: HttpClient )
  {
    this.getAllUsers();
  }
 
  ngOnInit(): void {
  }
 
  getAllUsers()
  {
    this.http.get("https://localhost:44317/api/User/GetUsers")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true; 
        this.UserArray = resultData;
    });
  }
 
  register()
  { 
    let bodyData = {
      "username" : this.username,
      "course" : this.course,
    
    };
 
    this.http.post("https://localhost:44317/api/User/AddUser",bodyData).subscribe((resultData: any)=>
    { 
        alert("User Registered Successfully")
        this.getAllUsers(); 
    });
  }
 
  setUpdate(data: any)
  {
   this.username = data.username;
   this.course = data.course; 
   this.currentUserId = data.id;
  }
 
  UpdateRecords()
  {
    let bodyData =
    {
      "username" : this.username,
      "course" : this.course,
    };
    
    this.http.patch("https://localhost:44317/api/User/UpdateUser"+ "/"+ this.currentUserId,bodyData).subscribe((resultData: any)=>
    { 
        alert("User Registered Updateddd")
        this.getAllUsers();
      
    });
  }
  save()
  {
    if(this.currentUserId == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
 
  setDelete(data: any)
  {
    this.http.delete("https://localhost:44317/api/User/DeleteUser"+ "/"+ data.id).subscribe((resultData: any)=>
    { 
        alert("User Deleted")
        this.getAllUsers();
    });
  }

}
