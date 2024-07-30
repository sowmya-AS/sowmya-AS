import styles from "./Blogs.module.css";
import blogsData from "./blogsData";

const Blogs = () => {
  return (
    <section className={styles.blogsSection} id="blogs">
      <div className={styles.container}>
        <h2 className={styles.heading}>Blogs</h2>
        <div className={styles.blogsGrid}>
          {blogsData.map((blog) => (
            <div key={blog.id} className={styles.blogCard}>
              <div className={styles.imageContainer}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className={styles.blogImage}
                />
              </div>
              <h3 className={styles.blogTitle}>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.blogLink}
                >
                  {blog.title}
                </a>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
