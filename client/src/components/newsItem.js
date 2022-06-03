import React from "react";
import { Card } from "react-bootstrap";
import {useNavigate} from 'react-router-dom'
import { NEWS_ROUTE } from "../utils/consts";


const NewsItem = ({news}) => {
    const navigate = useNavigate()
    return (
        <Card border="dark" className="pt-1 mt-3 " style={{ width: '950px' }} onClick={() => navigate.push(NEWS_ROUTE + '/' + news.id)}>
        <Card.Header><div>{news.Author ? news.Author.email : ''}</div></Card.Header>
        <Card.Body>
          <Card.Title><div>{news.title}</div></Card.Title>
          <Card.Text>
            <div>{news.text}</div>
          </Card.Text>
        </Card.Body>
      </Card>  
    )
};

export default NewsItem;