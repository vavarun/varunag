import Head from 'next/head'

import Document from '../../blog-posts/on-the-importance-of-simplicity.md'
import BlogPostWrapper from '../../components/BlogPostWrapper'

export default () => (
  <>
    <Head>
      <title>On The Importance Of Simplicity</title>
    </Head>
    <BlogPostWrapper>
      <Document />
    </BlogPostWrapper>
  </>
)
