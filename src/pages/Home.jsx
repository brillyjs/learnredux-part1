import React from "react";
import Form from "../components/form";
import Header from "../components/header";
import Layout from "../components/layout";
import List from "../components/list";

const Home = () => {
    return (
        <Layout>
            <Header/>
            <Form/>
            <List/>
        </Layout>
    );
};

export default Home;