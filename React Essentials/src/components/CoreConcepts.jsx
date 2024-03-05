import { CORE_CONCEPTS } from "../data.js"
import CoreConcept from './CoreConcept.jsx';
import Section from "./Section.jsx";

export default function CoreConcepts(){

<Section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept title="Components"
          description='The core UI building block.'
          image= {componentImg}
          /> */}

            {/* <CORE_CONCEPTS title={CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          /> */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem} {...conceptItem}/>
            ))}
          </ul>
        </Section>
}
