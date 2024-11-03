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
  constructor(private el: ElementRef, 
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: Document
            ) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseenter');    
    
    if(this.appformControl instanceof FormControl){
      console.log(this.appformControl);
      console.log(this.appformControl.errors);

      //const fragment = document.createDocumentFragment();
      const span = document.createElement("span")       

        if(this.appformControl?.errors &&
           this.appformControl.errors['required'] == true)
        {
          span.textContent = "This field is required";
        }

      this.renderer.setStyle(this.el.nativeElement, 'borderColor', '#d8000c');
      this.renderer.setStyle(this.el.nativeElement, 'borderWidth', 'thin');
      //this.renderer.appendChild(this.el.nativeElement,span);
      console.log(this.renderer.nextSibling(this.el.nativeElement));
      console.log(this.renderer.parentNode(this.el.nativeElement));
      //this.renderer.insertBefore()
      //this.renderer.insertBefore(this.el.nativeElement,span,this.el.nativeElement);
      //<span style="color: #d8000c">Please choose a username.</span>

      // const child = this.document.createElement('<h1>hello</h1>');
      // this.renderer.appendChild(this.el.nativeElement, child);
    }    
    //this.renderer.setStyle(this.el.nativeElement, 'color', 'purple');
    
  } 


}
