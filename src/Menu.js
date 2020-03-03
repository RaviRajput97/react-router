/*in the below code we are importing react so that we can use the JSX*/
import React from 'react';
import './Menustyle.css'; //code to import css
import {Link} from 'react-router-dom'; //importing navigation component

/*in the below line we create  s functional component*/
const Menu = () => {
	return(
		<div className="Menustyle">
			<ul>
				<li> <Link to="/">Home </Link></li>
				<li> <Link to="About"> About </Link></li>
				<li> <Link to="Contact"> Contact </Link></li>
			</ul>
		</div>
	)
} 

/*in the below code we are exporting the menu component and default (react) component to index.js*/
export default Menu;

/*The link tag is used instead of ancar tag and it will redirect to a perticular path*/