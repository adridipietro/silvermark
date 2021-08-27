import React, {useState} from 'react'
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
import { useHistory } from 'react-router-dom'
import { deleteCategory } from '../actions/index'
import { connect } from 'react-redux'

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
    const history = useHistory()

    const categories = useStyles()
    const [dense] = useState(false)

    
    const handleDelete = () => {
        props.deleteCategory(props.id)
        document.querySelector(`#category-${props.id}`).remove()
        history.push('/categories')
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
                          <FolderIcon/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={capitalize(props.name)}
                        size = 'small'

                      />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                </List>
              </div>
            </Grid>
        </div>
      )
    }

    const mapDispatchToProps = (dispatch) => {
        return {
          deleteCategory: (id) => dispatch(deleteCategory(id))
        }
    }  


    export default connect(null, mapDispatchToProps)(CategoryCard)