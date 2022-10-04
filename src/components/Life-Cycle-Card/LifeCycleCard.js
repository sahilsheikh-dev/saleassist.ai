import React, { Component } from 'react';
import LifeCycleCard2 from '../LifeCycleCard2/LifeCycleCard2';

export default class LifeCycleCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      showSign:false
    }
  }
  
    handleClick = () => {
      console.log(this.props.index,this.props.CurrentIndex)   
      if(this.props.CurrentIndex === null){
        this.setState({showSign:true})
      }
      else{
        this.setState({showSign:false})
      }
        this.props.handleClick();
    }
    render() {
        return (
            <>
            <div onClick={this.handleClick} className="safemeet-life-cycle-card">
                <h4 className={`${this.props.className1} `}>
                  <div>{this.props.title}</div>
                  <div className='showsign'>{this.state.showSign ? this.props.signn : this.props.signp}</div>
                </h4>
                <p className={this.props.className2}>{this.props.details}</p>
            </div>
            <div className="safemeet-life-cycle-card-mob">
            { this.props.index === 0 && this.props.className1 && this.props.CustomerAq.map((item,index) => {
              return (<LifeCycleCard2
              key={index}
                image={item.image}
                title={item.title}
                details={item.details}
                alt={item.title}/>)
            })
}

            { this.props.index === 1 && this.props.className1 && this.props.CustomerEngagement.map(item => {
              return (<LifeCycleCard2
                image={item.image}
                title={item.title}
                details={item.details}
                alt={item.title}/>)
            })
}

            { this.props.index === 2 && this.props.className1 && this.props.CustomerSupport.map(item => {
              return (<LifeCycleCard2
                image={item.image}
                title={item.title}
                details={item.details}
                alt={item.title}/>)
            })
}

            { this.props.index === 3 && this.props.className1 && this.props.CustomerInsights.map(item => {
              return (<LifeCycleCard2
                image={item.image}
                title={item.title}
                details={item.details}
                alt={item.title}/>)
            })
}
            </div>
            </>
        )
    }
}
