import React, { Component } from 'react';
import './Register.css';
import {hashHistory} from 'react-router';
import $ from 'jquery';

class Register extends Component {
	constructor(){
		super();
		this.state={
			id:"",
			pwd:"",
			regIpt1Pass:false,
			regIpt2Pass:false,
			regIpt3Pass:false,
			regIpt4Pass:false
		};
		this.chang1=this.chang1.bind(this);
		this.chang2=this.chang2.bind(this);
		this.chang3=this.chang3.bind(this);
		this.chang4=this.chang4.bind(this);
		this.registerClick=this.registerClick.bind(this)
		this.goLogin=this.goLogin.bind(this)
	}
  	render() {
	    return (
	    	<div className="regbox">
	    		<RegInput type="text" placeholder="手机号" className="regIpt regIpt1" 
	    			changeVal={this.chang1} value={this.state.id}></RegInput>
	    		<RegInput type="text" placeholder="证明你不是机器人" className="regIpt regIpt2" 
	    			changeVal={this.chang2}></RegInput>
	    		<span className="verify"></span>
	    		<span className="look">看不清楚，<span className="another" className="other">换一张</span></span>
	    		<RegInput type="text" placeholder="短信验证" className="regIpt regIpt3" 
	    			changeVal={this.chang3}></RegInput>
	    		<RegInput type="password" placeholder="设置6-16位密码" className="regIpt regIpt4" 
	    			changeVal={this.chang4} value={this.state.pwd}></RegInput>
	    		<button className="regIpt regIpt5" onClick={this.registerClick}>注册</button>
	    		<p className="hasId">已有账号?</p>
	    		<button className="regIpt regIpt6" onClick={this.goLogin}>登录</button>
	    		<p className="agree">点击注册，即代表您同意<span className="deal">《拉勾用户协议》</span></p>
	    	</div>
	    )
  	}
  	chang1(val){
  		let rgx=/^1[3|4|5|7|8][0-9]{9}$/;
  		let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
  		let _this=this;
  		$(".regIpt1")[0].onblur=function(){
  			arr.forEach(function(ele,idx){
	  			if(ele.id==val){
	  				$(".regIpt1").val("")
	  				alert("该手机已注册")
	  			}else{
	  				_this.setState({
	  					regIpt1Pass:true
	  				})
	  			}
	  		})
  			if(!rgx.test(val)){
  				$(".regIpt1").val("")
	  			alert("请输入正确手机号")
	  		}else{
  				_this.setState({
  					regIpt1Pass:true
  				})
  			}
  		}
  		this.setState({
			id:val
		})
  		
  	}
  	componentDidMount(){
  		let value="",
			count=0;
		while(count<4){
			let num=Math.floor(Math.random()*75+48)
			if(num>=48&&num<=57||num>=65&&num<=90||num>=97&&num<=122){
				value += String.fromCharCode(num)
				count++;
			}
		}
  		$(".verify").text(value)
  	}
  	chang2(val){
  		let _id=this.state.id;
  		let _this=this;
  		$(".regIpt2")[0].onblur=function(){
  			if(_id!==val){
  				$(".regIpt2").val("")
  				alert("两次输入手机号码不一致")
  			}else{
  				_this.setState({
  					regIpt2Pass:true
  				})
  			}
  		}
  	}
  	chang3(val){
  		let _verify=$(".verify").text().toLowerCase();
  		let _val=val.toLowerCase();
  		let _this=this;
  		$(".regIpt3")[0].onblur=function(){
  			if(_verify!==_val){
  				$(".regIpt3").val("")
  				alert("验证码错误")
  			}else{
  				_this.setState({
  					regIpt3Pass:true
  				})
  			}
  		}
  	}
  	chang4(val){
  		let rgx=/^[a-zA-Z]\w{5,15}$/;
  		let _this=this;
  		$(".regIpt4")[0].onblur=function(){
  			if(!rgx.test(val)){
  				$(".regIpt4").val("")
	  			alert("请输入以字母开头的6-16位密码")
	  		}else{
  				_this.setState({
  					regIpt4Pass:true
  				})
  			}
  		}
  		this.setState({
			pwd:val
		})
  	}
  	registerClick(){
  		let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
  		if(this.state.regIpt1Pass&&this.state.regIpt2Pass&&this.state.regIpt3Pass&&this.state.regIpt4Pass){
  			var userRegData={
				id:this.state.id,
				pwd:this.state.pwd
			}
  			arr.push(userRegData)
  			
  			if("localStorage" in window){
				localStorage.setItem("userRegData",JSON.stringify(arr))
			}
  			hashHistory.push('/login')
  		}else{
  			alert("注册失败!!!")
  		}
  	}
  	goLogin(){
  		hashHistory.push('/login')
  	}
}
class RegInput extends Component{
	constructor(){
		super();
		this.changeVal=this.changeVal.bind(this);
	}
	render(){
		var {type,placeholder,className,value}=this.props
		return(
			<input type={type} 
				placeholder={placeholder} 
				className={className} 
				value={value} 
				onChange={this.changeVal}
			/>
		)
	}
	changeVal(e){
		this.props.changeVal(e.target.value)
	}
}

export default Register;