import styled from 'styled-components'

const Wrapper = styled.div`
.btn {
  text-transform: uppercase;
  background: transparent;
  color: var(--clr-black);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  transition: var(--transition);
  font-size: 0.875rem;
  border: 2px solid var(--clr-black);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
}
.btn:hover {
  color: var(--clr-white);
  background: var(--clr-black);
}
/* section */
.section {
  padding: 5rem 0;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 35rem;
  margin-top: 8rem;
}
@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
/*
=============== 
Grocery List
===============
*/
.section-center {
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  padding: 2rem;
}
.section-center:hover {
  box-shadow: var(--dark-shadow);
}
.alert {
  margin-bottom: 1rem;
  height: 1.25rem;
  display: grid;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;
  border-radius: 0.25rem;
  letter-spacing: var(--spacing);
  text-transform: capitalize;
}
.alert-danger {
  color: #721c24;
  background: #f8d7da;
}
.alert-success {
  color: #155724;
  background: #d4edda;
}
.grocery-form h3 {
  color: var(--clr-primary-1);
  margin-bottom: 1.5rem;
  text-align: center;
}
.form-control {
  display: flex;
  justify-content: center;
}
.grocery {
  padding: 0.25rem;
  padding-left: 1rem;
  background: var(--clr-grey-10);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-color: transparent;
  font-size: 1rem;
  flex: 1 0 auto;
  color: var(--clr-grey-5);
}
.grocery::placeholder {
  font-family: var(--ff-secondary);
  color: var(--clr-grey-5);
}
.submit-btn {
  background: var(--clr-primary-8);
  border-color: transparent;
  flex: 0 0 5rem;
  display: grid;
  align-items: center;
  padding: 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  cursor: pointer;
  content: var(--clr-primary-5);
  transition: var(--transition);
  font-size: 0.85rem;
}
.submit-btn:hover {
  background: var(--clr-primary-5);
  color: var(--clr-white);
}

.grocery-container {
  margin-top: 2rem;
}

.grocery-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  transition: var(--transition);
  padding: 0.25rem 1rem;
  border-radius: var(--radius);
  text-transform: capitalize;
}
.grocery-item:hover {
  color: var(--clr-grey-5);
  background: var(--clr-grey-10);
}
.grocery-item:hover .title {
  color: var(--clr-grey-5);
}
.title {
  margin-bottom: 0;
  color: var(--clr-grey-1);
  letter-spacing: 2px;
  transition: var(--transition);
}
.edit-btn,
.delete-btn {
  background: transparent;
  border-color: transparent;
  cursor: pointer;
  font-size: 0.7rem;
  margin: 0 0.15rem;
  transition: var(--transition);
}
.edit-btn {
  color: var(--clr-green-light);
}
.edit-btn:hover {
  color: var(--clr-green-dark);
}
.delete-btn {
  color: var(--clr-red-light);
}
.delete-btn:hover {
  color: var(--clr-red-dark);
}
.clear-btn {
  text-transform: capitalize;
  width: 10rem;
  height: 1.5rem;
  display: grid;
  align-items: center;
  background: transparent;
  border-color: transparent;
  color: var(--clr-red-light);
  margin: 0 auto;
  font-size: 0.85rem;
  letter-spacing: var(--spacing);
  cursor: pointer;
  transition: var(--transition);
  margin-top: 1.25rem;
}
.clear-btn:hover {
  color: var(--clr-red-dark);
}

`

export default Wrapper