import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import {User} from '../../Shared/userform';
import {SendformService} from '../../sendform.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  userForm: FormGroup;
  user: User = new User();
  constructor(private fb: FormBuilder, private service:SendformService) { }

 formerror = {
   'name' : '',
   'mail':''
 };
 validationMessages = {
  'name': {
      'required': 'Required field.',
      'minlength': 'Min length 4 symbols.',
      'maxlength': 'Max length 15 symbols.'
  },
  'mail': {
      'required': 'Required field.',
      'pattern': 'Wrong format email.'
  },
 };
  

  buildForm() {
    this.userForm = this.fb.group({
        'name': [this.user.name, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(15)
        ]],
        'mail': [this.user.mail, [
            Validators.required,
            Validators.pattern('[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')
        ]]
    });
    this.userForm.valueChanges
    .subscribe(data => this.onValueChange(data));

this.onValueChange();
}

onValueChange(data?: any) {
if (!this.userForm) return;
const form = this.userForm;

for (const field in this.formerror) {
    this.formerror[field] = '';
    const control = form.get(field);

    if (control && control.dirty && !control.valid) {
        const message = this.validationMessages[field];
        for (const key in control.errors) {
            this.formerror[field] += message[key] + '' ;
        }
    }
}
}

onSubmit() {
console.log('submitted');
console.log(this.userForm.value);
this.service.addUser(this.userForm.value);
}

 ngOnInit() {
  this.buildForm();
}

}
