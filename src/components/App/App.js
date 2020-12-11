import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const App = () => {
	const thingToDo = [
		{
			task: 'Сдать урок по React',
			done: false
		},
		{
			task: 'Прочитать книгу',
			done: false
		},
		{
			task: 'Посмотреть фильм',
			done: true
		}
	];
	return (
		<div className={styles.wrap}>
	    <h1 className={styles.title}>Мои списки дел:</h1>
	    <InputItem />
	    <ItemList thingToDo = {thingToDo} />
	    <Footer count = {3} />
		</div>
	);
};

export default App;