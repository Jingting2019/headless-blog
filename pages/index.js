import { useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import moment from 'moment';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';

import { getPaginatedBlogs } from 'lib/api';
import { useGetBlogs } from 'actions';

export default function Home({blogs: initialData, preview}) {
  const [filter, setFilter] = useState({
    view: { list: 0 }
  });

  const { data: blogs, error } = useGetBlogs(initialData);


  return (
    <PageLayout>
      { preview && <PreviewAlert /> }
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {

          setFilter({...filter, [option]: value});
        }}
      />
      <hr/>
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        { blogs.map(blog =>
          filter.view.list ?
            <Col key={`${blog.slug}-list`} md="9">
              <CardListItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={moment(blog.date).format('LL')}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`
                }}
              />
            </Col>
            :
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                title={blog.title}
                subtitle={blog.subtitle}
                date={moment(blog.date).format('LL')}
                image={blog.coverImage}
                link={{
                  href: '/blogs/[slug]',
                  as: `/blogs/${blog.slug}`
                }}
              />
            </Col>
          )
        }
      </Row>
    </PageLayout>
  )
}

export async function getStaticProps({preview = false}) {
  const blogs = await getPaginatedBlogs({offset: 0, date: 'desc'});
  return {
    props: {
      blogs, preview
    }
  }
}
