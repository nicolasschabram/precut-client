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
      this.props.cleanup();
    }
  }
  renderButtons(buttons, cleanup) {
    return buttons.map(function(button) {
      const onClick = button.submit ? null : {
        onClick: () => {
          button.onClick();
          // eslint-disable-next-line
          button.cleanUpForm ? cleanup() : null;
        }
      }
      return (
        <Button buttonText={button.text}
                color={button.color}
                style={{float: button.align}}
                key={button.text}
                type={button.submit ? "submit" : "button"}
                {...onClick}
        />
      );
    });
  }
  render() {
    const buttons = this.props.buttons;
    console.log(buttons);
    return (
      <div role="dialog" className="dialog">
        <form className="dialog__box"
              ref="dialog__box"
              action="#0"
              onSubmit={(evt) => {
                evt.preventDefault();
                buttons.filter(button => button.submit)[0].onClick();
                this.props.cleanup();
              }}
        >
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
