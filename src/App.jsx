import Section from './components/Section/Section';
import PaingingList from './components/PaingingList';
import Colorpicker from './components/ColorPicker/ColorpPicker';
import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import paintings from './paintings.json';
import Counter from './components/Counter';
import Dropdown from './components/Dropdown/Dropdown';

const ColorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <>
      <Section title="Состояние компонента">
        <Container>
          <Counter />
        </Container>
      </Section>
      <Section title="Dropdown">
        <Dropdown />
      </Section>
      <Section>
        <Container>
          <Colorpicker options={ColorPickerOptions} />
        </Container>
      </Section>
      <Section title="Alert">
        <Container>
          <Alert text="Шеф, все пропало!" type="success" />
          <Alert text="Шеф, все пропало!" type="warning" />
          <Alert text="Шеф, все пропало!" type="error" />
        </Container>
      </Section>
      <Section title="Paintings">
        <Container>
          <PaingingList items={paintings} />
        </Container>
      </Section>
      */
    </>
  );
};

export default App;
