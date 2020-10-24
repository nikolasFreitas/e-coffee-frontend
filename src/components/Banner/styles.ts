import styled from 'styled-components';

export const BannerImage = styled.div<{ src: string; }>`
  position: relative;
  width: 100%;
  height: 20vw;
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 1200px) {
    height: calc(300px + 5vw);
  }
`;

export const BannerCaption = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(
    to top right, 
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3)
  );
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 2rem;
  padding-bottom: .5rem;
`;