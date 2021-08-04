import React, { Component } from 'react'
// fetching a list of our bookmarks from our api

export default class Bookmarks extends Component {
        state = {
            bookmarks: []
        }


    componentDidMount(){
        fetch(`http://localhost:3000/bookmarks`)
        .then(response => response.json())
        .then(json => {
            this.setState({bookmarks: json.data})
            // function .setState
            // we use "this" bc we are inside a class component 
        })
       // FETCH returns a Promise
       // Promise is an object that represents some value that will be available later
       // The data is accessed when the Promise is resolved

        
    }
    
    
    render() {
        return (
            <>
                <h2>Bookmarks</h2>
                <div className="bookmarks">
                    <ul>
                        {this.state.bookmarks.map(item => item.headline)}
                    </ul>
                </div>
            </>
        )

    }


}
