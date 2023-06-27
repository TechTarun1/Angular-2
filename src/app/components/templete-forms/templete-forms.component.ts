import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templete-forms',
  templateUrl: './templete-forms.component.html',
  styleUrls: ['./templete-forms.component.css']
})
export class TempleteFormsComponent {
  // formData = {
  //   name: '',
  //   email: '',
  //   message: ''
  // };

  @ViewChild('myForm', { static: true }) myForm: any

  onSubmit = (data: any) => {
    alert('data'+JSON.stringify(data.value))
    //To reset form
    //this.myForm.reset()
  }
}
