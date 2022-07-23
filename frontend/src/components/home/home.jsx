import React from 'react'
import image1 from './../../images/blog/blog-01.jpg'
import image2 from './../../images/blog/blog-01.jpg'
import image3 from './../../images/blog/blog-01.jpg'
import image4 from './../../images/blog/blog-01.jpg'
import UNavbar from '../UNavbar'
import Creatorcard from '../Creatorcard'
const blogData = [
  {
    id: 1,
    image: image1,
    title: "Name",
    description:
      "Prototyping Tool Prototyping is a process that enables faster creativity and effective team.",
  },
  {
    id: 2,
    image: image2,
    title: "Name",
    description:
      "Wanna decorate your blog with photos? But don't have any photographic skills or fees to pay for photos?",
  },
  {
    id: 3,
    image: image3,
    title: "Name",
    description:
      "A landing page is a page designed to turn visitors into leads. It is separate from other pages on your...",
  },
  {
    id: 4,
    image: image4,
    title: "Name",
    description:
      "There is no doubt about the importance of Scalable Vector Graphics illustration today.",
  },
];



function home() {
  return (
    <div>
      <UNavbar />
      <div>
        <section className="pb-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 md:px-4">
        {blogData.map((blog, id) => (
          <Creatorcard blog={blog} key={id} />
        ))}
      </div>
    </section>
      </div>
    </div>
  )
}

export default home