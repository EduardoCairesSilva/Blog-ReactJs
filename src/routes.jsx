import * as React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import "./index.css";
import PostCentralizarDiv from "./pages/PostCentralizarDiv";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" Element={<h1>Fodase</h1>} />
            <Route path="/aprenda-a-centralizar-uma-div" Element={<PostCentralizarDiv />} />
        </>
    )
);
export default routes;
