import { Flex, Layout } from "antd";
import { HeaderOne } from "./HeaderOne";
import './Main.css';
import { Content } from "antd/es/layout/layout";
import { AllFooter } from "./AllFooter";
import { MailOutlined, XOutlined, TwitchOutlined } from '@ant-design/icons';


export const Main = () => {
    return <Layout className="layout-main">
        <HeaderOne/>
        <Content className="content">
            <div className="logo"/>
            <Flex justify="center" align="center" className="contacts" gap={ '5vw'} >
                <a href="https://www.twitch.tv/europeanproseries" target="_blank"><TwitchOutlined /></a>
                <a href="https://x.com/EuropeanSerie" target="_blank"><XOutlined /></a>
                <a href="mailto: europeanproseries@gmail.com"><MailOutlined/></a>
            </Flex>
        </Content>
        <AllFooter/>
    </Layout>;
};