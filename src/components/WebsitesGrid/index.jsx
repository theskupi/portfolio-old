import React from 'react';
// import websitesJSON from '../../data/websites.json';
// import GridCard from './grid-card';
// import { WebsitesGridWrap } from './styles';
import './websitesGrid.scss';

const WebsitesGrid = () => {
  return (
    <div className="containerTest">
      <div className="rowTest">
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=191)' }}></div>
          <h2>Image 191</h2>
          <div className="slide">
            <p>Quam molestiae ipsa sapiente mollitia, nobis.</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=56)' }}></div>
          <h2>Image 56</h2>
          <div className="slide">
            <p>Autem possimus perspiciatis, eaque quos repudiandae modi labore sed repellat dolorum magnam praesentium expedita esse tempore saepe nulla.</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=101)' }}></div>
          <h2>Image 101</h2>
          <div className="slide">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="rowTest">
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=235)' }}></div>
          <h2>Image 235</h2>
          <div className="slide">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="rowTest">
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=60)' }}></div>
          <h2>Image 60</h2>
          <div className="slide">
            <p>Autem possimus perspiciatis, eaque quos repudiandae modi labore sed repellat dolorum magnam praesentium expedita esse tempore saepe nulla.</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=81)' }}></div>
          <h2>Image 81</h2>
          <div className="slide">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="rowTest">
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=35)' }}></div>
          <h2>Image 35</h2>
          <div className="slide">
            <p>Veritatis eos similique eveniet tempora.</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=262)' }}></div>
          <h2>Image 262</h2>
          <div className="slide">
            <p>Doloremque quisquam molestias, est laudantium vero aliquid dolorum inventore atque sint perferendis qui dolor voluptas consequuntur non.</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=264)' }}></div>
          <h2>Image 264</h2>
          <div className="slide">
            <p>Facere illo pariatur necessitatibus fugit quo impedit, quae, corporis placeat recusandae dolor ipsa nobis!</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=76)' }}></div>
          <h2>Image 76</h2>
          <div className="slide">
            <p>Quam molestiae ipsa sapiente mollitia, nobis.</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=111)' }}></div>
          <h2>Image 111</h2>
          <div className="slide">
            <p>Autem possimus perspiciatis, eaque quos repudiandae modi labore sed repellat dolorum magnam praesentium expedita esse tempore saepe nulla.</p>
          </div>
        </div>
        <div className="colTest">
          <div className="photo-container" style={{ backgroundImage: 'url(https://source.unsplash.com/600x250/?sig=156)' }}></div>
          <h2>Image 156</h2>
          <div className="slide">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // <WebsitesGridWrap>
  //   {websitesJSON.map((site) => (
  //     <GridCard pageData={site} key={site.id} />
  //   ))}
  // </WebsitesGridWrap>
};

export default WebsitesGrid;
