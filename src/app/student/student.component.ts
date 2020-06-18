import { ServerService } from './../server.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  studentForm: FormGroup;
  constructor(private fb: FormBuilder, private server: ServerService) {
    this.studentForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      course: this.fb.control('', Validators.required),
      phone: this.fb.control('', Validators.required),
    });
  }

  ngOnInit(): void {}
  addStudent() {
    this.server.createStudent(this.studentForm.value).subscribe((data) => {
      alert(data.message);

    }, (error) => {
      console.log(error);
    });
  }
}
