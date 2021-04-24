import { FC } from 'react';
import styled from 'styled-components';

const LeftMenuWrapper = styled.div``;
const LeftMenuInnerWrapper = styled.div``;
const ProfileInfo = styled.div``;
const ProfilePicture = styled.img``;
const JobTitleCompany = styled.p``;
const YourNetworkWrapper = styled.div``;
const YourPublicationsWrapper = styled.div``;
const CustomImg = styled.img``;

export const LeftMenu: FC = () => {

    return (

        <>LeftMenu
            <LeftMenuWrapper>
                <LeftMenuInnerWrapper>
                    <ProfileInfo>
                        <ProfilePicture src=""/>
                        <JobTitleCompany >Job title - Company</JobTitleCompany>
                    </ProfileInfo>
                    <YourNetworkWrapper>
                        <CustomImg src="../../media/icons/network.png"/>
                        <p>Your network</p>
                        <CustomImg src="../../media/icons/user-plus.png"/>
                    </YourNetworkWrapper>
                    <YourPublicationsWrapper>
                        <CustomImg src="../../media/icons/publications.png"/>
                        <p>Your Publications</p>
                        <CustomImg src="../../media/icons/plus.png"/>
                    </YourPublicationsWrapper>
                </LeftMenuInnerWrapper>
                

            </LeftMenuWrapper>
        </>

    );

};