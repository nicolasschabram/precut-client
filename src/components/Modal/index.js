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
  renderButtons(buttons) {
    return buttons.map(function(button) {
      return (
        <Button buttonText={button.text}
                color={button.color}
                onClick={() => button.onClick()}
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
            <h4 className="dialog__title">New Project</h4>
            <button onClick={() => this.props.hideModal()}
                    title="Close"
                    type="button"
                    className="dialog__close"
            ></button>
          </div>
          <div className="dialog__content-container">
            <p>Are you sure you want to move 1 script to trash? This won’t affect your soundbites in other areas of the app.Are you sure you want to move 1 script to trash? This won’t affect your soundbites in other areas of the app.Are you sure you want to move 1 script to trash? This won’t affect your soundbites in other areas of the app.Are you sure you want to move 1 script to trash? This won’t affect your soundbites in other areas of the app.Are you sure you want to move 1 script to trash? This won’t affect your soundbites in other areas of the app.</p>
            <p>Are you sure you want to move 1 script to trash? This won’t affect your soundbites in other areas of the app.</p>
          </div>
          <div className="dialog__action-container">
            {this.renderButtons(this.props.buttons)}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, modalActions)(Modal);
