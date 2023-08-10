import { styled } from 'styled-components';
import error_404 from '../assets/page_not_found.svg';

const Error = () => {
  return (
    <Wrapper>
      <img src={error_404} alt='The page you requested is not found' />
      <h4>The page you requested is not found</h4>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export default Error;
