import React, { FC } from 'react';
import styled from 'styled-components';

import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper3 = styled(Wrapper)``;

const InnerWrapperMainPage = styled.div`
    display: flex;
    justify-content: center;
    background: LightCoral;
`;

const Content = styled.div`
    display: flex;
    width: 1200px;
    background: lightblue;
`;

const MainPage: FC = () => {
    return (
        <>
            <TopBar />
            <InnerWrapperMainPage>
                <Content>
                    <LeftMenu />
                    <div>content</div>
                </Content>
            </InnerWrapperMainPage>
        </>    
    );
};

export default MainPage;