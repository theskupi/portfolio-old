import styled from 'styled-components';

export const WebsitesGridWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  /* grid-template-rows: masonry; */
  grid-gap: 1rem;

  margin: 12rem 0;
`;

export const WebsitesGridCard = styled.div`

`;


// export const WebsitesGridCol = styled.div`
// overflow: hidden;
//   position: relative;
// `
// export const WebsitesGriSlide = styled.div`
//  // Position inside column
//   position: absolute;
//   top: 0; right: 0; bottom: 0; left: 0;
//   transition: all 0.275s ease-in-out, visibility 0s 0.275s;
//   visibility: hidden;
//   will-change: transform;
//   // Slides start below their columns, giving upward motion on hover
//   transform: translateY(100%);
// `

// export const WebsitesGridRow = styled.div`
//   .row:hover {
//     // Next row, slides are above their columns, giving downward motion on hover
//     & ~ .row .slide {
//       transform: translateY(-100%);
//     }

//     // Current row, slides to the right of their columns, giving left motion on hover
//     .slide {
//       transform: translateX(100%);
//     }

//     // Current row, next slides, slides to the left of their columns, giving right motion on hover
//     & .col:hover ~ .col .slide {
//       transform: translateX(-100%);
//     }

//     // Current slide
//     .col:hover .slide {
//       transform: none;
//       visibility: visible;
//       transition-delay: 0s;
//     }
//   }
// `;

