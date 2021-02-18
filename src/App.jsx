import Section from './components/Section';
import PaingingList from './components/PaingingList';
import paintings from './paintings.json';

export default function App() {
  return (
    <>
      {/* <PaingingList items={paintings} /> */}
      <Section title="Топ тижня">
        <PaingingList items={paintings} />
      </Section>
      <Section>
        <PaingingList items={paintings} />
      </Section>
    </>
  );
}
