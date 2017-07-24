import React ,{Component} from 'react';
import './Resume.css';
import {hashHistory} from 'react-router';
import $ from 'jquery';


class Resume extends Component{
	constructor(){
		super();
		this.state={
			userMsg:{
				id:"徐春鹏",
				sex:"man",
				"基本信息":[{"最高学历":"本科"},{"工作年限":"6年"},{"出生年份":"1988.02"},
						{"所在城市":"成都"},{"联系电话":"15171635106"},{"联系邮箱":"823736388@qq.com"}],
				"教育经历":[]
			}
		}
	}
	render(){
		let _userData=JSON.parse(localStorage.getItem("userData"))
		let _sex=_userData.sex||"man"+" sex";
		return(
			<div className="resumeBox">
				<div className="resHead">
					<img src="https://www.lagou.com/images/myresume/resume_head.png"  className="headImg"/>
					<div className="resImgBox">
						<img src="https://www.lagou.com/images/myresume/default_headpic.png" className="portrait resImg"/>
					</div>
				</div>
				<p className="resUserId">
					{_userData.id}
					<span className={_sex} ></span>
				</p>
				<p className="tag">勤奋，好学，永不放弃</p>
				<div className="tagHead">
					<div className="beBlock"></div>
					<div className="tagMsg">基本信息</div>
				</div>
				<p className="datum pWidth"><span className="datumId">最高学历 : </span ><span className="datumMsg">本科</span></p>
				<p className="datum pWidth"><span className="datumId">工作年限 : </span ><span className="datumMsg">6年</span></p>
				<p className="datum pWidth"><span className="datumId">出生年份 : </span ><span className="datumMsg">1988.02</span></p>
				<p className="datum pWidth"><span className="datumId">所在城市 : </span ><span className="datumMsg">成都</span></p>
				<p className="datum pWidth"><span className="datumId">联系电话 : </span ><span className="datumMsg">15171635106</span></p>
				<p className="datum pWidth"><span className="datumId">联系邮箱 : </span ><span className="datumMsg">823736388@qq.com</span></p>
				<div className="tagHead">
					<div className="beBlock"></div>
					<div className="tagMsg">教育经历</div>
				</div>
				<p  className="datumId pWidth">2011年毕业</p>
				<p  className="datumMsg pWidth">华中农业大学</p>
				<p  className="datumId pWidth">本科 · 动物科学</p>
				<div className="tagHead">
					<div className="beBlock"></div>
					<div className="tagMsg">工作经历</div>
				</div>
				<p  className="datumId pWidth">2014.03-2017.06</p>
				<p  className="datumMsg pWidth">新希望六和股份有限公司</p>
				<p  className="datumId pWidth">前端工程师</p>
				<div className="state">目前我已离职,可快速到岗</div>
			
			</div>
		)
	}
}


export default Resume