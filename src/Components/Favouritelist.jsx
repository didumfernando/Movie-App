import React from "react";
import {Col, Row, Card} from 'antd';

const Favouritelist = () => {
    return(
        <Row gutter = {{xs:8, sm: 16, md:24,lg:32}}>
            <Col xs={24} sm={24} md={12} lg={6} xl ={6}>
                <Card   
                    hoverable
                    style={{width:240}}
                    cover = {<img  src ="https://i2.wp.com/raisingwhasians.com/wp-content/uploads/2015/06/Ant-Man-Avengers-movie-poster.jpg" />}
                />
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl ={6}>
                <Card   
                    hoverable
                    style={{width:240}}
                    cover = {<img  src ="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/wjnhpz3osrai5aningjl/titanic?fimg-client-default" />}
                />
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl ={6}>
                <Card   
                    hoverable
                    style={{width:240}}
                    cover = {<img  src ="https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5" />}
                />
            </Col>
            <Col xs={24} sm={24} md={12} lg={6} xl ={6}>
                <Card   
                    hoverable
                    style={{width:240}}
                    cover = {<img  src ="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg" />}
                />
            </Col>

            
        </Row>
    )
}
export default Favouritelist;