import { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

const Wrapper = styled.div`
    width:900px;
    height: 300px;
    background: ${Colors.white};
    display: flex;
    margin: 10px 0 10px;

`;
const CustomText = styled.p`
    padding: 0 0 0 10px ;
    color: ${Colors.white};
`;


const PictureText = styled.div`
    width: 300px;
    height: 300px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    

`;
const CustomAuthor = styled.div`
    display: flex;
    align-items: center;
`;

const Date = styled.p`
    margin: 10px 10px 10px 10px;
    color: ${Colors.white};
`;
const AuthorName = styled.p`
    color: ${Colors.white};    
`;

const TitleText = styled.p`
    margin: 10px;
    color: ${Colors.black};

`;
const InnerWrapper = styled.div`
    width: 500px;
`;

const Wrapper1 = styled.div`
    display: flex;
    margin: 10px;
`;
const SmallPicture = styled.img`
    width: 50px;
    height: 50px;
    background: blue;
`;
const SmallText = styled.p`
    padding: 10px;
`;

export const LatestPublications: FC = () => {
    return(
        <Wrapper>
           <PictureText>
               <CustomText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </CustomText>
                <CustomAuthor>
                    <Date>
                        Jun 7 2020
                    </Date>
                    <AuthorName>
                        John Doe
                    </AuthorName>
                </CustomAuthor>
            </PictureText> 
            <InnerWrapper>
                <TitleText>Latest publications</TitleText>
                <Wrapper1>
                    <SmallPicture/>
                    <SmallText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </SmallText>
                
                </Wrapper1>
            </InnerWrapper>
        </Wrapper>
    );
};