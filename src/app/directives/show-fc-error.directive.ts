import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, input, Optional, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

// Show From Control Error
@Directive({
  selector: '[appShowError]',
  standalone: true
})
export class ShowFcErrorDirective {

  @Input() appformControl? : any;
  @Input('error-id') errorid : string='';
  constructor(private el: ElementRef, 
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document
            ) { }

  @HostListener('keyup') onKeyDown() {
    this.checkErrorInFormControl()        
  } 

  checkErrorInFormControl(){
      if(this.appformControl instanceof FormControl)
      {             
        console.log(this.appformControl?.errors);
        if(this.appformControl?.errors &&
          this.appformControl.errors['required'] == true)
        {
           this.setErrorState('This field is required');
        }
        else if(this.appformControl?.errors &&
          this.appformControl.errors['minlength'])
        {
          this.setErrorState(`This field must be at least ${this.appformControl.errors['minlength'].requiredLength} character long`);
        }
        else if(this.appformControl?.errors &&
          this.appformControl.errors['maxlength'])
        {
          this.setErrorState(`This field should not exceed max length than ${this.appformControl.errors['maxlength'].requiredLength}`);
        }
        else if(this.appformControl?.errors &&
          this.appformControl.errors['email'] == true)
        {
          this.setErrorState(`Please enter valid email address`);
        }
        else if(this.appformControl?.errors &&
          this.appformControl.errors['mask'])
        {
          this.setErrorState(`Please enter valid format ${this.appformControl.errors['mask']['requiredMask']}`);
        }
        else{                          
          this.resetState();
        }
    }  
  }

  setErrorState(errorMsg:string){
    const errorElement = document.getElementById(this.errorid); 
    this.renderer.setStyle(this.el.nativeElement, 'borderColor', '#d8000c');
    this.renderer.setStyle(this.el.nativeElement, 'borderWidth', 'thin');
    if(errorElement) {             
      this.renderer.setProperty(errorElement,'textContent',errorMsg);       
    }
  }

  resetState(){
    const errorElement = document.getElementById(this.errorid); 
    this.renderer.removeStyle(this.el.nativeElement, 'borderColor');
    this.renderer.removeStyle(this.el.nativeElement, 'borderWidth');
    this.renderer.setProperty(errorElement,'textContent','');
  }

}
