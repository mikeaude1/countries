import { Component,  EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',

  templateUrl: './searchBox.component.html',
})
export class SearchBoxComponent implements OnInit, OnDestroy{


  private debouncer:Subject<string> = new Subject<string>();
  private debouncerSubscription?:Subscription;

  @Input()
  public placeholder :string=''

  @Input()
  public inicialValue :string=''

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription=this.debouncer
    .pipe(
      debounceTime(400)
      )
      .subscribe(value=>{
        this.onDebounce.emit(value);
      })
    }
    ngOnDestroy(): void {
      this.debouncerSubscription?.unsubscribe();
    }
    searchBy(newTag:string){

  this.onValue.emit(newTag);

  }
  onKeyPress( serchTerm:string){
    this.debouncer.next(serchTerm);
  }
}

