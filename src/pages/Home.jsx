import React from 'react';
import SVGslider from '../components/SVGslider';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <SVGslider />
      </div>
      <div className="w-full md:w-1/2 flex flex-col relative top-24 ">
        <div className="mb-6">
          <Welcome />
        </div>
        <div>
          <p style={{color: '#333333', fontWeight: '100'}} className="text-lg leading-[2.5] md:w-4/5 mt-12">
          At Bloggi, we're excited to offer you a wide range of free, engaging content. Discover the latest trends, practical tips, and inspiring stories all in one place. Our goal is to provide you with valuable insights and enjoyable reads without any cost. Explore our articles, join our vibrant community, and let us be your go-to source for quality content. Enjoy your journey with Bloggi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
