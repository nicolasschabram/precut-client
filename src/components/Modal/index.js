import React from "react";
import ReactDOM from 'react-dom';

import Button from "components/Button";

import "./styles.css";

export default class Modal extends React.PureComponent {

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
  renderButtons(buttons, hideModal) {
    return buttons.map(function(button) {
      return (
        <Button buttonText={button.text}
                color={button.color}
                style={{float: button.align}}
                key={button.text}
                type={button.submit ? "submit" : "button"}
                onClick={() => {
                  button.onClick();
                  if (button.hideModal) hideModal();
                }}
        />
      );
    });
  }
  render() {
    const buttons = this.props.buttons;
    return (
      <div role="dialog" className="dialog">
        <form className="dialog__box"
              ref="dialog__box"
              action="#0"
              onSubmit={(evt) => {
                evt.preventDefault();
                buttons.filter(button => button.submit)[0].onClick();
                this.props.hideModal();
              }}
        >
          <div className="dialog__title-container">
            <h4 className="dialog__title">{this.props.title}</h4>
            <button onClick={() => this.props.hideModal()}
                    title="Close"
                    type="button"
                    className="dialog__close"
            ></button>
          </div>
          <div className="dialog__content-container">
            {this.props.content}
          </div>
          <div className="dialog__action-container">
            {this.renderButtons(this.props.buttons, () => this.props.hideModal())}
          </div>
        </form>
      </div>
    );
  }
}
