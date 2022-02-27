import React,{useState,useEffect,useCallback,useRef} from "react";
import "./Home.css";
import axios from "axios";
import ClassCard from "../../components/ClassCard/ClassCard";
import useRequest from "../../Hooks/useRequest";
import CustomInput from "../../components/CustomInput/CustomInput";
import SearchInput from "../../components/searchInput/searchInput";
import {BiSearchAlt } from "react-icons/bi";

const Home=({id,name,image, accesstoken, refreshtoken, logOut, updateToken })=> {
    const [makeRequst, loading]=useRequest(updateToken);
    const [classes,setClasses]=useState([]);
    const [page,setPage]=useState(1);
    const observer = useRef();
    const [hasMoreData, setHasMoreData] = useState(true);
    const [searchText,setSearchText]=useState('');
    const context = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMoreData) {
                setPage(p => p + 1);
            }
        })
        if(node)observer.current.observe(node);
    }, [hasMoreData])
    useEffect(()=>{
        setHasMoreData(true);
        setPage(1);
        setClasses(s=>new Array());
    },[searchText])
    useEffect(()=>{
        console.log(page);
    },[page])
    useEffect(()=>{
        const headers={
            id,accesstoken,refreshtoken
        }
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        makeRequst(`${process.env.REACT_APP_API}/user/classes`, { headers, query: { query: searchText.trim(), page: page, limit: 1 }, token: source.token })
            .then(res => {
            if(res.status===200){
                const classData=res.data.classes||[];
                setClasses(l => [...l, ...classData]);
                setHasMoreData(classData.length>0)
            }
        }).catch(err=>{
            if(axios.isAxiosError(err))
                console.log(err.message);
        })
        return () => {
            source.cancel('canceling the request');
        }
    },[page,searchText])

    return (
        <div className="home-page__full-div">
            <div className="home-page__classes__div">
                <div className="home-page__enrolled-classes__heading-div">
                    <div className="heading-div-classes">
                        <span>E</span>
                        <span>nrolled Classe</span>
                        <span>S</span>
                    </div>
                    <SearchInput icon={<BiSearchAlt style={{fontSize:'1rem'}}/>} onChange={(v)=>setSearchText(v)} placeholder={'Search By Class Name'} />
                </div>
                <div style = {{width : 'calc(100vw + 20px)' , transform : 'translateX(-10px)'}} className="underline"></div>
                <div className="home-page__enrolled-classes__div">
                    {classes.map((c,i)=>
                        ((i+1)===classes.length)?
                            <ClassCard parentRef={context} classId={c.id} key={c.id} className={c.name} department="Computer Science and Engineering"/>
                        :
                            <ClassCard classId={c.id} key={c.id} className={c.name} department="Computer Science and Engineering"/> 
                        )}
                </div>
            </div>
        </div>
    );
}

export default Home;
