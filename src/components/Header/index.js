import React from "react";

import Logo from "images/react-movie-logo.svg";
import TMDBLogo from 'images/tmdb_logo.svg';
import noImage from "images/no_image.jpg"
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={Logo} alt='rmdb-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper >
);

export default Header;