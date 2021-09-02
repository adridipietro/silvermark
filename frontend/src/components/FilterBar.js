import React from 'react'
import { MenuItem, Select } from '@material-ui/core'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import {filterCategory} from '../actions/index'



class FilterBar extends React.Component {

    state = {
        category_id: null
    }

  
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.filterCategory(this.state)
        document.querySelector(".filter-category").reset()
        this.props.history.push(`/categories/${this.state}`)
    }

    handleChange = (e) => {
        debugger
        this.setState({
            category_id: e.target.value
        })
    }

    render() {
        return (
            <form className="filter-category" onClick={() => this.handleClick}>
                <p>FILTER BY CATEGORY</p>
                <Select id="category-input" onChange={this.handleChange}>
                    <MenuItem value="null" disabled>category</MenuItem>
                        {this.props.categories.map(category => {
                            return (
                                <MenuItem key={category.id} name={category.name} value={category.id}>{category.name}</MenuItem>
                            )
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