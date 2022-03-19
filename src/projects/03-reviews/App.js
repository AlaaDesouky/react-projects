import Wrapper from './AppWrapper';
import Review from './Review';
function App() {
  return (
    <Wrapper>
      <main>
        <section className="container">
          <div className="title">
            <h2>our reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
    </Wrapper>
  )
}

export default App;
