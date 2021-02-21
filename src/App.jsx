import Section from './components/Section';
import PaingingList from './components/PaingingList';
import Colorpicker from './components/ColorPicker/ColorpPicker';
import Alert from './components/Alert/Alert';
import paintings from './paintings.json';

const ColorPickerOptions = [
  { lable: 'red', color: '#F44336' },
  { lable: 'green', color: '#4CAF50' },
  { lable: 'blue', color: '#2196F3' },
  { lable: 'grey', color: '#607D8B' },
  { lable: 'pink', color: '#E91E63' },
  { lable: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <div>
      <Section>
        <Alert text="Шеф, все пропало!" type="success" />
        <Alert text="Шеф, все пропало!" type="warning" />
        <Alert text="Шеф, все пропало!" type="error" />
        <Colorpicker options={ColorPickerOptions} />
        <PaingingList items={paintings} />
      </Section>
    </div>
  );
}
