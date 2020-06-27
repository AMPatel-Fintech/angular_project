import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { formDisplayService } from './app.service';
import { FormElement } from './modal';

@Component({
    selector: 'app-root-dailog',
    templateUrl: './appdailog.component.html'
  })
  
  export class AppComponentDailog{
    
    public countries = ["India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "France", "Germany", "Italy", 
    "Malaysia", "Maldives", "Nepal", "New Zealand", "Philippines"];

    newFormData: FormElement[]
    
    public SaveData = {
      id: null,
      country:null,
      currency:null,
      Acode:null,
      Ncode:null,
      status:null
    };

    updateId: any;

    NcodePattern = "^[0-9]*$";
    AcodePattern = '[A-Z]+';
  
    constructor( public dialogOpen: MatDialogRef<AppComponentDailog>,
      @Inject(MAT_DIALOG_DATA) public data: FormElement,
      private _service: formDisplayService) {}
    
    ngOnInit(){
        this.newFormData = this._service.getdetails();
        this.updateId = this._service.getData();
       for(var m in this.newFormData){
          if(this.newFormData[m].id == this.updateId){
            this.SaveData.id = this.newFormData[m].id;
            this.SaveData.country =this.newFormData[m].country;
            this.SaveData.currency = this.newFormData[m].currency;
            this.SaveData.Acode = this.newFormData[m].Acode;
            this.SaveData.Ncode = this.newFormData[m].Ncode;
            this.SaveData.status = this.newFormData[m].status;     
          }
        } 
      }
      
      savedata(form: NgForm):void{
        const newformdata: FormElement = Object.assign({}, this.SaveData);
        this._service.save(newformdata);
        this.dialogOpen.close();
      }

      closeBox(form: NgForm){
        form.reset();
        this.dialogOpen.close();
      }
  }

  