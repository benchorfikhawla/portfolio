"use client";
import TretoLayout from "@/layout/TretoLayout";
import Link from "next/link";
import { useParams } from "next/navigation";
const blogs = [
  {
    id: 1,
    title: "Commodo Dolor a Bibendum",
    image: "/img/blog/1.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
  {
    id: 2,
    title: "Fringilla Ligula il Pharetra",
    image: "/img/blog/2.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
  {
    id: 3,
    title: "Morbi leo risus as porta eget",
    image: "/img/blog/3.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
  {
    id: 4,
    title: "Fringilla Ligula il Pharetra",
    image: "/img/blog/1.png",
    tags: ["Teamwork", "Nature", "Landscape"],
    date: "30 August - 2022",
  },
];
const page = () => {
  const id = Number(useParams().id);
  const blog = blogs.find((blog) => blog.id == id);
  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div className="mil-publication">
            <div
              className="mil-bg-item"
              style={{ bottom: "-2%", left: "5%" }}
            />
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-5">
                  <p className="mil-upper mil-mb-30">
                    <span className="mil-accent">
                      {blog.tags && blog.tags[0]}
                    </span>
                  </p>
                  <h2 className="mil-up mil-mb-60">{blog.title}</h2>
                  <div className="mil-post-cover mil-mb-60">
                    <img src={blog.image} alt="cover" />
                  </div>
                  <div className="mil-flex mil-mb-45">
                    <p className="mil-upper">Tags:</p>
                    <ul className="mil-tags">
                      {blog.tags.map((tag, i) => (
                        <li className="mil-upper" key={i}>
                          <a href="#">
                            <span className="mil-accent">#</span>
                            {tag}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mil-mb-90">
                    <p className="mil-mb-30">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </p>
                    <p className="mil-mb-30">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
                    </p>
                    <blockquote className="mil-mb-30">
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including
                    </blockquote>
                    blockquote&gt;
                    <p className="mil-mb-30">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
                    </p>
                    <p className="mil-mb-30">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
                    </p>
                    <ul className="mil-text-list mil-mb-30">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </li>
                      <li>
                        Enim ad minim veniam, quis nostrud exercitation ullamco.
                      </li>
                    </ul>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mil-pagination-panel">
                {blog.id == 1 ? (
                  <Link legacyBehavior href={`/blog/${blog.id}`}>
                    <a className="mil-button mil-type-2 mil-mb-30">
                      Previous Publication
                    </a>
                  </Link>
                ) : (
                  <Link legacyBehavior href={`/blog/${blog.id - 1}`}>
                    <a className="mil-button mil-type-2 mil-mb-30">
                      Previous Publication
                    </a>
                  </Link>
                )}
                {blog.id == blogs.length ? (
                  <Link legacyBehavior href={`/blog/${blog.id}`}>
                    <a className="mil-button mil-mb-30">Next Publication</a>
                  </Link>
                ) : (
                  <Link legacyBehavior href={`/blog/${blog.id + 1}`}>
                    <a className="mil-button mil-mb-30">Next Publication</a>
                  </Link>
                )}
              </div>
              <div className="row justify-content-between flex-sm-row-reverse">
                <div className="col-lg-6">
                  <h3 className="mil-up mil-mb-60">
                    <span className="mil-accent">5</span> Comments
                  </h3>
                  <ul className="mil-comments">
                    <li className="mil-comment mil-mb-60">
                      <div className="mil-comment-head">
                        <div className="mil-author">
                          <div className="mil-avatar">
                            <img
                              src="/img/faces/clients/1.jpg"
                              alt="portrait"
                            />
                          </div>
                          <div>
                            <h5 className="mil-up">Isla Davis</h5>
                            <p className="mil-text-sm">30 May, 2022</p>
                          </div>
                        </div>
                        <div className="mil-reply">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-corner-up-left"
                          >
                            <polyline points="9 14 4 9 9 4" />
                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                          </svg>
                        </div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.
                      </p>
                      <ul>
                        <li className="mil-comment mil-mb-30">
                          <div className="mil-comment-head">
                            <div className="mil-author">
                              <div className="mil-avatar">
                                <img
                                  src="/img/faces/clients/2.jpg"
                                  alt="portrait"
                                />
                              </div>
                              <div>
                                <h5 className="mil-up">David Anderson</h5>
                                <p className="mil-text-sm">30 May, 2022</p>
                              </div>
                            </div>
                            <div className="mil-reply">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-corner-up-left"
                              >
                                <polyline points="9 14 4 9 9 4" />
                                <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                              </svg>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </p>
                        </li>
                        <li className="mil-comment mil-mb-30">
                          <div className="mil-comment-head">
                            <div className="mil-author">
                              <div className="mil-avatar">
                                <img
                                  src="/img/faces/clients/4.jpg"
                                  alt="portrait"
                                />
                              </div>
                              <div>
                                <h5 className="mil-up">Harry Wilson</h5>
                                <p className="mil-text-sm">30 May, 2022</p>
                              </div>
                            </div>
                            <div className="mil-reply">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-corner-up-left"
                              >
                                <polyline points="9 14 4 9 9 4" />
                                <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                              </svg>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled.
                          </p>
                        </li>
                      </ul>
                    </li>
                    <li className="mil-comment mil-mb-60">
                      <div className="mil-comment-head">
                        <div className="mil-author">
                          <div className="mil-avatar">
                            <img
                              src="/img/faces/clients/3.jpg"
                              alt="portrait"
                            />
                          </div>
                          <div>
                            <h5 className="mil-up">Oscar Gagnon</h5>
                            <p className="mil-text-sm">30 May, 2022</p>
                          </div>
                        </div>
                        <div className="mil-reply">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-corner-up-left"
                          >
                            <polyline points="9 14 4 9 9 4" />
                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                          </svg>
                        </div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.
                      </p>
                    </li>
                    <li className="mil-comment mil-mb-60">
                      <div className="mil-comment-head">
                        <div className="mil-author">
                          <div className="mil-avatar">
                            <img
                              src="/img/faces/clients/4.jpg"
                              alt="portrait"
                            />
                          </div>
                          <div>
                            <h5 className="mil-up">Harry Wilson</h5>
                            <p className="mil-text-sm">30 May, 2022</p>
                          </div>
                        </div>
                        <div className="mil-reply">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-corner-up-left"
                          >
                            <polyline points="9 14 4 9 9 4" />
                            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                          </svg>
                        </div>
                      </div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled.
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-5">
                  <h3 className="mil-up mil-mb-60">Share a Comment</h3>
                  <div className="mil-comment-form">
                    <form>
                      <p className="mil-mb-30">
                        Your email address will not be published. <br />
                        Required fields are marked{" "}
                        <span className="mil-accent">*</span>
                      </p>
                      <label className="mil-upper">
                        Your full name <span className="mil-accent">*</span>
                      </label>
                      <input type="text" className="mil-mb-30" />
                      <label className="mil-upper">
                        Your email address <span className="mil-accent">*</span>
                      </label>
                      <input type="text" className="mil-mb-30" />
                      <label className="mil-upper">
                        Comment <span className="mil-accent">*</span>
                      </label>
                      <textarea className="mil-mb-30" defaultValue={""} />
                      <button type="submit" className="mil-button">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};
export default page;
