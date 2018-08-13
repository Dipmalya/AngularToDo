import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';
import { todo } from '../todo-demo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public todoS:TodosService) { }
  public todos:todo[] = [];
  public id;
  public name;
  public country;
  public strObj:string;
  ngOnInit() {
     this.todoS.getTodos()
     .subscribe(data=> this.todos=data);
  }

  public postData(){
    this.strObj = '{"id":'+this.id+',"name":'+this.name+',"country":'+this.country+'}';
    console.log(this.strObj);
  }

}
