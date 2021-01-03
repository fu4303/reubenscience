import PostLink from '@/components/PostLink'

import {main, heading, posts as postsStyle, postLink} from './styles'
import {errorCode, errorMessage} from './404.module.css'

import sortPosts from '@/src/sortPosts'

import * as postsFns from './posts/[slug].js'

export default function Home({posts}) {
  return (
    <>
      <main className={main}>
        <h1>
          <span className={errorCode}>4</span>
          <span className={errorCode}>0</span>
          <span className={errorCode}>4</span>
        </h1>
        <h2 className={errorMessage}>ngl idk where this page is</h2>

        <p className={heading}>Recent Posts</p>
        <section className={postsStyle}>
          {sortPosts(posts).map(props => <PostLink key={props.slug} {...props} className={postLink}/>)}
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    posts: await Promise.all((await postsFns.getStaticPaths()).paths.map(postsFns.getStaticProps).slice(0, 4))
  }
})
