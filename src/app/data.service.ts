import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', address: '123 Street, City' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '9876543210', address: '456 Avenue, Town' },
    // Other hardcoded data
  ];

  getData() {
    return this.data;
  }

  createRecord(record: any) {
    // Generate a unique ID for the new record
    const id = this.data.length + 1;
    record.id = id;

    // Add the new record to the data array
    this.data.push(record);
  }

  deleteRecord(id: number) {
    // Find the index of the record with the provided ID
    const index = this.data.findIndex(record => record.id === id);

    // Remove the record from the data array
    if (index !== -1) {
      this.data.splice(index, 1);
    }
  }

  getRecordById(id: any) {
    // Find the record with the provided ID
    // debugger
    return this.data.find(record => record.id == id);
  }

  searchByEmail(email: any) {
    console.log("email",email);
    
    // Filter the data array by the provided email address
    return this.data.filter(record => record.email.toLowerCase().includes(email.toLowerCase()));
  }
}
