import React from 'react';
import { storiesOf } from '@storybook/react';

import TaskList from '../components/TaskList';
import { task, actions } from './Task.stories';

export const defaultTasks = [
    { ...task, id: '1', title: 'Task 1' },
    { ...task, id: '2', title: 'Task 2' },
    { ...task, id: '3', title: 'Task 3' },
    { ...task, id: '4', title: 'Task 4' },
    { ...task, id: '5', title: 'Task 5' },
    { ...task, id: '6', title: 'Task 6' },
];

export const withPinnedTasks = defaultTasks.map(elem => elem.id === '6' ? { ...elem, state: 'TASK_PINNED' } : elem)

storiesOf('Components/compuesto/TaskList', module)
    .addDecorator((story) => <div style={{ padding: '3rem' }}>{story()}</div>)
    .add('default', () => <TaskList tasks={defaultTasks} {...actions} />)
    .add('withPinnedTasks', () => <TaskList tasks={withPinnedTasks} {...actions} />)
    .add('loading', () => <TaskList loading tasks={[]} {...actions} />)
    .add('empty', () => <TaskList tasks={[]} {...actions} />);

/*     
addDecorator() nos permite añadir algún "contexto" al renderizado de cada tarea. 
En este caso añadimos relleno alrededor de la lista para que sea más fácil de verificar visualmente.

Los Decoradores son una forma de proporcionar envoltorios arbitrarios a las historias. 
En este caso estamos usando un decorador para añadir estilo. 
También se pueden utilizar para envolver historias en "proveedores", es decir, componentes de la librería que establecen el contexto de React. */