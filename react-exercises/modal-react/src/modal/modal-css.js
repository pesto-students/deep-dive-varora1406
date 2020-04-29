const modal = {
  overflowY: 'auto',
  border: '1px solid grey',
  borderRadius: '4px',
  padding: '1rem',
  boxShadow: '0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)'
}

const floatingBox = {
  position: 'absolute',
  margin: 'auto',
  left: 0,
  right: 0,
  top: '5%',
  bottom: '5%',
  display: 'flex',
  flexDirection: 'column'
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

const sizes = { xs, sm, md, lg, xl };

export {
  modal,
  sizes,
  floatingBox
}