import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React;

const style = {
	backgroundColor : 'orange',
	color : 'white',
	fontFamily : 'verdana'
}

render(
	<SkiDayCount />,
	document.getElementById('react-container')
)