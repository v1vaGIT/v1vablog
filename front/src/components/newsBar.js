import { Context } from "../index";
import { Card, Row } from "react-bootstrap";
import { useContext } from "react";
import { observer } from "mobx-react-lite";

const newsBar = observer( () => {
    const {news} = useContext(Context)
    return (
        <div></div>
    );
});

export default newsBar;