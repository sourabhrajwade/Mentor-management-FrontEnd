import { ServerService } from './../server.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css']
})
export class MentorComponent implements OnInit {
  mentorForm: FormGroup;
  constructor(private fb: FormBuilder, private server: ServerService) {
    this.mentorForm = this.fb.group({
      name: this.fb.control('', Validators.required),
      age: this.fb.control('', Validators.required),
      phone: fb.control('', Validators.required)
    });
   }

  ngOnInit(): void {
  }
  addMentor() {
    this.server.createMentor(this.mentorForm.value).subscribe((data) => {
      alert(data.message);

    }, (error) => {
      console.log(error);
    });
  }
}
