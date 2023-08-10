import Logo from '../components/Logo';
import hero from '../assets/hero.svg';
import { styled } from 'styled-components';

const Landing = () => {
  return (
    <Wrapper>
      <header>
        <Logo />
      </header>
      <section>
        <article>
          <div className='w-2'>
            <h1>
              Job <span className='stressed'>Tracking</span> App
            </h1>
            <p>
              Crucifix narwhal street art asymmetrical, humblebrag tote bag
              pop-up fixie raclette taxidermy craft beer. Brunch bitters synth,
              VHS crucifix heirloom meggings bicycle rights.
            </p>
          </div>
          <div className='w-2'>
            <img src={hero} alt='jobs tracking app' className='hero' />
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.main`
  width: 90vw;
  margin: 2rem;

  article {
    display: flex;
  }
  .stressed {
    color: var(--primary-color);
  }
  .w-2 {
    width: 50%;
    padding: 20px;
  }
  .hero {
    width: 600px;
  }
`;
