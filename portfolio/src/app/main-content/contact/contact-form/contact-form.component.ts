import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  privacyPoliceChecked: boolean = false;

  nameInput: string = '';
  nameActive: boolean = false;
  nameValid: boolean = false;

  emailInput: string = '';
  emailActive: boolean = false;
  emailValid: boolean = false;

  textareaInput: string = '';
  textareaActive: boolean = false;
  textareaValid: boolean = false;

  formValid: boolean = false;

  regex = new RegExp(
    '^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$'
  );

  onCheckboxChange(event: any) {
    if (event!.target.checked) {
      this.privacyPoliceChecked = true;
    } else {
      this.privacyPoliceChecked = false;
    }
  }

  setFocus(inputfield: string) {
    if (inputfield == 'name') this.nameActive = true;
    if (inputfield == 'email') this.emailActive = true;
    if (inputfield == 'textarea') this.textareaActive = true;
  }

  errorMessage(inputId: string) {
    if (inputId == 'emailInput') {
      return 'please enter a valid email address';
    } else if (inputId == 'nameInput') {
      return 'Your name is required';
    } else if (inputId == 'textareaInput') {
      return 'Your message is empty';
    } else return '';
  }

  onKey(event: KeyboardEvent, inputfield: string) {
    if (inputfield == 'name') {
      this.nameInput = (event.target as HTMLInputElement).value;
      this.nameValid = this.checkInputNameOrTextareaValid(this.nameInput);
    }
    if (inputfield == 'email') {
      this.emailInput = (event.target as HTMLInputElement).value;
      this.checkInputEmailValid();
    }
    if (inputfield == 'textarea') {
      this.textareaInput = (event.target as HTMLInputElement).value;
      this.textareaValid = this.checkInputNameOrTextareaValid(this.textareaInput);
    }
  }

  checkInputNameOrTextareaValid(inputVar: string) {
    if (inputVar.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  checkInputEmailValid() {
    this.emailValid = this.regex.test(this.emailInput);
  }

  checkFormValid() {
    if (this.nameValid && this.emailValid && this.textareaValid && this.privacyPoliceChecked) {
      return true;
    } else {
      return false;
    }
  }
}
