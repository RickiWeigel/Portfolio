import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  http = inject(HttpClient);

  privacyPoliceChecked: boolean = false;
  formSubmitted: boolean = false;
  buttonText: string = 'Nachricht senden';
  emailSent: boolean = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

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

  post = {
    endPoint: 'https://ricki-weigel.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && this.checkValid()) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // alles hinzufügen
            ngForm.resetForm();
            this.clearForm();
            this.emailSentComplete();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
          },
        });
    }
  }

  onCheckboxChange(event: any) {
    if (event!.target.checked) {
      this.privacyPoliceChecked = true;
    } else {
      this.privacyPoliceChecked = false;
    }
  }

  setFocus(inputfield: string) {
    this.formSubmitted = false;
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
      this.contactData.name = (event.target as HTMLInputElement).value;
      this.nameValid = this.checkInputNameOrTextareaValid(
        this.contactData.name
      );
    }
    if (inputfield == 'email') {
      this.contactData.email = (event.target as HTMLInputElement).value;
      this.checkInputEmailValid();
    }
    if (inputfield == 'textarea') {
      this.contactData.message = (event.target as HTMLInputElement).value;
      this.textareaValid = this.checkInputNameOrTextareaValid(
        this.contactData.message
      );
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
    this.emailValid = this.regex.test(this.contactData.email);
  }

  checkValid() {
    if (
      this.nameValid &&
      this.emailValid &&
      this.textareaValid &&
      this.privacyPoliceChecked &&
      !this.emailSent
    ) {
      return true;
    } else {
      return false;
    }
  }

  clearForm() {
    this.privacyPoliceChecked = false;
    let checkbox: HTMLElement | null | any =
      document.getElementById('agree-checkbox');
    if (checkbox) {
      checkbox.checked = false;
    }
    this.removeBorderGreenFromAllInputs();
    this.resetValidVar();
    this.formSubmitted = true;
  }

  removeBorderGreenFromAllInputs() {
    const inputIds = ['name', 'email', 'message'];
    inputIds.forEach((inputId) => {
      const element = document.getElementById(inputId);
      if (element) {
        element.classList.remove('border-green');
      }
    });
  }

  resetValidVar() {
    this.nameActive = false;
    this.nameValid = false;
    this.emailActive = false;
    this.emailValid = false;
    this.textareaActive = false;
    this.textareaValid = false;
  }

  emailSentComplete() {
    this.emailSent = false;

    const btn: Element | any = document.querySelector('.email');

    btn.classList.add('email--loading');
    setTimeout(() => {
      btn.classList.remove('email--loading');
      btn.classList.add('email-send');
      this.buttonText = 'Nachricht gesendet :)';
    }, 2000);
  }
}
