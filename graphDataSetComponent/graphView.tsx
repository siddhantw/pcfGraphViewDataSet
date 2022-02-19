import * as React from "react";

import { Graph } from "@visx/network";

import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation
} from "d3-force";

// The node rendered by the graph
class NetworkNode extends React.Component {
  render() {
    return <circle r={10} fill={"#9280FF"} />;
  }
}

class Network extends React.Component {
    
    state: any;
    props: any;

    force:any;
    


    constructor(props : any) {
    super(props);

    const links = props.network.links;
    const nodes = props.network.nodes;

    this.state = {
      data: {
        nodes,
        links
      }
    };
  }

  componentDidMount() {
    this.force = forceSimulation(this.state.data.nodes)
      .force(
        "link",
        forceLink()
          .id((d: any) => d.id)
          .links(this.state.data.links)
      )
      .force("charge", forceManyBody().strength(-500))
      .force(
        "center",
        forceCenter( 480, 480 )
      );

    // Force-update the component on each force tick
    this.force.on("tick", () => this.forceUpdate());
  }

  render() {
    if (!this.force) {
      return null;
    }

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <svg width="1024px" height="960px">
          <rect
            width="1024px"
            height="960px"
            fill="#f9fcff"
          />
          <Graph graph={this.state.data} nodeComponent={NetworkNode} />
        </svg>
      </div>
    );
  }
}

export default Network;

