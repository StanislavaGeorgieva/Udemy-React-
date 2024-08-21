import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";


function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);}

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
    <TabButton onSelect={() =>handleSelect ('components')}>Component</TabButton>
    <TabButton onSelect={() =>handleSelect ('jsx')}>JXS</TabButton>
    <TabButton onSelect={() =>handleSelect ('props')}>Props</TabButton>
    <TabButton onSelect={() =>handleSelect ('state')}>State</TabButton>
          </menu>
          Dynamin contetnt goes here
        </section>
      </main>
    </div>
  );
}

export default App;
