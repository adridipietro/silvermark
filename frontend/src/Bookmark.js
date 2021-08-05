import React from 'react'

const Bookmark = ({ headline, web_url, description }) => {
    return (
        <div className="bookmark">

            <h2 id="bookmark-headline">{headline}</h2>
                <li id="bookmark-description">{description}</li>
                <li id="bookmark-weburl">{web_url}</li>
        </div>

    )
    // make web url clickable link 

}
    
    




    
export default Bookmark
