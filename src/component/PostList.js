import React from 'react'
import {connect} from 'react-redux'
import parse from "html-react-parser";
class PostList extends React.Component{
    render(){
        return (
            <div>
                <h1>Listing Post</h1>
                <div className='scroll'>
                    {
                        this.props.post.filter(post=>{
                            return post.postTitle.toLowerCase().includes(this.props.findData)||post.postBody.toLowerCase().includes(this.props.findData)
                        }).map((ele,i)=>{
                            return(
                                <div className='card' key={i}>
                                    <h3>{ele.postTitle}</h3>
                                    <p>{parse(ele.postBody)}</p>
                                </div>
                            )
                        })
                    }
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