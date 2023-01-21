import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editedcontact',
  templateUrl: './editedcontact.component.html',
  styleUrls: ['./editedcontact.component.css']
})
export class EditedcontactComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    const routeid= this.route.snapshot.paramMap.get('id')
    console.log(routeid)
  }

}
