import * as React from "react";

import  Network  from './graphView';


function graphApp() {
    const nodes = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
      ];
      const links = [
        { source: 1, target: 2 },
        { source: 1, target: 3 },
        { source: 1, target: 4 },
        { source: 2, target: 4 },
        { source: 3, target: 4 },
        { source: 4, target: 5 },
        { source: 4, target: 5 },
        { source: 6, target: 1 },
        { source: 6, target: 2 }
      ];
      return (
        <div className="App">
          <Network
            width={400}
            height={400}
            network={{
              nodes: nodes,
              links: links
            }}
          />
        </div>
      );
  }
  
  export default graphApp;