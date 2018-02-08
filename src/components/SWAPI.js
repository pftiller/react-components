import React, { Component } from 'react';

class SWAPI extends Component {
    constructor() {
        super();
       
      }
    render() 
    {
        const swapiListItems = [];
        for(const planet of this.props.swapiResults) {
          swapiListItems.push(<li key={planet.name}>{planet.name}</li>);
        }
        return (
            <div>
                StarList goes here.
                <ul>
                    {swapiListItems}
                </ul>
            </div>
        );
    }
}

export default SWAPI;