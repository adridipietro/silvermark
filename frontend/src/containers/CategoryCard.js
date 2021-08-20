import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import FolderIcon from '@material-ui/icons/Folder'
import DeleteIcon from "@material-ui/icons/Delete"
import { deleteCategory } from '../actions/index'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
}))





const CategoryCard = (props) => {

    const categories = useStyles()
    const [dense, setDense] = React.useState(false)

    const handleDelete = () => {
        deleteCategory(props.id)
    
    }

    const renderBookmarks = () => {

        const listContainer = []
        listContainer.push(<ul>
                    {props.bookmarks.map(bookmark => {
                        <li>{bookmark.headline}</li>
                    })}</ul>)
    }
          
    const capitalize = (str) => {
        return str.toUpperCase()
    }



    return (
        <div className={categories.root} id={`category-${props.id}`} >
            <Grid item xs={12} md={12}>
              <div className={categories.demo}>
                <List dense={dense}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <FolderIcon onClick={renderBookmarks()}/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={capitalize(props.name)}
                        size = 'small'
                        
                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon onClick={handleDelete()}/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                </List>
              </div>
            </Grid>
        </div>
      )
    }
           

export default CategoryCard