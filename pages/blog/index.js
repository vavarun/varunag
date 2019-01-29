import Head from 'next/head'
import NextLink from 'next/link'
import styled from 'styled-components'

import data from '../../data.json'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding-bottom: 70px;
`
const Heading = styled.h3`
  color: #969696;
  font-weight: 400;
  text-align: center;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #969696;
  transition: color 0.5s;
  margin: 10px;
  :hover {
    color: dimgrey;
  }
`
const Date = styled.h3`
  font-weight: 400;
  min-width: 130px;
  text-align: right;
  margin: 0;
  padding-right: 15px;
  border-right: 2px solid currentColor;
`
const Title = styled.h3`
  margin: 0;
  margin-left: 15px;
`
const Link = styled.a`
  text-decoration: none;
  color: dimgrey;
  transition: color 0.5s;
  cursor: pointer;
  :hover {
    color: black;
  }
`

function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Jonathan Wieben</title>
      </Head>
      <Container>
        <Heading>
          personal blog by{' '}
          <NextLink href="/" prefetch>
            <Link>Jonathan Wieben</Link>
          </NextLink>
        </Heading>
        <Wrapper>
          {data.blog.map(post => (
            <NextLink href={`/blog/${post.slug}`} key={post.slug} prefetch>
              <Row>
                <Date>{post.date}</Date>
                <Title>{post.title}</Title>
              </Row>
            </NextLink>
          ))}
        </Wrapper>
      </Container>
    </>
  )
}

export default Blog
