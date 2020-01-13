import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { IoIosAddCircleOutline, IoIosArrowUp } from "react-icons/io";
import Avatar from './Avatar';
import IsUpdatePathname from './IsUpdatePathname';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #eee;

  & .page-wrapper {
    flex: 1;
    overflow: scroll;
  }
`;

const LayoutHeader = styled.header`
  background: #24292e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 ${props => props.theme.space[2]};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

const LayoutHeaderSiteName = styled.div`
  font-size: ${props => props.theme.fontSizes['xl']};
  color: ${props => props.theme.colors['gray']};
  cursor: pointer;

  & strong {
    color: ${props => props.theme.colors['white']};
  }
`;

const LayoutHeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

const LayoutHeaderNavItem = styled.div`
  cursor: pointer;
  margin-right: ${props => props.theme.space[1]};
  width: 30px;

  &:hover {
    opacity: 0.8;
  }
`;

const LayoutPageWrapper = styled.div`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  overflow-y: scroll;
`;

const LayoutJumpTopButton = styled(IoIosArrowUp)`
  position: absolute;
  right: 40px;
  bottom: 30px;
  cursor: pointer;
  border-radius: 2px;
  padding: ${props => props.theme.space[0]};
  background: #21b5ff;
  color: ${props => props.theme.colors['white']}
  margin-left: ${props => props.theme.space[0]};

  &:hover {
    opacity: 0.7;
  }
`;

export default ({ children }) => {
    const scrollView = useRef(null);
    const history = useHistory();

    const scrollToTop = useCallback(isUpdatePathname => {
        if (isUpdatePathname) scrollView.current.scroll(0, 0);
    }, [scrollView]);
    const jumpToTop = useCallback(() => {
      scrollView.current.scroll(0, 0);
    }, []);
    const redirectHomePage = () => {
        history.replace('/');
    };
    const redirectSourcePage = () => {
        document.location = 'https://github.com/ywwwtseng/markdown-editor';
    };
    const redirectCreateMarkdownPage = () => {
        history.replace('/article/create');
    };

    return (
        <Layout>
            {/* <IsUpdatePathname isUpdate={scrollToTop} /> */}
            <LayoutHeader>
                <LayoutHeaderSiteName onClick={redirectHomePage}>
                    <strong>Markdown</strong>&nbsp;Editor
        </LayoutHeaderSiteName>
                <LayoutHeaderNav>
                    <LayoutHeaderNavItem onClick={redirectSourcePage}>
                        <FaGithub color="white" size={30}/>
                    </LayoutHeaderNavItem>
                    <LayoutHeaderNavItem onClick={redirectCreateMarkdownPage}>
                        <IoIosAddCircleOutline color="white" size={30}/>
                    </LayoutHeaderNavItem>
                    <Avatar size={30}/>
                </LayoutHeaderNav>
            </LayoutHeader>
            <LayoutPageWrapper ref={scrollView}>
                {children}
            </LayoutPageWrapper>
            <LayoutJumpTopButton size={25} onClick={jumpToTop}/>
        </Layout>
    );
};
