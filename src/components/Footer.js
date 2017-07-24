import React ,{Component} from 'react';
import './Footer.css';
import {Link,IndexLink } from 'react-router'

class Footer extends Component{
	render(){
		return(
			<footer id="footer">
				<div className="contentBtn footerCBB">
					<IndexLink to="/" activeClassName="active" className="footerCB">
						<i className="iconfont icon-iconfontshouye1"></i>
						<p>职位</p>
					</IndexLink>
				</div>
				<div className="seachBtn footerCBB">
					<Link to="/seach" activeClassName="active" className="footerCB">
						<i className="iconfont icon-sousuo"></i>
						<p>搜索</p>
					</Link>
				</div>
				<div className="userBtn footerCBB">
					<Link to="/user" activeClassName="active" className="footerCB">
						<i className="iconfont icon-wode"></i>
						<p>我的</p>
					</Link>
				</div>
			</footer>
		)
	}
}

export default Footer