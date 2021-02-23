import React from 'react'
class Home extends React.Component{
    constructor(){
        super()
        this.state={
            isdata:false,
            
        }
    }
    handleData=()=>{
        this.setState((prevState)=>{
            return{
                isdata:!prevState.isdata
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Welcome to Show Post</h1>
                <div style={{width:'50%',float:'left'}}>
                    <button onClick={this.handleData}>{this.state.isdata?'Add Post':'nothing'}</button>
                </div>
                <div style={{width:'50%',float:'right'}}>
                    <button >List Post</button>
                </div>
            </div>
        )
    }
    
}
export default Home
