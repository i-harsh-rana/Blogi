import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SVGslider from '../components/SVGslider';
import Welcome from '../components/Welcome';

function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* SVGslider container */}
      <div className="flex justify-center items-center md:h-[800px] h-[400px]">
        <SVGslider />
      </div>

      {/* Welcome text container */}
      <div className="flex flex-col justify-center">
        <div className="mb-6 p-5 md:mt-40">
          <Welcome />
        </div>
        <div className="flex-1">
          <p className="text-lg md:text-xl p-7 md:pr-44 leading-loose  text-gray-800">
            At Bloggi, we're excited to offer you a wide range of free, engaging content. Discover the latest trends, practical tips, and inspiring stories all in one place. Our goal is to provide you with valuable insights and enjoyable reads without any cost. Explore our articles, join our vibrant community, and let us be your go-to source for quality content. Enjoy your journey with Bloggi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
