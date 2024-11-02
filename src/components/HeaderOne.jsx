import { Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import './HeaderOne.css';

export const HeaderOne = () => (<Header className="header-one">
    <Flex justify="space-between" align="center" className="flex">
        <Flex className="left-image" align="center" gap={ '1vw' }>
            EPS
            <div className="long-line"/>
            <div className="short-line"/>
        </Flex>
        <div className="center-image"/>
        <Flex className="right-image" justify="end" align="center" gap={ '1vw' }>
            <div className="short-line"/>
            <div className="long-line"/>
            <div className="image"/>
        </Flex>
    </Flex>
</Header>);