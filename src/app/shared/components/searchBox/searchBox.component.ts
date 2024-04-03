import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',

  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent {
  @Input()
  public placeholder :string=''

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

searchBy(newTag:string){

 this.onValue.emit(newTag);

}
}

