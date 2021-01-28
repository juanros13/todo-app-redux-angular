import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

    
  completado: Boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }
  toogleAll(){
    // console.log('asdasd');
    this.completado = !this.completado;
    console.log(this.completado);
    this.store.dispatch(actions.toggleAll({completado:this.completado})); 
  }
}
