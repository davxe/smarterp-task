import React from 'react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {connect} from 'react-redux'
import { addPost } from '../action/postAction';
class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postTitle:'',
            postBody:'',
            titleError:'',
            bodyError:''
        }
    }
    //on change of postTile
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        this.setState({titleError:''})
    }
    //on change of postBody
    handlePostBody=(e,editor)=>{
        const postBody=editor.getData();
        this.setState({postBody,bodyError:''})
    }
    //for validation of input fields
    validate=()=>{
        let titleError=''
        let bodyError=''
        if(!this.state.postTitle){
            titleError='title field cannot be empty'
        }
        if(!this.state.postBody){
            bodyError='body field cannot be empty'
        }
        if(titleError||bodyError){
            this.setState({titleError,bodyError})
            return false
        }
        return true
    }
    // on submit 
    handleSubmit=(e)=>{
        e.preventDefault()
        const isValid=this.validate();
        if(isValid){
            const formData={
                id:Number(new Date()),
                postTitle:this.state.postTitle,
                postBody:this.state.postBody
            }
            this.props.dispatch(addPost(formData))
            this.setState({postTitle:'',postBody:''})
        }
    }
    render(){
        return(
            <div>
                <h1>Add Post Data</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='postTitle'>Enter Title:-</label><br/>
                    <input
                        type='text'
                        name='postTitle'
                        id='postTitle'
                        placeholder='Enter your Title here'
                        value={this.state.postTitle}
                        onChange={this.handleChange}
                    />
                    {this.state.titleError?<div style={{fontSize:11,color:'red',textAlign:'left' }}>{this.state.titleError}</div>:null}
                    <br/><br/>
                    <label htmlFor='postBody'>Enter Body:-</label><br/>
                    <CKEditor
                        id='postBody'
                        editor={ClassicEditor}
                        data={this.state.postBody}
                        onChange={this.handlePostBody}
                    />
                    <div style={{fontSize:11,color:'red',textAlign:'left'}}>{this.state.bodyError}</div>
                    <br/>
                    <input type='submit' value='Publilsh'/>
                </form>
            </div>
        )
    }
}
export default connect()(PostForm)