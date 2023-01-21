import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder,private router:Router,private route:ActivatedRoute){ }
  submit=false
  employeedetailsForm=this.fb.group({
    Name:['',Validators.required],
    Address:['',Validators.required],
    Dob:['',Validators.required],
    Role:this.fb.group({
      admin:[''],
      manager:[''],
      HR:[''],
      Developer:['']


    }),
    Gender:['',Validators.required]

 })
  title = 'angular14';
  get f(){
    return this.employeedetailsForm.controls;
  }
  onsubmit(){
    let data:any=this.employeedetailsForm.value;
    this.submit=true
    console.log('clicked')
    console.log('f',this.f)
    this.router.navigate(['./login'],{
      queryParams:{data:JSON.stringify(data)}
    })
   

  }
  
}
