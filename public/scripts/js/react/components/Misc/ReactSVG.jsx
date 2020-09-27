// ReactSVG.jsx
// Using SVG DOM with React
console.log("Mounting ReactSVG... <ReactSVG>")

import React, {Component} from 'react';

class RectSVG extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            rect: {x: 3, y: 5}
        }
    }
  
    startDrag(event, draggedElement) {
        event.preventDefault();

        let point = this.svg.createSVGPoint();
        point.x = event.clientX;
        point.y = event.clientY;
        point = point.matrixTransform(this.svg.getScreenCTM().inverse());
        this.setState({dragOffset: {
                x: point.x - this.state.rect.x,
                y: point.y - this.state.rect.y
            }
        });
    
        const mousemove = (event) => {
            event.preventDefault();
            
            point.x = event.clientX;
            point.y = event.clientY;
            let cursor = point.matrixTransform(this.svg.getScreenCTM().inverse());
            this.setState({rect: {
                x: cursor.x - this.state.dragOffset.x,
                y: cursor.y - this.state.dragOffset.y
            }});
        };
        
        const mouseup = (event) => {
            document.removeEventListener("mousemove", mousemove);
            document.removeEventListener("mouseup", mouseup);
        }
    
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
    }   

    render() {
        return (
            <svg 
                id="react-svg" 
                width="100%" 
                height="100%" 
                viewBox="0 0 32 32"
                //preserveAspectRatio="xMidYMid meet" 
                ref={(svg) => this.svg = svg}
            >
                <rect
                    display=""
                    x={this.state.rect.x}
                    y={this.state.rect.y}
                    width="10"
                    height="10"
                    stroke="#fff"
                    strokeWidth="0.5"
                    strokeOpacity="0.5"
                    fill="#0ff"
                    fillOpacity="0.5"
                    ref={(e) => this.svgRectElement = e}
                    onMouseDown={(e) => this.startDrag(e, this.svgRectElement)}
                />
            </svg>
        )
    }
}

export default RectSVG;

// eof