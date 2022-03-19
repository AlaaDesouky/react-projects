import React, { useState } from 'react';
import Wrapper from './AppWrapper'
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <Wrapper>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {
              questions.map((question) => {
                return <SingleQuestion key={question.id} {...question} />
              })
            }
          </section>
        </div>
      </main>
    </Wrapper>
  )
}

export default App;
