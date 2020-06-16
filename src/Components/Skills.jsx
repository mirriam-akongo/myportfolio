import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

class Skills extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={2}>
            <div style={{ display: "flex" }}>{this.props.skill}</div>
          </Cell>
          <Cell col={10}>
            <div>
              <ProgressBar
                style={{ margin: "10px", width: "85%", height: "10px" }}
                progress={this.props.progress}
              />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Skills;
