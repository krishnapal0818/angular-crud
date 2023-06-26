import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  reactiveForm: any = FormGroup;
  submitted = false;

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.reactiveForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
  }
  get registerFormControl() {
    return this.reactiveForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.reactiveForm.valid) {
      this.dataService.createRecord(this.reactiveForm.value);
      this.router.navigate(['/']);
    }
  }
}
