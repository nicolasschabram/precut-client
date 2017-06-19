import React from "react";
import {connect} from "react-redux";

import "./styles.css";

import * as formActions from "data/ui/form/actions";

class Form extends React.PureComponent {
  renderFields(fields, formId, setFormInput, state) {
    return fields.map(function(field) {
      let fieldElements = [(
        <label className="form__label"
               htmlFor={field.id}
               key={field.id}
        >{field.text}</label>
      )];
      switch (field.type) {
        case "input": {
          fieldElements.push((
            <div className="form__field-wrapper">
              <input className="form__field  form__field--input"
                     type="text"
                     name={field.id}
                     id={field.id}
                     required={!!field.required}
                     placeholder={field.placeholder}
                     onChange={
                       evt => setFormInput(formId, field.id, evt.target.value)
                     }
                     value={state.getIn([formId, field.id])}
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
          this.props.id,
          this.props.setFormInput,
          this.props.forms
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    forms: state.getIn(["ui", "forms"])
  };
}

export default connect(mapStateToProps, formActions)(Form);
