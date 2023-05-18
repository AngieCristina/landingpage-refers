import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  dniNumber: string | undefined;
  public isRegisterDataVisible: boolean = true;

  checkDni(value: string) {
    this.dniNumber = value.trim();
  }
  public ingresar(): void {
    this.isRegisterDataVisible = false;
  }

}
