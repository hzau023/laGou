import React ,{Component} from 'react';
import './User.css';
import {hashHistory} from 'react-router';
import $ from 'jquery';

class User extends Component{
	constructor(){
		super();
		this.post=this.post.bind(this)
	}
	render(){
		return(
			<div className="con">
				<BtnLogReg />
				<div className="btnBox">
					<div className="post" onClick={this.post}>投递</div>		
					<div className="face" onClick={this.post}>面试</div>	
					<div className="rec" onClick={this.post}>邀约</div>	
					<div className="add" onClick={this.post}>收藏</div>
				</div>
				<EscUser />
			</div>
		)
	}
	post(){
		hashHistory.push('/nonono')
	}
}


class BtnLogReg extends Component{
	constructor(){
		super();
		this.logReg=this.logReg.bind(this)
		this.resume=this.resume.bind(this)
	}
	render(){
		var innerHTML="";
		var _userData=JSON.parse(localStorage.getItem("userData"))
		if(_userData==null){
			innerHTML=
			<div className="log_reg">
				<div onClick={this.logReg}>登录/注册</div>
			</div>
		}else{
			innerHTML=
			<div className="userBox">
				<img src="https://www.lagou.com/images/myresume/default_headpic.png" className="portrait"/>
				<p className="userId">{_userData.id}</p>
				<span className="toResume" onClick={this.resume}>简历></span>
			</div>
		}
		return(
			<div>
				{innerHTML}
			</div>
		)
	}
	logReg(){
		hashHistory.push('/login')
	}
	resume(){
		hashHistory.push('/resume')
	}
}
class EscUser extends Component{
	constructor(){
		super();
		this.escUser=this.escUser.bind(this)
	}
	render(){
		var innerHTML="";
		var _userData=JSON.parse(localStorage.getItem("userData"))
		if(_userData==null){
			innerHTML=""
		}else{
			innerHTML=<div className="escUser" onClick={this.escUser}>退出登录</div>
		}
		return(
			<div>
				{innerHTML}
			</div>
		)
	}
	escUser(){
		localStorage.removeItem("userData")
		window.location.reload()
	}
	
}

export default User