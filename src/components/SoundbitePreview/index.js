import React from "react";

import PencilIcon from "components/Icon/components/Pencil";
import CloseIcon from "components/Icon/components/Close";

import "./styles.css";

export default class SoundbitePreview extends React.PureComponent {
  render() {
    return (
      <section className="soundbite-preview">
        <div className="soundbite-preview__head">
          <h3 className="soundbite-preview__headline">
            {this.props.soundbite.get("name")}
            <PencilIcon onClick={() => console.log("pencil icon clicked")} />
          </h3>
          <CloseIcon onClick={() => this.props.close()} />
        </div>
        <div className="soundbite-preview__content">

          { this.props.soundbite.get("notes") ? (
            <div>
              <h4 className="soundbite-preview__subhead">Notes:</h4>
              <p>{this.props.soundbite.get("notes")}</p>
            </div>
          ) : null }

          { this.props.soundbite.get("translation") ? (
            <div>
              <h4 className="soundbite-preview__subhead">Translation:</h4>
              <p>{this.props.soundbite.get("translation")}</p>
            </div>
          ) : null }

        </div>
        <div className="soundbite-preview__footer">
          { this.props.file ? (
            <p><b>File:</b> {this.props.file.get("name")}</p>
          ) : null }
          { this.props.soundbite.get("tags") ? (
            <p>
              <b>Tags: </b>
              { this.props.soundbite.get("tags")
                                    .map(tag => tag.get("name"))
                                    .join(", ")
              }
            </p>
          ) : null }
        </div>
      </section>
    );
  }
}
