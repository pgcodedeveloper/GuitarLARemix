import Post from './post'
import { ClientOnly } from 'remix-utils'

const ListadoBlogs = ({blogs,inicio=false}) => {
  return (
    <ClientOnly>
      {() => (
        <>
          {!inicio ? (
            <h2 className="heading">Nuestros Blogs</h2>
          ) : (
            <h2 className="heading">Blogs Destacados</h2>
          )}
          <div className="blog">
            {blogs?.map(blog => (
              <Post
                key={blog?.id}
                blog={blog?.attributes}
              />
            ))}
          </div>
        </>
      )}
    </ClientOnly>
  )
}

export default ListadoBlogs
