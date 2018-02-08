import React, { Component } from 'react';

class StarList extends Component {
    constructor() {
        super();
    //     this.state = {starList: [
      
    //         {name: 'Fomalhaut', diameter: '2mi'}, 
    //         {name: 'Elnath', diameter: '3.6MM mi'}, 
    //         {name: 'Gacrux', diameter: '117MM mi'}, 
    //         {name: 'Deneb', diameter: '175MM mi'}
    //     ]
    // }
}
    render() 
    {
        const listItems = [];
        for(const star of this.props.starList) {
          listItems.push(<li key={star.name}>{star.name} - {star.diameter}</li>);
        }
        return (
            <div>
                StarList goes here.
                <ul>
                    {listItems}
                </ul>
            </div>
        );
    }
}

export default StarList;