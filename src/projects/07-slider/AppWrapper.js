import styled from 'styled-components'

const Wrapper = styled.div`
/*
=============== 
Slider
===============
*/
.title {
  text-align: center;
  margin-bottom: 2rem;
}
.title h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}
.title span {
  font-size: 0.85em;
  color: var(--clr-primary-5);
  margin-right: 1rem;
  font-weight: 700;
}
.section-center {
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  /* have to have a height */
  height: 450px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  overflow: hidden;
}
.person-img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
}
article h4 {
  text-transform: uppercase;
  color: var(--clr-primary-5);
  margin-bottom: 0.25rem;
}
.title {
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: var(--clr-grey-3);
}
.text {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--clr-grey-5);
}
.icon {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--clr-primary-5);
}
.prev,
.next {
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}
.prev:hover,
.next:hover {
  background: var(--clr-primary-5);
}
.prev {
  left: 0;
}
.next {
  right: 0;
}
@media (min-width: 800px) {
  .text {
    max-width: 45em;
  }
  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}
article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}
`

export default Wrapper