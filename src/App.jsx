import Section from './components/Section/Section';
import PaingingList from './components/PaingingList';
import Colorpicker from './components/ColorPicker/ColorpPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
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
    <>
      <Section title="Alert">
        <Container>
          <Alert text="Шеф, все пропало!" type="success" />
          <Alert text="Шеф, все пропало!" type="warning" />
          <Alert text="Шеф, все пропало!" type="error" />
        </Container>
      </Section>

      <Section title="Color Picker">
        <Container>
          <Colorpicker options={ColorPickerOptions} />
        </Container>
      </Section>

      <Section title="Paintings">
        <Container>
          <PaingingList items={paintings} />
        </Container>
      </Section>
    </>
  );
}
