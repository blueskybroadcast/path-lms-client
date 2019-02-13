import React from 'react';
import classNames from 'classnames';

class HeaderNavDropdown extends React.Component {
  state = {
    isOpen: false
  }

  handleDropdownOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <div
        className={classNames('item dropdown', this.state.isOpen && 'open')}
        onMouseEnter={this.handleDropdownOpen}
        onMouseLeave={this.handleDropdownOpen}
      >
        <a
          id="events-drop"
          role="button"
          className="dropdown-toggle"
          title="Events"
          href="/showroom/events"
        >
          <i className="icon icon-event" />
          &nbsp;Events&nbsp;
          <b className="caret" />
        </a>
        <ul className="dropdown-menu" role="menu">
          <li role="presentation">
            <a
              id="live-events"
              role="menuitem"
              tabIndex="-1"
              href="/showroom/events#live-events-content"
            >
              Live Events
            </a>
          </li>
          <li role="presentation">
            <a
              id="on-demand-events"
              role="menuitem"
              tabIndex="-1"
              href="/showroom/events#on-demand-events-content"
            >
              On-Demand Events
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default HeaderNavDropdown;
