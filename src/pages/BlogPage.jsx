import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import dp from "../assets/dp.jpg";
import HashLoader from "react-spinners/HashLoader";

const BlogPage = () => {
  const [blogPost, setBlogPost] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchBlogPost = async () => {
      try {
        const res = await axios.get(
          `https://wander-blog-backend.vercel.app/api/blogs/${id}/`
        );
        setBlogPost(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (err) {
        console.log("error fetching data: ", err);
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen">
          <HashLoader color="#0e7490" />
        </div>
      </>
    );
  }
  return (
    <>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <img
                    className="mr-4 w-16 h-16 rounded-full"
                    src={dp}
                    alt="Jese Leos"
                  />
                  <div>
                    <a
                      href="/"
                      rel="author"
                      className="text-xl font-bold text-gray-900 dark:text-white"
                    >
                      {blogPost.author}
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Full Stack Developer at MuminBhat.com
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time>{blogPost.publish_time}</time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {blogPost.title}
              </h1>
            </header>
            <p className="lead">{blogPost.info}</p>
            <br />
            <figure>
              <img src={blogPost.image} className="rounded-3xl" alt="" />
              <br />
            </figure>
            <div dangerouslySetInnerHTML={{ __html: blogPost.content }}>
            </div>

            <br />
            <br />

        </article>
        </div>
      </main>
      <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <article className="max-w-xs">
              <a href="/">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png"
                  className="mb-5 rounded-lg"
                  alt="Image 1"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/">Our first office</a>
              </h2>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 2 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="/">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png"
                  className="mb-5 rounded-lg"
                  alt="Image 2"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/">Enterprise design tips</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 12 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="/">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png"
                  className="mb-5 rounded-lg"
                  alt="Image 3"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/">We partnered with Google</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 8 minutes
              </a>
            </article>
            <article className="max-w-xs">
              <a href="/">
                <img
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png"
                  className="mb-5 rounded-lg"
                  alt="Image 4"
                />
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                <a href="/">Our first project with React</a>
              </h2>
              <p className="mb-4  text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation.
              </p>
              <a
                href="/"
                className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
              >
                Read in 4 minutes
              </a>
            </article>
          </div>
        </div>
      </aside>

      <Newsletter />
    </>
  );
};

export default BlogPage;
