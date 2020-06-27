import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { formDisplayService } from './app.service';
import { MatPaginator } from '@angular/material';
import { AppComponentDailog } from './appdailog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormElement } from './modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public FORM_DATA = {
    id: null,
    country:null,
    currency:null,
    Acode:null,
    Ncode:null,
    status:null
  };
  
  displaydetail: FormElement[];

constructor(public dialog: MatDialog, private _service: formDisplayService) {}

ngOnInit(){
  this.displaydetail = this._service.getdetails();
}


 public editItem(id){
   this._service.editData(id);
  this.openDailog();
}

public openForm(){
  this.openDailog();
}

openDailog():void{
  const dialogOpen = this.dialog.open(AppComponentDailog,{
    width: '400px', height: '500px'
  });
}

public removeItem(item){
  let x = confirm("Are you sure, want to delete Item?");
  if(x==true){
    this._service.removeData(item);  
  }
  
}
}


