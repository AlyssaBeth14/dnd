import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import Tables from './Tables.jsx';

class Test extends React.Component {


  render() {
    return (
      <div class ='container'>
        
        <Draggable
          axis="both"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[1, 1]}
          scale={1}
          onStart={this.handleStart}
          onDrag={this.handleDrag}
          onStop={this.handleStop}
          // bounds="parent"
          allowAnyClick={false}
          >
             <div >
            <Tables
            />
  
          </div>
        </Draggable>
      </div>
    );
  }
}
export default Test

