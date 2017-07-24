import React ,{Component} from 'react';
import './Content.css';
import Header from "../components/Header"
import ContentList from "../components/ContentList"
import $ from 'jquery';

class Content extends Component{
	constructor(){
		super();
		this.state={
			jobData:[],
			page:1
		};
	}
	render(){
		return(
			<div className="content" >
				<ContentList jobData={this.state.jobData} page={this.state.page}/>
				<ConFooter/>
			</div>
		)
	}
	componentWillMount(){
		let _this=this;
		$.ajax({
		  	type: "POST",
		   	url: "https://m.lagou.com/listmore.json?",
		   	data:"pageNo="+_this.state.page+"&pageSize=15",
		   	dataType: 'json',
		  	success: function(data){
		  		_this.setState({
		  			jobData:[..._this.state.jobData,...data.content.data.page.result]
		  		})
		   	}
		});
	}
}
class ConFooter extends Component{
	render(){
		return(
			<div>
				<p className="no">©2015 lagou.com, all right reserved </p>
				<div>
					<span className="phone">移动版 · </span>
					<span className="pc">移动版 · </span>
					<a href="#" className="top">回顶部</a>
				</div>
			</div>
		)
	}
}

export default Content