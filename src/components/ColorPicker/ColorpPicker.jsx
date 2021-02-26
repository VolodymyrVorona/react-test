import React, { Component } from 'react';
import './ColorPicker.css';

class Colorpicker extends Component {
  state = {
    actieOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ actieOptionIdx: index });
  };

  makeOptionClassName = index => {
    const { actieOptionIdx } = this.state;
    const optionClasses = ['ColorPicker__option'];

    if (index === actieOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { actieOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[actieOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Выбран цвет: {label}</p>

        <div>
          {options.map(({ label, color }, index) => (
            <span
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIdx(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Colorpicker;
