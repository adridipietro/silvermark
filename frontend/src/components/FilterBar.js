import React from 'react'
import { MenuItem, Select } from '@material-ui/core'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import {filterCategory} from '../actions/index'
import history from '../history'


class FilterBar extends React.Component {

    state = {
        category_id: null
    }

  
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.filterCategory(this.state.category_id)
        document.querySelector(".filter-category").reset()
        history.push(`/categories/${this.state.category_id}`)
        debugger
    }

    handleSelectChange = (e) => {
        
        this.setState({
            category_id: e.target.value
        })
    }

    render() {
        return (
            <form className="filter-category" onSubmit={this.handleSubmit}>
                <p>FILTER BY CATEGORY</p>
                <Select labelId="demo-simple-select-autowidth-label" id="category-input" value="category" onChange={this.handleSelectChange}>
                        <MenuItem value="" disabled>category</MenuItem>
                            {this.props.categories.map(category => {
                                return <MenuItem key={category.id} name={category.name} value={category.id} >{category.name}</MenuItem>
                            })}
                </Select>
                <Button type="submit" value="Login">SUBMIT</Button>
            </form>
        )
    }
}


const mapStateToProps = (currentState) => {
    return {
      categories: currentState.categories.categories
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      filterCategory: (id) => dispatch(filterCategory(id))
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)