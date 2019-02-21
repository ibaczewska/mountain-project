import React from 'react';
import Button from '../components/Button'
class Header extends React.Component {
  render(){
    return (
      <div className="header">
        <h1 className="header__title">Mountain kingdom</h1>
        <Button name="Enter the gates"></Button>
      </div>
    )
  }
}

export default Header;