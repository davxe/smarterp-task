import React from 'react'
import {connect} from 'react-redux'
import parse from "html-react-parser";
class PostList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search:''
        }
    }
    render(){
        return (
            <div>
                <h1>Listing Post</h1>
                <div className='scroll'>
                    <ul>
                    {
                        this.props.post.map((ele,i)=>{
                            return(
                                <div className='card' key={i}>
                                    <div className='container'>
                                        <h3>{ele.postTitle}</h3>
                                        <p>{parse(ele.postBody)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        post:state.post
    }
}
export default connect(mapStateToProps)(PostList)