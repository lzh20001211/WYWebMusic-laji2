import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '../../common/local-data';

import {SearchOutlined} from "@ant-design/icons"

import {Input} from "antd";

import {
    HeaderWrapper,
    HeaderLeft,
    HeaderRight
}from './style';

export default memo(function WYWebMusic() {

    const showSelectIten = (item, index) => {
        if(index < 1) {
            return (
                <NavLink to = {item.link}>{item.title}
                    <i className="sprite_01 icon"></i>
                </NavLink>
            )
        }else {
            return <a href = {item.link}>{item.title}</a>
        }
    }

    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href = '#/' className="logo sprite_01"> </a>
                    <div className = "select-list">
                        {
                            headerLinks.map((item,index) => {
                                return (
                                    <div key={item.title} className = "select-item">
                                        {showSelectIten(item, index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
                    <div className="center">创作者中心</div>
                    <div>登录</div>
                </HeaderRight>


            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})
