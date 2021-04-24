import { FC } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
import useDropdown from 'react-dropdown-hook';

const Wrapper2 = styled(Wrapper)`
    padding: 10px;
`;

const InnerWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 1200px;
    height: 45px;
    background: ${Colors.white};
`;

const RightIcons = styled.div`
    display: flex;
    align-items: center;
    color: red;
    //position: relative;
    //right: 10px;
`;

const InputWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 2px solid grey;
border-radius: 4px;
height: 30px; 
margin: 0px 20px 0px 20px;
`;

const CustomImg = styled.img`
    height: 22px;
    padding: 5px;
`;

const CustomImgCompany = styled.img`
    height: 30px;
    margin: 5px;
`;

const CustomInput = styled.input`
    border-style: hidden;
    outline: none;
`;

const MenuWrapper = styled.div`
display: flex;
align-items: center;
width: 200px;
`;

const LeftSide = styled.div` 
display: flex;
justify-content: space-evenly;
width: 100px;
`;

export const TopBar: FC = props => {
    const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();

    const menuHandler = () => {
        toggleDropdown();
    };

    return(
        <Wrapper2>
            <InnerWrapper>
                <CustomImgCompany src="../../media/logo.png" />
                

                <MenuWrapper ref={wrapperRef}>
                    <LeftSide onClick={menuHandler}>
                        <img src="../../media/icons/house2.svg" alt=""/>
                        <span>Home</span>
                    </LeftSide>
                    <img src="../../media/icons/arrow-down.png" alt=""/>
                    {dropdownOpen &&
                        <ExpandedMenu />
                    }    
                </MenuWrapper>

                  
                <div>
                    {props.children}
                </div>
                <InputWrapper>
                    <CustomInput type="text" placeholder="Search Legalcluster"/>
                    <CustomImg src="../../media/icons/search.png"/>
                </InputWrapper>
                <RightIcons>
                    <CustomImg src="../../media/icons/house.png" />
                    <CustomImg src="../../media/icons/comments.png" />
                    <CustomImg src="../../media/icons/bell.png" />
                </RightIcons>
            </InnerWrapper>
        </Wrapper2>
    );
};