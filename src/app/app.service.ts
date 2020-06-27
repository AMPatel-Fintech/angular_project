import { Injectable } from '@angular/core';
import { FormElement } from './modal';

@Injectable({
    providedIn: 'root'
})

export class formDisplayService{

  public newFORM : FormElement[] = [ {id:0, country: "India", currency: "Indian Rupee", Acode: "IND", Ncode: 254, status:"Active"}];

  public defaultId = 0;

  public EditFormData = {
    id: null,
    country:null,
    currency:null,
    Acode:null,
    Ncode:null,
    status:null
  };

  constructor(){}

  save(newformdata) {
    if(newformdata.id == null){
        newformdata.id = this.generateId();
         this.newFORM.push(newformdata);
          }else{
          for(var m in this.newFORM){
            if(this.newFORM[m].id == newformdata.id){
              this.newFORM[m] = newformdata;
            }
          }
        }
    } 
  
    generateId(){
        this.defaultId = this.defaultId+1;
         return this.defaultId;
    }

    getdetails(): FormElement[]{
        return this.newFORM;
    }

    editData(id){
      this.EditFormData = id;
    }
    
    getData(){
      return this.EditFormData;
    }

    removeData(item){
      console.log(item);
      this.newFORM.splice(item,1);
    }
}