import styled from 'styled-components';

export const WebsitesContainer = styled.div`
  margin: 12rem 0;

  .websitesCol {
    overflow: hidden;
    position: relative;
    cursor: pointer;
  }

  .slide {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: all 0.275s ease-in-out, visibility 0s 0.275s;
    visibility: hidden;
    will-change: transform;
    transform: translateY(100%);
    cursor: pointer;
  }

  .websitesRow:hover ~ .websitesRow .slide {
    transform: translateY(-100%);
  }
  .websitesRow:hover .slide {
    transform: translateX(100%);
  }
  .websitesRow:hover .websitesCol:hover ~ .websitesCol .slide {
    transform: translateX(-100%);
  }
  .websitesRow:hover .websitesCol:hover .slide {
    transform: none;
    visibility: visible;
    transition-delay: 0s;
  }

  .websitesRow {
    display: flex;
  }

  .websitesCol {
    color: #fff;
    flex: 1 1 auto;
    min-height: 260px;
    position: relative;
  }

  .photo-container {
    background: #0f0523 50% 50% / cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: 1s;
    transform-origin: bottom right;
    background-position: top left;
  }
  /* .photo-container::before {
    background: linear-gradient(transparent, rgba(67, 17, 51, 0.5), #000320);
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  } */
  .websitesCol:hover .photo-container {
    transform: scale(1.25);
  }

  .slide {
    background: rgba(25, 1, 21, 0.8);
    padding: 0 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 2rem;
  }
`;
