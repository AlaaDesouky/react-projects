import styled from 'styled-components'

const Wrapper = styled.main`
  .page {
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--clr-primary-5);
    }
  }
  p {
    color: var(--clr-grey-6);
  }
  .main-img {
    display: block;
    max-width: 400px;
    width: 100%;
    min-height: 400px;
    object-fit: cover;
    opacity: .1;
    position: absolute;
    z-index: -1;
  }
    .btn {
  cursor: pointer;
  color: var(--clr-primary-5);
  letter-spacing: var(--letterSpacing);
  transition: var(--transition);
  text-transform: capitalize;
}
.cta-btn {
      background: transparent;
    border-color: transparent;
    font-size: 1.4rem;
    /* color: var(--clr-primary-5); */
    display: flex;
    align-items: center;
    text-transform: none;
}
.btn:hover {
  color: var(--clr-primary-7);
}
  @media (min-width: 992px) {
    .page {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      min-width:500px;
      opacity: 1;
      position: relative;
      /* max-width: 80% */
    }
  }
`
export default Wrapper
