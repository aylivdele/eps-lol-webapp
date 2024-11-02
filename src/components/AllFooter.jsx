import { Flex } from "antd";
import { Footer } from "antd/es/layout/layout";
import './AllFooter.css';

export const AllFooter = () => (
    <Footer className="footer">
        <Flex justify="space-between" align="center" className="flex">
            <div className="l-logo"/>
            <Flex justify="space-around" align="center" className="lines">
                <div className="short-line"/>
                <div className="long-line"/>
            </Flex>
            <div className="ps-2024-logo"/>
            <Flex justify="space-around" align="center" className="lines">
                <div className="long-line"/>
                <div className="short-line"/>
            </Flex>
            <div className="dates">
                5 . 11&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;13 . 11
            </div>
        </Flex>
    </Footer>
)