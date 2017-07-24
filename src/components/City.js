import React, { Component } from 'react';
import './City.css';
import {hashHistory} from 'react-router';
import $ from 'jquery';

class City extends Component {
	constructor(){
		super();
		this.state={
			cityData:[
				{"热门城市":["北京","上海","广州","深圳","成都","杭州"]},
				{"ABCDEF":["保定",'北京','包头','长春','成都','重庆','长沙','常州','沧州','东莞','大连','东营','德阳','佛山','阜阳','福州']},
				{"GHIJ":['桂林','贵阳','广州','赣州','淮安','邯郸','哈尔滨','合肥','呼和浩特','海口','黄石','杭州','惠州','湖州','金华','九江','江门','济南','嘉兴','揭阳','晋中']},
				{"KLMN":['昆明','廊坊','拉萨','丽水','临沂','洛阳','连云港','兰州','柳州','泸州','茂名','绵阳','梅州','宁波','南昌','南充','南京','南宁','南通','南阳']},{"OPQR":['莆田','青岛','秦皇岛','清远','泉州','日照']},
				{"STUV":['韶关','上海','石家庄','汕头','绍兴','沈阳','三亚','深圳','苏州','泰安','天津','唐山','太原','台州','泰州']},
				{"WXYZ":['潍坊','武汉','芜湖','威海','乌鲁木齐','无锡','温州','西安','香港特别行政区','厦门','西宁','新乡','咸阳','徐州','盐城','银川','烟台','扬州','淄博','珠海','镇江','湛江','肇庆','中山','郑州','漳州','株洲']}
			]
		}
		this.handleClick=this.handleClick.bind(this)
	}
	handleClick(e){
		this.setState({
			city:$(e.target).text()
		})
		this.props.citycity(e.target.dataset.item)
		$(".cityBox").css("display","none")
		$(".searchRecordBox").css("display","block");
		$(".seaMore").css("display","none");
		
	}
	render(){
		let _cityData=this.state.cityData
		let list=_cityData.map(function(ele,idx){
			return <HotCity cityData={ele} key={idx}/>
		})
		return(
			<div className="cityBox" onClick={this.handleClick} data-city={this.state.city}>
				{list}
			</div>
		)
	}
}

class HotCity extends Component {
	render(){
		let _cityDataObj=this.props.cityData
		let hot=""
		for(let attr in _cityDataObj){
			hot=<div className="cities-header">{attr}</div>
		}
		return(
			<div>
				{hot}
				<UnderCity cityDataObj={_cityDataObj}/>
			</div>
		)
	}
}

class UnderCity extends Component {
	render(){
		let _cityObj=this.props.cityDataObj;
		let _cityArr=[];
		for(let attr in _cityObj){
			_cityArr=_cityObj[attr]
		}
		let list=_cityArr.map(function(ele,idx){
			return <td className="activeable cities-item" data-item={ele} key={idx}>{ele}</td>
		})
		return(
			<table className="cities-list">
				<tbody>
					<tr className="cities-list-item">
						{list}
					</tr>
				</tbody>
			</table>
		)
	}
}
export default City