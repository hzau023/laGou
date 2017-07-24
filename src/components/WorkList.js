import React ,{Component} from 'react';
import './WorkList.css';
import $ from 'jquery';
import {Router,Route,hashHistory,IndexRoute,browserHistory}from 'react-router';

class WorkList extends Component{
	constructor(){
		super();
		this.jobClick=this.jobClick.bind(this)
	}
	render(){
		var job=this.props.jobData
		let src="//www.lgstatic.com/"+job.companyLogo
		return(
			<li className="activeable list-item" data-positionid={job.positionId} data-companyid={job.companyId} onClick={this.jobClick}>
	            <img src={src} className="item-logo" />
	            <div className="item-desc">
	                <p className="item-title">{job.companyName}</p>
	                <p className="item-info">
	                    <span className="item-pos">
	                       {job.positionName}[{job.city}]
	                    </span>
	                    <span className="item-salary">{job.salary}</span>
	                </p>
	                <p className="item-time">{job.createTime}</p>
	            </div>
	        </li>
		)
	}
	jobClick(e){
		let _positionid=$(e.target).parents(".list-item")[0].dataset.positionid+".html"
		window.location="https://m.lagou.com/jobs/"+_positionid
	}
}


export default WorkList