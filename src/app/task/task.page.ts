import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage {

  constructor(private PickerController: PickerController) { }

  breakTimes:  number[] = [5,7,10];

  workTime:  number= 25;
  breakTime: number= 5;

  task1: string="";
  task2: string="";
  task3: string="";
  task4: string="";


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
            console.log(value.WTime.value);
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

}