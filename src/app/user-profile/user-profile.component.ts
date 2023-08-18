import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  profileForm!: FormGroup;
  formData!:FormData;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.profileForm = this.formBuilder.group({
      firstName: 'John',
      lastName: 'H',
      title: 'Engineer',
      profileImage: null, // File input will be captured here
    });
  }

  onSubmit() {    
    this.formData.append('firstName', this.profileForm.value.firstName);
    this.formData.append('lastName', this.profileForm.value.lastName);
    this.formData.append('title', this.profileForm.value.title);
    this.formData.append('profileImage', this.profileForm.value.profileImage);
  
    this.httpClient.post('https://localhost:7064/api/Experiment/upload', this.formData)
      .subscribe(response => {
        console.log('Upload successful:', response);
      });
  }

  onFileChange(data: any) {
    this.formData = new FormData();
    const files = data.target.files as File[];
    Array.from(files).forEach(element => {
      this.formData.append('profileImage',element);
    });
    // if (event.target.files.length > 0) {
    //   this.profileForm.patchValue({
    //     profileImage: event.target.files[0]
    //   });
    // }
  }
  
}
