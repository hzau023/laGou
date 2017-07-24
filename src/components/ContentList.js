import React ,{Component} from 'react';
import './ContentList.css';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import WorkList from './WorkList';

class ContentList extends Component{
	constructor(){
		super();
	}
	render(){
		return(			
			<div>
				<Custom/>
				<JobList jobData={this.props.jobData} page={this.props.page}/>
			</div>
		)
	}
}
class Custom extends Component{
	constructor(){
		super();
		this.toLogin=this.toLogin.bind(this)
		this.toEdit=this.toEdit.bind(this)
	}
	render(){
		var _userData=JSON.parse(localStorage.getItem("userData"))
		return(
			<div>
				<div className="custom">
					<span className="info">10秒钟定制职位</span>
					<div className="toLogin" onClick={this.toLogin}>{_userData?"编辑":"去登陆"}</div>
				</div>
			</div>
		)
	}
	toLogin(){
		hashHistory.push('/login')
	}
	toEdit(){
		hashHistory.push('/portrait')
	}
}

class JobList extends Component{
	constructor(){
		super();
		this.state={
			jobData:[],
			page:2
		}
		this.addMore=this.addMore.bind(this)
	}
	render(){
		var jobData=this.props.jobData.concat(this.state.jobData)
		var list=jobData.map(function(ele){
			return <WorkList jobData={ele} key={ele.positionId}/>
		})
		return(
			<div>
				<ul className="jobListAdd">
					{list}
				</ul>
				<div className="more" onClick={this.addMore} onChange={this.changePage}>加载更多</div>
			</div>
		)
	}
	addMore(){
		let page=this.state.page+1;
		let _this=this;
		$.ajax({
		  	type: "POST",
		   	url: "https://m.lagou.com/listmore.json?",
		   	data:"pageNo="+page+"&pageSize=15",
		   	dataType: 'json',
		  	success: function(data){
		  		_this.setState({
		  			jobData:_this.state.jobData.concat(data.content.data.page.result),
		  			page:page
		  		})
		   	}
		});
	}
	
	
}

export default ContentList