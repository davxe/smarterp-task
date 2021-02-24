import React from 'react'
import {connect} from 'react-redux'
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            find:'',
        }
    }
    handleFind=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        this.props.handleFindData(event.target.value)
    }
    render(){
        return(
            <div>
                <form>
                    <input 
                        type='search' 
                        value={this.state.find}
                        name='find'
                        onChange={this.handleFind}
                        placeholder='find by title'
                        aria-label='search'
                    />
                </form>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        post:state.post
    }
}
export default connect(mapStateToProps)(Search)