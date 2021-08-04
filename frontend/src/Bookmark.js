import React from 'react'

export default class Bookmark extends React.Component {
    
    

    componentDidMount(){
        fetch(`http://localhost:3000/bookmarks/:bookmarkID`)
        .then(response => response.json())
        .then(json => {
            this.setState({bookmark: json.data})
            // function .setState
            // we use "this" bc we are inside a class component 
        })
        
    }

    render(){
        const bookmark = this.state
        return (
            <>
                <h2>{bookmark.headline}</h2>
                <div className="bookmark">
                    <li>{bookmark.description}</li>
                    <li>{bookmark.web_url}</li>
                
                </div>
            </>
        )
        // make web url clickable link 

    }
}
