import React from 'react';
import styled from 'styled-components'
import {FooterWrapper,FooterContent,Logo,EndDetails} from './Footer.styled'

function Footer() {
    return (
        <div>

            <FooterWrapper>
                    <FooterContent>

                        <EndDetails>
                        <p style={{fontSize:"24px",lineHeight:"21px"}}>Follow us on</p>
                        </EndDetails>
                        <Logo>
                            <img src='./images/facebook.svg' style={{padding:"10px"}}/>
                            <img src='./images/instagram.svg' style={{padding:"10px"}}/>
                            <img src='./images/twitter.svg' style={{padding:"10px"}}/>
                            <img src='./images/pinterest.svg' style={{padding:"10px"}}/>
                        </Logo>
                        <EndDetails>
                        <href >About us</href>
                        <href >Contact us</href>
                        <href >Our Products</href>
                        <href >Privacy Policy</href>
                        <href > Careers</href>
                        </EndDetails>
                    </FooterContent>
                    
            </FooterWrapper>
        </div>
    )
}

export default Footer