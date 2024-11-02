import { Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import './HeaderTwo.css';

export const HeaderTwo = () => (<Header className="header-two">
    <Flex justify="space-between" align="center" className="flex">
        <Flex className="left-part" align="start" vertical justify="space-between" gap={ '1vh' }>
            <Flex className="top" align="center" gap={ '1vw' }>
                EPS
                <div className="long-line"/>
                <div className="short-line"/>
            </Flex>
            <div className="bottom"/>
        </Flex>
        <div className="center-image"/>
        <Flex className="right-part" justify="space-between" align="start" vertical gap={ '1vh' }>
            <Flex className="top" justify="end" align="center" gap={ '1vw' }>
                <div className="short-line"/>
                <div className="long-line"/>
                <div className="image"/>
            </Flex>
            <div className="bottom"/>
        </Flex>
    </Flex>
</Header>);