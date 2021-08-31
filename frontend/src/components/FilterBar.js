import React from 'react'
import { MenuItem, Select } from '@material-ui/core'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import {updateQuery} from '../actions/index'



class FilterBar extends React.Component {

    state = {
        query: ''
    }

    handleClick = () => {
        let query = this.state
        this.props.updateQuery(query)
    }

    handleChange = (e) => {
        this.setState({query: e.target.value})
    }

    render() {
        return (
            <form className="filter-category" onClick={() => this.handleClick(this.state.query, this.props.updateQuery)}>
                <p>FILTER BY CATEGORY</p>
                <Select id="category-input" onChange={this.handleChange}>
                    <MenuItem value="" disabled>category</MenuItem>
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
      updateQuery: (query) => dispatch(updateQuery(query))
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar)