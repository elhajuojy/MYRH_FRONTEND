import { Component } from '@angular/core';


@Component({
  selector: 'company-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.css']
})
export class CodeValidationComponent {

  handleCodeVerification(event:any) {
    console.log(event.target.value)
  }


}
