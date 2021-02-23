import React from 'react'
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
class PostForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            postTitle:'',
            postBody:''
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handlePostBody=(e,editor)=>{
        const postBody=editor.getData();
        this.setState({postBody})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:Number(new Date()),
            postTitle:this.state.postTitle,
            postBody:this.state.postBody
        }
        console.log('form data',formData)
        this.setState({postTitle:'',postBody:''})
    }
    render(){
        return(
            <div>
                <div>
                    <h1>Add Post Data</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor='postTitle'>Enter Title:-</label>
                        <input
                            type='text'
                            name='postTitle'
                            id='postTitle'
                            placeholder='Enter your Title here'
                            value={this.state.postTitle}
                            onChange={this.handleChange}
                            required={true}
                        />
                        <br/>
                        <CKEditor
                            editor={ClassicEditor}
                            data={this.state.postBody}
                            onChange={this.handlePostBody}
                        />
                        <input type='submit' value='publilsh'/>
                    </form>
                </div>
            </div>
        )
    }
}
export default PostForm