import styled from 'styled-components'

const Wrapper = styled.div`
/*
=============== 
Color Generator
===============
*/

.container {
  text-align: center;
  display: flex;
  align-items: center;
  height: 100px;
  padding-left: 2rem;
}
.container h3 {
  margin-bottom: 0;
  margin-right: 2rem;
}

input {
  border-color: transparent;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}
.btn {
  background: var(--clr-primary-5);
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-color: transparent;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  text-transform: capitalize;
  color: var(--clr-white);
  cursor: pointer;
}
@media screen and (max-width: 576px) {
  .container h3 {
    font-size: 1rem;
  }
  input,
  .btn {
    font-size: 0.85rem;
  }
}
input.error {
  border: 2px solid var(--clr-red-dark);
}
p.error{
  color: var(--clr-red-dark);
  margin: 0;
}

.colors {
  min-height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(223.33px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
}
.color {
  padding: 1rem 2rem;
  cursor: pointer;
  font-size: 1rem;
  text-transform: none;
}
.percent-value {
  margin-bottom: 0;
  color: var(--clr-grey-1);
}
.color-value {
  color: var(--clr-grey-1);
  margin-bottom: 0;
}
.color-light .color-value {
  color: var(--clr-white);
}
.color-light .percent-value {
  color: var(--clr-white);
}

.alert {
  text-transform: uppercase;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

`

export default Wrapper