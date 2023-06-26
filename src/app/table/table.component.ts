import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  records: any[];

  constructor(private dataService: DataService) {
    // Fetch the data from the service
    this.records = this.dataService.getData();
  }

  createRecord() {
    // Create a new record
    const newRecord = {
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '9876543210',
      address: '789 Road, Village'
    };

    this.dataService.createRecord(newRecord);
  }

  deleteRecord(id: number) {
    // Delete the record with the provided ID
    this.dataService.deleteRecord(id);
  }
  searchByEmail(event:any){
  
    console.log(event.target.value);
    if(event.target.value){
      const getdata =     this.dataService.searchByEmail(event.target.value);
      console.log("sgetdata",getdata);
      this.records = getdata
    }else{
      this.records = this.dataService.getData();

    }
    


  }
}
