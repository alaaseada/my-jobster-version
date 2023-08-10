import { styled } from 'styled-components';
import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <Wrapper>
      <h2 className='logo'>Jobster</h2>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  .logo {
    letter-spacing: 0.5rem;
    color: var(--primary-color);
    padding: 0 20px;
  }
`;
