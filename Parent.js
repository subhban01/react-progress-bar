import React from 'react';
import ReactProgressBar from './ReactProgressBar';



export default class Parent extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			
		}
	}

   render() {
      return (
         <div style={{border: '1px solid black'}}>
         	<ReactProgressBar percent={10} theme={'theme1'}/>
            <ReactProgressBar percent={90}/>
         </div>
      );
   }
}