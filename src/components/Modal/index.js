import React from "react";
import ReactDOM from 'react-dom';
import {connect} from "react-redux";

import Button from "components/Button";

import * as modalActions from "data/ui/modal/actions";

import "./styles.css";

class Modal extends React.PureComponent {

  componentDidMount () {
    document.addEventListener('click', this.handleClick.bind(this))
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.handleClick)
  }
  handleClick(evt) {
    const dialog = ReactDOM.findDOMNode(this.refs.dialog__box);
    if (dialog && !dialog.contains(evt.target)) {
      this.props.hideModal();
    }
  }
  renderButtons(buttons, cleanup) {
    return buttons.map(function(button) {
      return (
        <Button buttonText={button.text}
                color={button.color}
                onClick={() => {
                  button.onClick();
                  button.cleanUpForm ? cleanup() : null;
                }}
                style={{float: button.align}}
                key={button.text}
                type={button.submit ? "submit" : "button"}
        />
      );
    });
  }
  render() {
    return (
      <div role="dialog" className="dialog">
        <form className="dialog__box" ref="dialog__box" action="#0">
          <div className="dialog__title-container">
            <h4 className="dialog__title">{this.props.title}</h4>
            <button onClick={() => {
                                     this.props.hideModal();
                                     this.props.cleanup();
                                   }}
                    title="Close"
                    type="button"
                    className="dialog__close"
            ></button>
          </div>
          <div className="dialog__content-container">
            {this.props.content}
          </div>
          <div className="dialog__action-container">
            {this.renderButtons(this.props.buttons, () => this.props.cleanup())}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, modalActions)(Modal);
