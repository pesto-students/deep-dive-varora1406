const modalStyle = {
	position: 'fixed',
	margin: 'auto',
	left: '0',
	right: '0',
  top: '5%',
  padding: '2%',
  'max-width': '100%',
  'background-color': 'white',
  border: '1px solid grey',
  'border-radius': '0px',
 	'z-index': '999'
}

const xs = {
  width: '30%'
}

const sm = {
  width: '45%'
}

const md = {
  width: '60%'
}

const lg = {
  width: '75%'
}

const xl = {
  width: '90%'
}

const modalSize = { xs, sm, md, lg, xl };

export { 
  modalStyle,
  modalSize
}