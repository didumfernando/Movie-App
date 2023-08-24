import React, {useState, useEffect} from "react";
import {Col, Row, Card, Button} from 'antd';
import data from '../Data/movies.json';
const { Meta } = Card;


const Movielist = (props) => {
    const [movies, setMovies] = useState(props.movies)
    const [search, setSearch] = useState(props.searchValue)
    const [filtermovies, setFiltermovies] = useState([])

    useEffect(()=>{
       console.log('props',props.movies) 
    },[])
    
 
    return(
        <Row gutter={[16, 16]}>
            {movies?.map((data) =>
              <Col span={6} key={data.rank}>
                   <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={data.image} />}
                    >
                    <Meta title={data.title} description={data.description} />
                    </Card>
                </Col>
            )
            }
           
           
        </Row>
    )
}
export default Movielist;
