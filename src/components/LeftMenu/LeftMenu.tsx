import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const LeftMenuWrapper = styled.div`
    width: 250px;
    padding: 0px 10px;
`;
const LeftMenuInnerWrapper = styled.div`
    background: ${Colors.white};
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
`;
const ProfileInfo = styled.div`
  display: flex;  
  flex-direction: column;
  
`;
const ProfilePicture = styled.img`
    display: block;
    margin: 10px auto 10px auto ;
    width: 80px;
`;
const JobTitleCompany = styled.p`
    color: gray;
    size: 10
    text-align: center;
`;
const YourNetworkWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const YourPublicationsWrapper = styled.div`
    display: flex;
    align-items: center;
`;
const CustomImg = styled.img`
    margin: 5px;
`;
const HorizontalLine = styled.hr`
    border: 0.1px solid lightgray;
    margin: 15px 0px 5px 0px;
`;

const Publications = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 20px;
`;
const Ecosystem = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 20px;
`;
const Entities = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 20px;
`;

const NameSurname = styled.p`
    color: MidnightBlue;
    font-weight: bold;
`;

const linkStyle = {
    textDecoration: 'none',
    color: 'black',
};


export const LeftMenu: FC = () => {

    return (

        <>
            <LeftMenuWrapper>
                <LeftMenuInnerWrapper>
                    <ProfileInfo>
                        <ProfilePicture src="../../media/logo.png"/>
                        <NameSurname>Adam Smith</NameSurname>
                        <JobTitleCompany >Job title - Company</JobTitleCompany>
                    </ProfileInfo>
                    <HorizontalLine/>
                    <YourNetworkWrapper>
                        <CustomImg src="../../media/icons/network.png"/>
                        <Link to="/yournetwork" style={linkStyle}>Your network</Link>
                        
                        <CustomImg src="../../media/icons/user-plus.png"/>
                    </YourNetworkWrapper>
                    <YourPublicationsWrapper>
                        <CustomImg src="../../media/icons/publications.png"/>
                        <Link to="/yourpublications" style={linkStyle}>Your publications</Link>
                        
                        <CustomImg src="../../media/icons/plus.png"/>
                    </YourPublicationsWrapper>
                </LeftMenuInnerWrapper>
                <Publications>
                    <CustomImg src="../../media/icons/publications.png"/>
                    <Link to="/latestpublications" style={linkStyle}>Publications</Link> 
                </Publications>
                <Ecosystem>
                    <CustomImg src="../../media/icons/ecosystem.png"/>
                    <Link to="/ecosystem" style={linkStyle}>Ecosystem</Link> 
                </Ecosystem>
                <Entities>
                    <CustomImg src="../../media/icons/entities2.png"/>
                    <Link to="/entities" style={linkStyle}>Entities</Link>
                      
                </Entities>

            </LeftMenuWrapper>
        </>

    );

};