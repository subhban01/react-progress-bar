import React from 'react';
import ReactProgressBar from './ReactProgressBar';
import styles from './Parent.scss';



export default class Parent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

   render() {
      return (
         <div style={{margin: '80px 200px'}}>
            <div className={styles['demo']}>Theme 1
               <ReactProgressBar percent={10} theme={'theme1'}/>
            </div>
            <div className={styles['demo']}>
               <ReactProgressBar percent={80} theme={'theme2'}/>
            </div>
            <div className={styles['demo']}>
               <ReactProgressBar percent={50} theme={'theme3'}/>
            </div>
            <div className={styles['demo']}>
               <ReactProgressBar percent={100} theme={'theme4'} length='40%'/>
            </div>
            <div className={styles['demo']}>
               <ReactProgressBar percent={90} theme={'theme5'}/>
            </div>
            <div className={styles['demo']}>
               <ReactProgressBar percent={50} theme={'theme6'}/>
            </div>
            <div className={styles['demo']}>
               <ReactProgressBar percent={50} theme={'theme7'} text='downloading..'/>
            </div>
         </div>
      );
   }
}