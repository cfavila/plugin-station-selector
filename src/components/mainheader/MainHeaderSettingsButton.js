import React, { Component } from 'react';
import { VERSION, withTheme } from '@twilio/flex-ui';
import * as Flex from '@twilio/flex-ui';

import { withStyles } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import SettingsIcon from '@material-ui/icons/Settings';

import Drawer from '@material-ui/core/Drawer';
import AgentSettingsComponent from './settingsbutton/AgentSettingsComponent';

// define themes for the settings button
const StyledIconButton = withStyles((theme) => {
  console.log('=================');
  console.log('styled form theme', theme);
  return {
    label: {
      color: theme?.palette?.type === 'light' ? '#d4d4d4' : '#000000',
    },
  };
})(IconButton);

class MainHeaderMenuButton extends Component {
  constructor(props) {
    super(props);
    this.init();
    this.state = {
      showMenu: false,
      width: '750px',
    };
    this.handleClick = this.handleClick.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  init() {}

  componentWillMount(props) {}

  //  handler to show the agent settings
  handleClick = (event) => {
    console.log(event.currentTarget);
    //   this.setState({ anchorEl: event.currentTarget });
    this.setState({ showMenu: true });
  };

  //    set state for visibility of right side settings drawer
  toggleDrawer() {
    this.setState({ showMenu: false });
  }

  render() {
    let layout = (
      <div>
        <StyledIconButton
          // style={styles.button}
          aria-label='transfer'
          onClick={this.handleClick}
        >
          <SettingsIcon />
        </StyledIconButton>

        <Drawer
          anchor={'right'}
          open={this.state.showMenu}
          onClose={this.toggleDrawer}
          width='auto'
        >
          <AgentSettingsComponent manager={this.props.manager} />
        </Drawer>
      </div>
    );

    return layout;
  }
}

const styles = {
  wrapper: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  content: { width: '100%' },
  title: { fontSize: '12pt', fontWeight: 'bold' },
  txtSmall: { fontSize: '10pt' },

  transferButton: { marginTop: 10, marginRight: 10 },
};

export default withTheme(MainHeaderMenuButton);
