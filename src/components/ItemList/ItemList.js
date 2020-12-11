import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ thingToDo }) => (
	<ul>
		{thingToDo.map(item => <li key={item.task}><Item task={item.task} done={item.done}/></li>)}
	</ul>
);

export default ItemList;