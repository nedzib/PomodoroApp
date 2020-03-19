import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";
import { DataService } from 'app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage {

  constructor(private PickerController: PickerController, private dataService: DataService, private router: Router) { }

  public workTime:  number= 25;
  public breakTime: number= 5;

  public task1: string="";
  public task2: string="";
  public task3: string="";
  public task4: string="";

  data: any[];

  async openPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text:'Ok',
          handler:(value:any) => {
            this.workTime=value.WTime.value;
            this.breakTime=value.BTime.value;
          }
        }
      ],
      columns:[
        {name:'WTime',
        options: [
          {text: '20', value: 20},
          {text: '25', value: 25},
          {text: '30', value: 30},
        ]},
        {name:'BTime',
        options: [
          {text: '5', value: 5},
          {text: '7', value: 7},
          {text: '10', value: 10},
        ]}
      ]
    };

    let picker = await this.PickerController.create(options);
    picker.present()
  }

  sendData(){
    this.data = [{task1: this.task1,task2: this.task2,task3: this.task3,task4: this.task4,work: this.workTime,break: this.breakTime}];
    this.dataService.setData(this.data);
    this.router.navigateByUrl('/counter/1');
  }


}