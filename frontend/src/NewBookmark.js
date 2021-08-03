import React from 'react'

export default function NewBookmark() {
    return (
        <div>
            <div id="new-form">
              <h1>Add A Bookmark</h1>
              <form>
                <div>
                  <input type="text" name="headline" placeholder="headline" />
                </div>
                <div>
                  <input type="text" name="description" placeholder="description" />
                </div>
                <div>
                  <input type="password" name="web_url" placeholder="web url" />
                </div><br></br>
                <input type="submit" value="Add" />
              </form>
            </div>
            
        </div>
    )
}
