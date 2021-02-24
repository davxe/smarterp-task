import React from 'react'
import PostForm from './PostForm'
import PostList from './PostList'
import Search from './Search'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            isPosted:false,
            isPublished:false,
            findData:''
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
    handleFindData=(find)=>{
        this.setState({findData:find})
    }
    render(){
        return (
            <div>
                <h1>Welcome to Show Post</h1>
                <Search handleFindData={this.handleFindData}/><br/><hr/>
                <div style={{width:'40%',float:'left',paddingLeft:'5%'}}>
                    <button onClick={this.handlePostedData}>Add Post</button>
                    {
                        (this.state.isPosted)?(<div><PostForm/></div>):('')
                    }
                </div>
                <div style={{width:'40%',float:'right',paddingRight:'5%'}}>
                    <button onClick={this.handlePublishedData}>List Post</button>
                    {
                        (this.state.isPublished)?(<div><PostList findData={this.state.findData}/></div>):('')
                    }
                </div>
                
            </div>
        )
    }
    
}
export default Home