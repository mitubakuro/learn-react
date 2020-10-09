import React from 'react'
import Article from './Article'

// class Blog extends React.Component{
//   constructor(props){
//     super(props);
const Blog = ()=>{

// // ライフサイクルメソッドたち
//   componentDidMount(){
//     // ボタンをクリックでいいね数をカウントする
//     document.getElementById("counter").addEventListener('click', this.countUp)
//   }

//   componentDidUpdate(){
//     if(this.state.count >= 10){
//       this.setState({
//         count: 0
//       })
//     }
//   }

//   componentWillUnmount(){
//     document.getElementById("counter").removeEventListener('click', this.countUp)
//   }

// countUp=()=>{
//   this.setState({
//     count: this.state.count + 1
//   })
// }

  return(
    <>
      <Article
        title= "React勉強中"
        // count= {this.state.count}
      />
    </>
  )
}

export default Blog