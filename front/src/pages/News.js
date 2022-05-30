import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Context } from '../index';
import NewsList from '../components/newsList';
import { fetchNews } from '../http/newsAPI';

const  News = observer(() => {
    const {news} = useContext(Context)

    useEffect(() => {
        fetchNews().then(data => news.setNews(data))
    }, [])

    return (
        <Container>
            <NewsList/>
        </Container>
    );
});

export default News;