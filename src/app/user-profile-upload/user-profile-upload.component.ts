import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-profile-upload',
  templateUrl: './user-profile-upload.component.html',
  styleUrls: ['./user-profile-upload.component.css']
})
export class UserProfileUploadComponent {
  profileForm!: FormGroup
  formData!: FormData;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    this.buildForm();
  }

  buildForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ['Sam'],//add validator as required or not. 
      lastName: 'L',
      title: 'Engineer',
      profileImage: null // file input will be captured here
    });
  }

  onSubmit() {
    //do validation here
    if (this.profileForm.valid) {
      this.formData.append('firstName', this.profileForm.value.firstName);
      this.formData.append('lastName', this.profileForm.value.lastName);
      this.formData.append('title', this.profileForm.value.title);
    }

    //from here we should call service and service should call web api. 
    //for simplicity/demo purpose we will make web api call from here
    this.httpClient.post('https://localhost:7064/api/Experiment/upload', this.formData)
      .subscribe(response => {
        console.log('Upload successful:');
        alert('Upload successful' );
      });


  }

  onFileChange(data: any) {
    this.formData = new FormData();
    const files = data.target.files as File[];
    Array.from(files).forEach(element => {
      this.formData.append('profileImage', element); //name should match while we send file to web api 
    });

  }


}
