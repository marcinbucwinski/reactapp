import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Entities } from '../Entities/Entities';
import { LatestPublications } from '../LatestPublications/LatestPublications';
import { Colors } from '../../styledHelpers/Colors';



{/*
const InnerWrapperMainPage = styled.div`
    display: flex;
    justify-content: center;
    background: LightCoral;
`;*/}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    
    width: 1200px;
    background: LightCyan;
`;

const MainPage: FC = () => {
{/*
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch<GetSomeData>(getSomeData('Coś'));
    }*/}
    return (
        <Router>
            <Wrapper>
                <TopBar />
                <Content>
                    <LeftMenu />
                    <Switch>
                        <Route path="/entities" exact>
                            <Entities />
                        </Route>
                        <Route path="/" exact>
                            <div>strona główna</div>
                            {/* <button onClick={clickHandler}>Kliknij mnie</button>*/}
                        </Route>
                        <Route path="/latestpublications" exact>
                            <LatestPublications />
                        </Route>
                    </Switch>
                </Content>
            </Wrapper>
        </Router>    
    );
};

export default MainPage;