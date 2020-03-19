import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit {

  data: any;
  taskNumber = 0;
  notify: string;

  workTime:  number;
  breakTime: number;

  configWork = {
    leftTime: 1500,
    format: 'm:s',
  };

  configBreak = {
    leftTime: 300,
    format: 'm:s',
  };


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.data['special']){
      this.data = this.route.snapshot.data['special'];
    }
    console.log(this.data);
    this.workTime  = this.data[0].work;
    this.breakTime = this.data[0].break;

    if(this.data[0].task1==""){this.data[0].task1="Task 1";}
    if(this.data[0].task2==""){this.data[0].task2="Task 2";}
    if(this.data[0].task3==""){this.data[0].task3="Task 3";}
    if(this.data[0].task4==""){this.data[0].task4="Task 4";}

    this.configWork = {
      leftTime: (this.workTime-15),
      format: 'm:s',
    };

    this.configBreak = {
      leftTime: (this.breakTime),
      format: 'm:s',
    };
  }

  handleEvent(e: CountdownEvent){
    this.notify = `${e.status}`;
    if (this.notify == '3'){
      this.taskNumber++;
      if (this.taskNumber==7){
        this.taskNumber=0;
        this.router.navigateByUrl('/end');
      }
    }
  }


}
