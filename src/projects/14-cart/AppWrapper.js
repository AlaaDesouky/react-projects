import styled from 'styled-components'

const Wrapper = styled.div`
.btn {
  text-transform: uppercase;
  background: var(--clr-primary-5);
  color: var(--clr-white);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 700;
  transition: var(--transition);
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
.btn:hover {
  color: var(--clr-primary-5);
  background: var(--clr-primary-light);
}

/*
=============== 
Navbar
===============
*/
.loading {
  text-align: center;
  margin-top: 5rem;
}
nav {
  background: var(--clr-primary-5);
  padding: 1.25rem 2rem;
}
.nav-center {
  max-width: var(--fixed-width);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav h3 {
  margin-bottom: 0;
  color: var(--clr-white);
}
.nav-container {
  display: block;
  position: relative;
}
nav svg {
  width: 2rem;
  fill: var(--clr-white);
}
.amount-container {
  position: absolute;
  top: -0.85rem;
  right: -0.85rem;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background: var(--clr-primary-light);
  display: flex;
  align-items: center;
  justify-content: center;
}
.total-amount {
  color: var(--clr-white);
  margin-bottom: 0;
  font-size: 1.25rem;
}
/*
=============== 
Cart
===============
*/
.cart {
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: var(--fixed-width);
}
.cart h2 {
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 3rem;
}
.empty-cart {
  text-transform: lowercase;
  color: var(--clr-grey-5);
  margin-top: 1rem;
  text-align: center;
}
.cart footer {
  margin-top: 4rem;
  text-align: center;
}
.cart-total h4 {
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
.clear-btn {
  background: transparent;
  padding: 0.5rem 1rem;
  color: var(--clr-red-dark);
  border: 1px solid var(--clr-red-dark);
  margin-top: 2.25rem;
  border-radius: var(--radius);
}
.clear-btn:hover {
  background: var(--clr-red-light);
  color: var(--clr-red-dark);
  border-color: var(--clr-red-light);
}
/*
=============== 
Cart Item
===============
*/
.cart-item {
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
}
.cart-item img {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
}
.cart-item h4 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  letter-spacing: 2px;
}
.item-price {
  color: var(--clr-grey-5);
}
.remove-btn {
  color: var(--clr-primary-5);
  letter-spacing: var(--spacing);
  cursor: pointer;
  font-size: 0.85rem;
  background: transparent;
  border: none;
  margin-top: 0.375rem;
  transition: var(--transition);
}
.remove-btn:hover {
  color: var(--clr-primary-light);
}
.amount-btn {
  width: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
}
.amount-btn svg {
  fill: var(--clr-primary-5);
}
.amount-btn:hover svg {
  fill: var(--clr-primary-light);
}
.amount {
  text-align: center;
  margin-bottom: 0;
  font-size: 1.25rem;
  line-height: 1;
}
hr {
  background: var(--clr-grey-5);
  border-color: transparent;
  border-width: 0.25px;
}

`
export default Wrapper