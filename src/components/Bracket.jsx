import { Flex, Layout } from "antd";
import { HeaderTwo } from "./HeaderTwo";
import './Bracket.css';
import { Content } from "antd/es/layout/layout";
import { AllFooter } from "./AllFooter";
import { useEffect, useRef, useState } from "react";

const teamsB = [
    {
        title: 'TEAM SPECTRAL',
        className: 'ts',
        names: [
            '[TS] WRAITH',
            '[TS] KAIRO',
            '[TS] ELYSIUM',
            '[TS] YUTAPON',
            '[TS] CRANKO',
        ]
    },
    {
        title: 'ARCANE BEAST',
        className: 'ab',
        names: [
            '[AB] RAVAGE',
            '[AB] LUPINE',
            '[AB] SHIROWOLF',
            '[AB] RIFTHOUND',
            '[AB] SNARL',
        ]
    },
    {
        title: 'DEMONIC EMPIRE',
        className: 'de',
        names: [
            '[DE] CELESTIA',
            '[DE] FLARE',
            '[DE] JINWOO',
            '[DE] LUNAR',
            '[DE] AKIRA',
        ]
    },
    {
        title: 'PHOENIX RISING',
        className: 'sf',
        names: [
            '[SF] SHADOWFLASH',
            '[SF] DARKUNIQ',
            '[SF] GODWEBO',
            '[SF] YUREI',
            '[SF] SJEDOW',
        ]
    },
];

const teamsA = [
    
    {
        title: 'JINDO ESPORTS',
        className: 'je',
        names: [
            '[JE] TAEYANG',
            '[JE] SOL1DSNAKE',
            '[JE] YUNHO',
            '[JE] KWANGWEBO',
            '[JE] DAJEUNG',
        ]
    },
    {
        title: 'PRIME GODS',
        className: 'pg',
        names: [
            '[PG] DAEJEON',
            '[PG] FROSTRAVEN',
            '[PG] WISPI',
            '[PG] VALKYR',
            '[PG] SABLE',
        ]
    },
    {
        title: 'GRIZZLY GAMING',
        className: 'gg',
        names: [
            '[GG] AMAYANG',
            '[GG] KITSUSKY7',
            '[GG] NOTRAP',
            '[GG] 1INSANLTY',
            '[GG] KAZEEZ',
        ]
    },
    {
        title: 'HUNTERS',
        className: 'ht',
        names: [
            '[HT] BIGBADBUFFALO',
            '[HT] HIKARI',
            '[HT] C0LDMEMO',
            '[HT] FORGIVEN',
            '[HT] SILENTFANG',
        ]
    },
];

export const Bracket = () => {
    const [k, setK] = useState(0);
    const container = useRef(null);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            if (entries[0]) {
                const {width, height} = entries[0].contentRect;
                setK(width / height);
            }
        });
        observer.observe(container.current);
        return () => observer.disconnect();
    },[]);

    return <Layout className="layout-bracket">
        <HeaderTwo/>
        <Content className="content" ref={ container }>
            <Flex className="flex" justify="space-between">
                <Flex vertical gap={ '10%' } align="center" className={`group ${ k > 1 ? 'horizontal' : 'vertical' }`}>
                    <div className="group-name">GROUP A</div>
                    <Flex className="teams" vertical>
                        {
                            teamsA.map(team => (
                                <Flex 
                                    key={ team.title } 
                                    className={ 'team' } 
                                    align="center"
                                    justify="flex-start"
                                    gap={ '2vw'}
                                >
                                    <div className={`logo ${team.className}`}/>
                                    <div>{team.title}</div>
                                </Flex>
                            ))
                        }
                    </Flex>
                </Flex>
                
                <Flex vertical gap={ '10%' } align="center" className={`group ${ k > 1 ? 'horizontal' : 'vertical' }`}>
                    <div className="group-name">GROUP B</div>
                    <Flex className="teams" vertical>
                        {
                            teamsB.map(team => (
                                <Flex 
                                    key={ team.title } 
                                    className={ 'team' } 
                                    align="center"
                                    justify="flex-start"
                                    gap={ '2vw'}
                                >
                                    <div className={`logo ${team.className}`}/>
                                    <div>{team.title}</div>
                                </Flex>
                            ))
                        }
                    </Flex>
                </Flex>
            </Flex>
        </Content>
        <AllFooter/>
    </Layout>; 
};