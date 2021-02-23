import React from 'react'
import PostForm from './PostForm'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            isPosted:false,
            
        }
    }
    handlePostedData=()=>{
        this.setState((prevState)=>{
            return{
                isPosted:!prevState.isPosted
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Welcome to Show Post</h1>
                <div style={{width:'50%',float:'left'}}>
                    <button onClick={this.handlePostedData}>Add Post</button>
                    {
                        (this.state.isPosted)?(<div><PostForm/></div>):('')
                    }
                </div>
                <div style={{width:'50%',float:'right'}}>
                    <button >List Post</button>
                </div>
                
            </div>
        )
    }
    
}
export default Home
