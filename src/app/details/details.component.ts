import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  record: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    // Get the ID from the route parameters
    let getid:any = this.route.snapshot.paramMap.get('id');

    // Fetch the record from the service using the ID
    this.record = this.dataService.getRecordById(getid);
  }
}
