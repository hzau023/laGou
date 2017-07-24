import React, { Component } from 'react';
import './Search.css';
import {hashHistory} from 'react-router';
import $ from 'jquery';
import City from "../components/City";
import ContentList from "../components/ContentList"
import WorkList from "../components/WorkList"

class Search extends Component {
	constructor(){
		super();
		this.state={
			city:"全国"
		};
		this.citycity=this.citycity.bind(this);
	}
	render(){
		return(
			<div className="searchCon">
				<SearchIpt value={this.state.city}/>
				<City citycity={this.citycity} city={this.state.city}/>
			</div>
		)
	}
	citycity(city){
		this.setState({
			city:city
		})
	}
}

class SearchIpt extends Component {
	constructor(){
		super();
		this.state={
			html:"",
			jobData:[],
			page:1,
			iptCon:""
		}
		this.checkCity=this.checkCity.bind(this);
		this.seaBtn=this.seaBtn.bind(this);
	}
	render(){
		let jobData=this.state.jobData;
		let list=jobData.map(function(ele){
			return <WorkList jobData={ele} key={ele.positionId}/>
		})
		
		let _searchRecord=JSON.parse(localStorage.getItem("searchRecord"))||[];
		let record=_searchRecord.map(function(ele,idx){
			return <SearchRecord record={ele} key={idx}/>
		})
		return(
			<div className="seaBeBOX">
				<div className="seaCheck">
					<div className="cityShow">
						<span className="city" onClick={this.checkCity}>{this.props.value}</span>
						<span className="cityIcon iconfont icon-down-trangle" ></span>
					</div>
					<div>
						<input type="text" placeholder="搜索职位或公司" className="seaIpt" />
						<button className="seaBtn" onClick={this.seaBtn}><i className="iconfont icon-sousuo"></i></button>
					</div>
				</div>
				{list}
				<div className="searchRecordBox" onClick={this.seaBtn}>
					{record}
				</div>
				<div className="seaMore more" onClick={this.seaBtn}>加载更多</div>
			</div>
		)
	}
	seaBtn(e){
		if($(e.target).hasClass("icon-chuyidong")){
			let _recordMsg=$(e.target).parent().children(".recordCon").text()
			let _searchRecord=JSON.parse(localStorage.getItem("searchRecord"))||[];
			$(_searchRecord).each(function(idx,ele){
				if(_recordMsg==ele){
					_searchRecord.splice(idx,1)
					$(e.target).parent().remove()
				}
			})
			localStorage.setItem("searchRecord",JSON.stringify(_searchRecord))
		}else{
			let _val=$(".seaIpt").val();
			if($(e.target).parents(".searchRecordBox").length!==0){
				_val=$(e.target).text()
			}
			let _this=this;
			//存入搜索记录
			let _searchRecord=JSON.parse(localStorage.getItem("searchRecord"))||[];
			let arr=[_val];
			_searchRecord.forEach(function(ele,idx){
				if(ele!=_val){
					arr.push(ele)
				}
			});
			localStorage.setItem("searchRecord",JSON.stringify(arr))
			
			if(this.state.iptCon!=_val){
				_this.setState({
					jobData:[]
				})
			}
			$.ajax({
			  	type: "POST",
			   	url: "https://m.lagou.com/search.json?city="+this.props.value+"&positionName="+_val+"&pageNo="+this.state.page+"&pageSize=15",
			   	dataType: 'json',
			  	success: function(data){
			     	_this.setState({
			     		jobData:_this.state.jobData.concat(data.content.data.page.result),
			     		page:_this.state.page+1,
			     		iptCon:_val
			     	})
			   	}
			});
			$(".searchRecordBox").css("display","none");
			$(".seaMore").css("display","block");
		}
	}
	checkCity(){
		var _city=$(".city").text();
		let _this=this;
		_this.setState({
			jobData:[]
		})
		$("td").each(function(idx,ele){
			$(ele).removeClass("clecked")
			if(_city==ele.dataset.item){
				$(ele).addClass("clecked")
			}
		})
		$(".cityBox").css("display","block")
	}
}
class SearchRecord extends Component {
	render(){
		return(
			<div className="searchRecord" >
				<span className="recordCon">{this.props.record}</span>
				<i className="iconfont icon-chuyidong"></i>
			</div>
		)
	}
}

export default Search;