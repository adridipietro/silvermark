import React, { useState, useEffect } from 'react'
// fetching a list of our bookmarks from our api

export default class Bookmarks extends React.Component {
    /* const [bookmarks, setBookmarks] = useState([])

    useEffect(()=> {
        //get bookmarks from api
        //update bookmarks in our state


    }) */

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
            {debugger}
            this.setState({bookmarks: json})
            // function .setState
            // we use "this" bc we are inside a class component
            
        })
    }
    
    
    render() {
        const list = "hi"
        return (
            <>
                <h2>Bookmarks</h2>
                <div className="bookmarks">
                    <ul>{list}</ul>
                </div>
            </>
        )

    }


}
