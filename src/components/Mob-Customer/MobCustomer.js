import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class MobCustomer extends Component {
  handleClick = () => {
    document.body.style.overflow = 'scroll';
  }
  render() {
    const {list_of_navbar_items} = this.props;
    return (
      <ul>
        {list_of_navbar_items.map((item, index) => {
          return (
            <li key={index}>
              {
                !item.target && <Link className="link" to={item.path} onClick={this.handleClick}>
                {item.name}
                </Link>
              }
              {
                item.target && <a href={item.path} className='link' rel="noopener" target="_blank">{item.name}</a>
              }
            </li>
          )
        })
}
        <li>
          <Link className="link" to="/demo" onClick={this.handleClick}>
            <button className="safemeet-btn">{this.props.btn}</button>
          </Link>
        </li>
      </ul>
    )
  }
}
