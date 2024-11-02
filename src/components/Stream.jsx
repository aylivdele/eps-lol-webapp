import { Flex, Layout } from "antd";
import { HeaderOne } from "./HeaderOne";
import './Stream.css';
import { Content } from "antd/es/layout/layout";
import { AllFooter } from "./AllFooter";


export const Stream = () => {
    
    return <Layout className="layout-stream">
        <HeaderOne/>
            <Content className="content">
                <Flex align="center" vertical  className="flex">
                    <Flex align="center" vertical justify="center" className="center">
                        <div className="text-big">STREAM</div>
                        <div className="text-small">STARTING</div>
                    </Flex>
                    <a className="button" href="https://www.twitch.tv/europeanproseries" target="_blank"><div>LOOK</div></a>
                </Flex>
            </Content>
        <AllFooter/>
    </Layout>;
};