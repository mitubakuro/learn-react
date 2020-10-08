import React from 'react'
import Article from './Article'

class Blog extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isPublished: false,
      count: 0
    }
  }

  togglePublished=()=>{
    this.setState({
      isPublished: !this.state.isPublished
    })
  }

  countUp=()=>{
    this.state({
      
    })
  }

  render(){
    return(
      <>
        <Article
          title= "React勉強中"
          isPublished= {this.state.isPublished}
          toggle={()=>this.togglePublished()}
          count= {this.state.count}
        />
      </>
    )
  }
}

export default Blog