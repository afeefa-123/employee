import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.data=JSON.parse(params['data']);  

    })
  }

}
