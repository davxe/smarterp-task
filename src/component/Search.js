import React from 'react'
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            find:''
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input 
                        type='search' 
                        value={this.state.search}
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
export default Search