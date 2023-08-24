import React, {useState,useEffect} from "react";
import {Col, Row, Input, Layout, Card, Button} from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import Movies from './Movies';
import Searchbar from './Searchbar';
import Movielist from './Movielist';
import Favouritelist from './Favouritelist';
import Favourites from './Favourites';
import data from '../Data/movies.json';


const {Content} = Layout;
const {Search} = Input;
const{Meta} = Card;

var favouriteList = []
var test = []
const Home = () => {
    const [keyword,setKeyword] = useState()
    const [movies,setMovies] = useState()
    const [loading,setLoading] = useState(true)
    const [favloading,setfavLoading] = useState(true)
    const [favourites, setFavourites] = useState()
    

    
    useEffect(()=> {
        setfavLoading(true)
        console.log('hi',favourites)
    },[favourites])

    useEffect(()=> {
        setLoading(false)
        const getList = async () => {
            setMovies(data)
            setLoading(true)
        }
        getList()
    },[])
    
    const onSearch = (value) => {   
        setLoading(false)
        let filteredMovies = movies.filter((movie) => {
            return movie.title === value;
        });
        setMovies(filteredMovies)
        setLoading(true)
    }

    const onClick = (value) => {
        setMovies(data)
    }
   
    const addClick = (value) => {
        setfavLoading(false)
        test.push(value)
        console.log("test",test)
        setFavourites(test)
        console.log("favourites",favourites)
     
        



        // console.log("didum",favouriteList)
        // setfavLoading(false)
        // favouriteList.push(value)
        // setFavourites(favouriteList)
        // setfavLoading(true)  
    }

    
    return(
        <Layout className = "layout">
            <Content style = {{ padding: '0 50px'}}>
                <div className = "site-layout-content">
                    <Row gutter = {{xs:8, sm: 16, md:24,lg:32}}>
                        <Col xs={24} sm={24} md={12} lg={12} xl ={12}><Movies/></Col>
                        <Col xs={24} sm={24} md={10} lg={10} xl ={10}>
                           {/* <Searchbar /> */}
                           <Search 
                            style = {{marginTop: 10, marginBottom:10}}
                            placeholder = "Search movies here" enterButton 
                            onSearch={onSearch}/>
                        </Col>
                        <Col xs = {24} sm={24} md={2} lg={2} xl= {2}>
                                <Button 
                                style ={{marginTop:10, marginBottom:10}}
                                type="primary" shape="circle"
                                onClick={onClick} icon={ <RedoOutlined /> }>
                                </Button>    
                        </Col>
                    </Row>
                   
                    {loading && movies &&
                         <Row gutter={[16, 16]}>
                         {movies?.map((data) =>
                           <Col span={6} key={data.rank}>
                                <Card
                                 hoverable
                                 style={{ width: 240 }}
                                 cover={<img alt="example" src={data.image} />}
                                 >
                                 <Meta title={data.title} description={data.description} />
                                 <Button
                                 style= {{marginTop:10}}
                                 onClick={() => addClick(data)}>
                                Add</Button>
                                 </Card>
                             </Col>
                         )
                         }
                        
                        
                        </Row>
                        // <Movielist movies={movies}/>
                    }
                    {favourites &&
                    <div>
                    <Row gutter={[16,16]}>
                        <Col span = {8}><Favourites /> 
                        </Col>
                        <Col span = {8} offset = {8}>
                        
                        </Col>
                    </Row>
                    <Row gutter={[16, 16]}>
                         {favourites?.map((data)=>
                            <Col span={6} key={data.rank}>
                                <Card 
                                    hoverable
                                    style={{width:240}}
                                    cover={<img src={data.image} />}
                                    >
                                    <Meta title={data.title} description={data.description} />
                                </Card>
                            </Col>
                            )
                        }

                    </Row>
                    </div>
                    }
                </div>
            </Content>
        </Layout>
    )
}
export default Home;