import React from "react";

import "./styles.css";

export default class Form extends React.PureComponent {
  renderFields(fields) {
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
        {this.renderFields([{
          type: "input",
          id: "title",
          text: "Title",
          required: true,
          placeholder: "My New Project"
        }, {
          type: "input",
          id: "station",
          text: "Station",
          required: true,
          placeholder: "Radio Inc."
        }, {
          type: "input",
          id: "show",
          text: "Show",
          required: true,
          placeholder: "Radio World"
        }, {
          type: "textarea",
          id: "anchor_intro",
          text: "Anchor Intro",
          placeholder: "Dear listener …"
        }])}
      </div>
    )
  }
}
