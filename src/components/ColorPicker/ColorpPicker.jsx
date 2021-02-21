import s from './ColorPicker.module.css';

function Colorpicker({ options }) {
  return (
    <div className={s.container}>
      <div>
        {options.map(option => (
          <span
            key={options.color}
            className={s.option}
            style={{ backgroundColor: option.color }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Colorpicker;
