import React from 'react';
import './legend.scss'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Box from '@material-ui/core/Box';


const Legend = () => {
	return (
		<div class="container">
		<div class="row">
		<Box className = 'col1'>
		<div class="row">
			<div>Occupied</div>
			<Box className = 'occupied'></Box>
		</div>	
		</Box>
		<Box className = 'col2'>
		<div class="row">
			<div>Available</div>
			<Box className = 'available'></Box>
		</div>	
		</Box>
		<Box className = 'col3'>	
		<div class="row">
			<div>Selected</div>
			<Box className = 'selected'></Box>
		</div>	
		</Box>
		</div>
		</div>
	)
}

export default Legend