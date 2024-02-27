// Filename - components/Footer/Footer.js

import React from "react";
import {
    Box,
    FooterContainer,
    Row,
    Column,
    Heading,
} from "./FooterStyles";

import logo from '../../Logo.png';

const Footer = () => {
    return (
        <Box>

            <FooterContainer>
                <Row>
                    <Column>
                        <Heading><img src={logo} alt="logo" /> </Heading>


                    </Column>
                    <Column>

                    </Column>
                    <Column>

                    </Column>
                    <Column>
                        <p style={{
                            color: "white"
                        }}> © 2023 RIMAC Seguros y Reaseguros.</p>

                    </Column>

                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;