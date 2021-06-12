import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'New Task'} onClick={onAdd}/><br />
            {/* <Button color='red' text='danger'/><br />
            <Button color='yellow' text='Hold on'/><br /> */}
        </header>
    )
}

Header.propType = {
    title: PropTypes.string
}
Header.defaultProps = {
    title: 'Task Tracker',
}
  

export default Header
