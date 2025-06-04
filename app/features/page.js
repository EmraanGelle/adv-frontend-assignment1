import Counter from '../components/Counter';
import ToggleText from '../components/ToggleText';
import GreetingForm from '../components/GreetingForm';

export default function FeaturesPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h2>Features</h2>
      <Counter />
      <ToggleText />
      <GreetingForm />
    </main>
  );
}
