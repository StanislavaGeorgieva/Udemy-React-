import reactImg from "./assets/react-core-concepts.png";
import { CoreConcept } from "./components/CoreConcept.jsx";
import components from "./assets/components.png";
import { CORE_CONCEPTS } from "./data.js";


const reactDescripton = ["Fundamental", "Crucial", "Core", "Essential"];


function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {

  const description = reactDescripton[genRandomInt(3)]
  return (<header>
    <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>)
}


function App() {
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
      </main>
    </div>
  );
}

export default App;
