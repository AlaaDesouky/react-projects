import styled from 'styled-components'

const Wrapper = styled.div`
/*
=============== 
Stripe Styles
===============
*/
.nav {
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  position: relative;
  z-index: 1;
}
.nav-center {
  width: 90vw;
  max-width: var(--max-width);
}
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  font-size: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius);
  border-color: transparent;
  color: white;
  background: var(--clr-black);
  cursor: pointer;
  transition: var(--transition);
}
.btn:hover {
  background: var(--clr-grey-5);
}
.nav-links {
  display: none;
}
.signin-btn {
  display: none;
}
.hero::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 65%;
  top: 0;
  left: 0;
  background: url(../stripe-images/hero.svg);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
}
.hero {
  position: relative;
  min-height: 100vh;
  margin-top: -5rem;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.hero-center {
  width: 90vw;
  max-width: var(--max-width);
  display: grid;
  align-items: center;
}

.hero-info h1 {
  text-transform: none;
  max-width: 500px;
  margin-bottom: 2rem;
}
.hero-info p {
  max-width: 35em;
  line-height: 1.8;
}
.hero-images {
  display: none;
}

/* nav media query */
@media screen and (min-width: 800px) {
  .nav-center {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
  }
  .toggle-btn {
    display: none;
  }
  .signin-btn {
    display: inline-block;
  }
  .nav-links {
    display: block;
    justify-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    height: 100%;
    display: grid;
    align-items: center;
  }
  .nav-links li {
    height: 100%;
  }
  .link-btn {
    height: 100%;
    background: transparent;
    border-color: transparent;
    font-size: 1.1rem;
    color: white;
    text-transform: capitalize;
    letter-spacing: 1px;
    width: 10rem;
  }
}

/* hero media query */
@media screen and (min-width: 800px) {
  .hero::before {
    background-size: contain;
    height: 100%;
  }
  .hero-center {
    grid-template-columns: 2fr 1fr;
  }

  .hero-info h1 {
    font-size: 3rem;
  }
  .hero-info p {
    font-size: 1.25rem;
  }
  .hero-images {
    display: block;
    justify-self: center;
  }
  .phone-img {
    width: 12rem;
  }
}

@media screen and (min-width: 1200px) {
  .hero-center {
    grid-template-columns: 2fr 1fr;
    align-items: end;
    padding-bottom: 12vh;
  }
  .hero-info h1 {
    max-width: 100%;
    font-size: 5.5rem;
  }
  .hero-images {
    align-self: end;
  }
  .phone-img {
    width: 15rem;
  }
}
@media screen and (min-width: 1400px) {
  .hero-center {
    padding-bottom: 20vh;
  }
  .phone-img {
    width: 17rem;
  }
}

/* sidebar */
.sidebar-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  z-index: -1;
  transition: var(--transition);
  transform: scale(0);
  background: rgba(0, 0, 0, 0.5);
}
.sidebar-wrapper.show {
  visibility: visible;
  z-index: 2;
  transform: scale(1);
}
.sidebar {
  width: 90vw;
  height: 95vh;
  max-width: var(--fixed-width);
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--dark-shadow);
  position: relative;
  padding: 4rem 2rem;
}
.close-btn {
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-grey-5);
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}
.sidebar article {
  margin-bottom: 2rem;
}
.sidebar-sublinks {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.25rem;
}
.sidebar-sublinks a {
  display: block;
  color: var(--clr-grey-1);
  text-transform: capitalize;
  display: flex;
  align-items: center;
}
.sidebar-sublinks svg {
  color: var(--clr-grey-5);
  margin-right: 1rem;
}

@media screen and (min-width: 800px) {
  .sidebar-wrapper {
    display: none;
  }
}

/* links */
.submenu {
  background: var(--clr-white);
  box-shadow: var(--dark-shadow);
  position: absolute;
  top: 8.4rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: none;
  padding: 2rem;
  border-radius: var(--radius);
  transition: var(--transition);
}
.submenu::before {
  content: '';
  display: block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid var(--clr-white);
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
}

.submenu.show {
  display: block;
}

.submenu-center {
  display: grid;
  gap: 0.25rem 2rem;
}
.col-2 {
  grid-template-columns: repeat(2, 1fr);
}
.col-3 {
  grid-template-columns: repeat(3, 1fr);
}
.col-4 {
  grid-template-columns: repeat(4, 1fr);
}
.submenu h4 {
  margin-bottom: 1.5rem;
}
.submenu-center a {
  width: 10rem;
  display: block;
  color: var(--clr-grey-1);
  text-transform: capitalize;
  display: flex;
  align-items: center;
}
.submenu-center svg {
  color: var(--clr-grey-5);
  margin-right: 1rem;
}

`

export default Wrapper