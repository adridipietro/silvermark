import React, { Component } from 'react'
// fetching a list of our bookmarks from our api

export default class Bookmarks extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookmarks: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/bookmarks")
        .then(response => response.json())
        .then(json => {
            this.setState({bookmarks: json})
            // function .setState
            // we use "this" bc we are inside a class component 
        })
    }
    
    
    render() {
        const { bookmarks } = this.state 
        return (
            <>
                <h2>Bookmarks</h2>
                <div className="bookmarks">
                    <ul>
                        {bookmarks.map(item => (
                            <li key={item.id}>
                                {item.headline}
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )

    }


}
