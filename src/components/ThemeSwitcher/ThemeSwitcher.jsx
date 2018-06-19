import { Component } from 'react';

export class ThemeSwitcher extends Component {
  state = {
    selectedTheme: Object.keys(this.props.themes).indexOf(
      this.props.defaultTheme
    )
  };

  selectNextTheme = event => {
    this.setState(state => ({
      ...state,
      selectedTheme:
        (state.selectedTheme + 1) % Object.keys(this.props.themes).length
    }));
  };

  render() {
    console.log(this.state.selectedTheme, this.props.themes);
    return this.props.children(
      this.props.themes[
        Object.keys(this.props.themes)[this.state.selectedTheme]
      ],
      this.selectNextTheme
    );
  }
}
