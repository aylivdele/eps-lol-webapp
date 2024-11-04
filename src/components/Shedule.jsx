import { Flex, Layout } from "antd";
import { HeaderTwo } from "./HeaderTwo";
import './Shedule.css';
import { Content } from "antd/es/layout/layout";
import { AllFooter } from "./AllFooter";
import { useCallback, useEffect, useMemo, useState } from "react";

const teams = [
    {
        title: 'TEAM SPECTRAL',
        className: 'ts',
    },
    {
        title: 'ARCANE BEAST',
        className: 'ab',
    },
    {
        title: 'DEMONIC EMPIRE',
        className: 'de',
    },
    {
        title: 'PHOENIX RISING',
        className: 'sf',
    },
    
    {
        title: 'JINDO ESPORTS',
        className: 'je',
    },
    {
        title: 'PRIME GODS',
        className: 'pg',
    },
    {
        title: 'GRIZZLY GAMING',
        className: 'gg',
    },
    {
        title: 'HUNTERS',
        className: 'ht',
    },
];

export const Shedule = () => {
    const [days, setDays] = useState([]);
    useEffect(() => {
        fetch('shedule.json')
            .then(response => response.json())
            .then(setDays);
    }, []);

    return <Layout className="layout-shedule">
        <HeaderTwo/>
        <Content className="content">
            <Flex className="flex" justify="center" align="center" gap={ '2vh' } vertical>
                {
                    days.map((day, index) => (
                        <Flex align="center" justify="center" vertical key={ index } className="container">
                            <Flex align="center" justify="center" gap={ '5%' } className="day-container">
                                <div className="day">{ day.day }</div>
                                <div className="line"/>
                                <div className="date">{day.date}</div>
                            </Flex>
                            <Flex vertical gap={ '2vh' } align="center" className={'games'}>
                                {
                                    day.games.map((game, index) => (
                                        <Flex className="game" key={ index } justify="space-around" align="center">
                                            <Flex align="center" justify="center" className="team" gap={ '5%'}>
                                                <div className={ `logo ${ teams.find(team => team.title === game.leftTeam)?.className }` }/>
                                                <div className="title">{ game.leftTeam }</div>
                                            </Flex>
                                            <Flex justify="center" align="center" className="time">{game.time}</Flex>
                                            <Flex align="center" justify="center" className="team" gap={ '5%'}>
                                                <div className="title">{ game.rightTeam }</div>
                                                <div className={ `logo ${ teams.find(team => team.title === game.rightTeam)?.className }` }/>
                                            </Flex>
                                        </Flex>
                                    ))
                                }
                                
                            </Flex>
                        </Flex>
                    ))
                }
                
            </Flex>
        </Content>
        <AllFooter/>
    </Layout>; 
};