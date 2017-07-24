import React ,{Component} from 'react';
import './Login.css';
import {hashHistory} from 'react-router';

class Login extends Component{
	constructor(){
		super();
		var _id="";
		let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
		if(arr.length!=0){
			_id=arr[arr.length-1].id
		}
		this.state={
			id:_id,
			pwd:""
		};
		this.handleChange1=this.handleChange1.bind(this);
		this.handleChange2=this.handleChange2.bind(this);
		this.goLogin=this.goLogin.bind(this);
		this.goRegister=this.goRegister.bind(this);
	}
	render(){
		return(
			<div className="login">
				<LoginInput type="text" 
					className="form-control id" 
					placeholder="已验证手机/邮箱" 
					value={this.state.id} 
					changeVal={this.handleChange1}
				/>
				<LoginInput 
					type="password" 
					className="form-control pwd" 
					placeholder="密码" 
					value={this.state.pwd} 
					changeVal={this.handleChange2}
				/>
				<button onClick={this.goLogin} className="btnLog" >
					登录</button>
				<p className="text">还没账号?</p>
				<button onClick={this.goRegister} className="btnReg">
					注册</button>
			</div>
		)
	}
	handleChange1(val){
		this.setState({
			id:val
		})
	}
	handleChange2(val){
		this.setState({
			pwd:val
		})
	}
	goLogin(){
		var userData={
			id:this.state.id,
			pwd:this.state.pwd
		}
		let arr=JSON.parse(localStorage.getItem("userRegData"))||[];
		arr.forEach(function(ele,idx){
			if(ele.id==userData.id){
				if(ele.pwd==userData.pwd){
					if("localStorage" in window){
						localStorage.setItem("userData",JSON.stringify(userData))
					}
					hashHistory.push('/user')
				}else{
					alert("密码错误")
				}
			}
		})
	}
	goRegister(){
		hashHistory.push('/register')
	}
}
class LoginInput extends Component{
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

export default Login