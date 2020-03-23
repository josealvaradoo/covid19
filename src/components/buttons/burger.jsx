import React from 'react'
import Button from './button';
import Icon from '../icons/icon';

const BurgerMenu = ({onClick}) => (
	<Button onClick={onClick} ghost><Icon icon="bars" size={2} /></Button>
);

export default BurgerMenu