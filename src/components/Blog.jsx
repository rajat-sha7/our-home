import React from 'react';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      imgSrc: 'images/H1.png',
      title: 'Most popular design system to learn from in 2022',
      category: 'Design System',
      link: '#design-system',
    },
    {
      id: 2,
      imgSrc: 'images/H2.png',
      title: 'Understanding accessibility makes you a better',
      category: 'Accessibility',
      link: '#accessibility',
    },
    {
      id: 3,
      imgSrc: 'images/H3.png',
      title: '15 best tools that will help you build your website',
      category: 'Tech',
      link: '#tech',
    },
  ];

  return (
    <>
      <main className="w-full">
        <div className="max-w-[1140px] px-4 m-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-[14px] md:gap-[19px] text-center">
            <p className="text-[#1AD4D4]  md:leading-[24px] font-normal">
              Learn new technology
            </p>
            <h1 className="font-bold md:text-[48px] text-[30px] md:leading-[52.8px]">
              Read Our Blog
            </h1>
          </div>

          {/* Blog Cards */}
          <div className="pt-[50px] flex flex-wrap md:flex-nowrap gap-6 justify-center">
            {blogs.map((blog) => (
              <a
                key={blog.id}
                href={blog.link}
                className="flex flex-col max-w-[364px] w-full gap-4  rounded-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Blog Image */}
                <img
                  src={blog.imgSrc}
                  className="w-full h-auto rounded-t-md object-cover"
                  alt={blog.title}
                />

                {/* Blog Content */}
                <div className="p-4">
                  <h1 className="text-[20px] leading-[28px] font-bold text-[#060101] hover:text-[#1AD4D4] transition-colors duration-300">
                    {blog.title}
                  </h1>
                  <p className="text-[#1AD4D4] leading-[24px] font-normal mt-2 hover:underline">
                    {blog.category}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
