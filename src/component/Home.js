import React from 'react'
import PostForm from './PostForm'
import PostList from './PostList'
import Search from './Search'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            isPosted:false,
            isPublished:false
        }
    }
    handlePostedData=()=>{
        this.setState((prevState)=>{
            return{
                isPosted:!prevState.isPosted
            }
        })
    }
    handlePublishedData=()=>{
        this.setState((prevState)=>{
            return{
                isPublished:!prevState.isPublished
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Welcome to Show Post</h1>
                <Search/><br/><hr/>
                <div style={{width:'50%',float:'left'}}>
                    <button onClick={this.handlePostedData}>Add Post</button>
                    {
                        (this.state.isPosted)?(<div><PostForm/></div>):('')
                    }
                </div>
                <div style={{width:'50%',float:'right'}}>
                    <button onClick={this.handlePublishedData}>List Post</button>
                    {
                        (this.state.isPublished)?(<div><PostList/></div>):('')
                    }
                </div>
                
            </div>
        )
    }
    
}
export default Home
