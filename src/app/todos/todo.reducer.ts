import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { borrar, crear, editar, limpiarCompletados, toggle, toggleAll } from './todo.actions';

 
export const initialState:Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje ironman'),
    new Todo('Rober escudo del capitan america')
];
const _todoReducer = createReducer(
    initialState,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    completado: !todo.completado
                }
            }else{
                return todo;
            }
        })
    }),
    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if(todo.id === id){
                return {
                    ...todo,
                    texto: texto
                }
            }else{
                return todo;
            }
        })
    }),
    on(toggleAll, (state, { completado }) => state.map(
        todo =>  (
            {
                ...todo,
                completado: completado
            }
        )
    )),
    on(borrar, (state, { id }) => state.filter(todo =>todo.id !== id)),
    on(limpiarCompletados, (state) => state.filter(
        todo =>  !todo.completado
    )),
);
export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

