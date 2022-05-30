import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import NewsItem from "./newsItem";
import {Row} from "react-bootstrap";
import { Context } from "../index";


const NewsList = observer( () => {
    const {news} = useContext(Context)
    return (
        <Row className="d-flex justify-content-center align-items-center">
            {news.news.map(news => 
                <NewsItem key={news.id} news={news}/>
            )};
        </Row>
    );
});

export default NewsList;