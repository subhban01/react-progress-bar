import React from 'react';
import styles from './ReactProgressBar.scss';



export default class ReactProgressBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

	componentWillReceiveProps(nextState, nextProps){
		console.log(nextProps);
		this.refs.bar.style.width = this.props.percent+'%';
	}

	componentDidMount(){
		this.refs.bar.style.width = this.props.percent+'%';
	}

   render() {
   	let {percent, theme} = this.props;
      return (
         <div className={styles[`${theme} container`]}>
         	<div ref='bar' className={styles['bar']}></div>
         </div>
      );
   }
}