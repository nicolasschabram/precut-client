import React from "react";

import "./styles.css";

export default class Form extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {};
  }

  setInput(field, text) {
    this.setState({[field]: text});
  }

  renderFields(fields, setInput, state) {
    return fields.map(function(field, index) {
      let fieldElements = [(
        <label className="form__label"
               htmlFor={field.id}
               key={field.id}
        >{field.text}</label>
      )];
      switch (field.type) {
        case "input": {
          const value = state[field.id];
          fieldElements.push((
            <div className="form__field-wrapper">
              <input className="form__field  form__field--input"
                     type="text"
                     name={field.id}
                     id={field.id}
                     required={!!field.required}
                     placeholder={field.placeholder}
                     onChange={
                       evt => setInput(field.id, evt.target.value)
                     }
                     value={value ? value : ""}
                     autoFocus={index === 0 ? true : false}
              />
            </div>
          ));
          break;
        }
        case "textarea": {
          fieldElements.push((
            <div className="form__field-wrapper">
              <textarea className="form__field  form__field--textarea"
                        name={field.id}
                        id={field.id}
                        required={!!field.required}
                        placeholder={field.placeholder}
              />
            </div>
          ));
          break;
        }
        default: fieldElements = null;
      }
      return fieldElements;
    });
  }
  render() {
    return (
      <div className="form">
        {this.renderFields(
          this.props.fields,
          (field, text) => this.setInput(field, text),
          this.state
        )}
      </div>
    )
  }
}
