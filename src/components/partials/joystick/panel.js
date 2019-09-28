import Button from './button'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Panel extends Component {
    render() {  
      const buttons = this.props.letters.map(
        _letter => 
          <Button letter={_letter} key={_letter.id} 
            guessLetter={this.props.guessLetter}/>
      );

        return (
            <div className="text-center">{buttons}</div>
        );
    }

    static propTypes = {
        letters: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                value: PropTypes.string.isRequired,
                isGuessed: PropTypes.bool.isRequired
            })
        ).isRequired,
        guessLetter: PropTypes.func.isRequired
    }
}

export default Panel;