import styled from 'styled-components'

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--clr-primary-5);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--clr-white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--light-shadow);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--clr-primary-5);
    box-shadow: var(--light-shadow);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--radius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-white);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    border-radius: var(--radius);
    margin-bottom: .2rem ;
  }
  .dropdown-btn:hover {
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    background-color: var(--clr-primary-7);
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }

  .btn {
  cursor: pointer;
  color: var(--clr-white);
  background: var(--clr-primary-5);
  border: transparent;
  border-radius: var(--radius);
  letter-spacing: var(--letterSpacing);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-transform: capitalize;
  display: inline-block;
}
.btn:hover {
  background: var(--clr-primary-7);
  box-shadow: var(--dark-shadow);
}
`
export default Wrapper
