import { Flex, Layout } from "antd";
import { HeaderTwo } from "./HeaderTwo";
import './Teams.css';
import { Content } from "antd/es/layout/layout";
import { AllFooter } from "./AllFooter";
import { useEffect, useRef, useState } from "react";

const teams = [
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

export const Teams = () => {
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

    return <Layout className="layout-teams">
        <HeaderTwo/>
        <Content className="content">
            <Flex className="flex" justify="space-between" ref={ container }>
                {
                    teams.map(team => (
                        <Flex 
                        key={ team.title } 
                        className={ `${ k > 1 ? 'horizontal' : 'vertical' } team` } 
                        vertical
                        >
                            <div>{team.title}</div>
                            <div className={`logo ${team.className}`}/>
                            { team.names.map(name => (
                                <div key={name}>{name}</div>
                            ))}
                        </Flex>
                    ))
                }
            </Flex>
        </Content>
        <AllFooter/>
    </Layout>; 
};