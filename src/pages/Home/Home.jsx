import React,{useState,useEffect,useCallback,useRef, memo} from "react";
import "./Home.css";
import axios from "axios";
import ClassCard from "../../components/ClassCard/ClassCard";
import CustomInput from "../../components/CustomInput/CustomInput";
import SearchInput from "../../components/searchInput/searchInput";
import {BiSearchAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../redux/actions/homeAction";


const Home = () => {
    //redux state
    const { isLoggedIn, accessToken, refreshToken, user, id } = useSelector(state => state.userReducer);
    const { page, classes, hasMoreData,query } = useSelector(state => state.homePageReducer)

    const dispatch=useDispatch();

    const [classData, setClassData] = useState(classes);
    const [currentPage, setCurrentPage] = useState(page);
    const [hasMoreClasses, setHasMoreClasses] = useState(hasMoreData);
    
    const observer = useRef();
    const [searchText, setSearchText] = useState(query);

    const context = useCallback(node => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMoreClasses) {
                setCurrentPage(p => p + 1);
            }
        })
        if(node)observer.current.observe(node);
    }, [hasMoreClasses])

    useEffect(()=>{
        setHasMoreClasses(true);
        setCurrentPage(1);
        setClassData(s=>new Array());
    },[searchText])
    useEffect(()=>{
        dispatch(update({
            page:currentPage,
            hasMoreData:hasMoreClasses,
            query:searchText,
            classes:classData
        }))
    },[classData])
    
    useEffect(()=>{
        const headers = {
            id, accesstoken: accessToken, refreshtoken: refreshToken
        }
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();
        axios(`${process.env.REACT_APP_API}/user/classes`, {
            method: 'GET',
            headers,
            params:{ query: searchText.trim(), page: currentPage, limit: 1 },
            token: source.token,
        }).then(res => {
            if (res.status === 200) {
                console.log('calling');
                const classData = res.data.classes || [];
                setHasMoreClasses(classData.length > 0)
                setClassData(l => [...l, ...classData]);
            }
        }).catch(err => {
            if (axios.isAxiosError(err))
                console.log(err.message);
        })
        return () => {
            source.cancel('canceling the request');
        }
    },[currentPage,searchText])


    return (
        <div className="home-page__full-div">
            <div className="home-page__classes__div">
                <div className="home-page__enrolled-classes__heading-div">
                    <div className="heading-div-classes">
                        <span>E</span>
                        <span>nrolled Classe</span>
                        <span>S</span>
                    </div>
                    <SearchInput value={searchText} icon={<BiSearchAlt style={{fontSize:'1rem',color:'#42535c'}}/>} onChange={(v)=>setSearchText(v)} placeholder={'Search By Class Name'} />
                </div>
                <div style = {{width : 'calc(100vw + 20px)' , transform : 'translateX(-10px)'}} className="underline"></div>
                <div className="home-page__enrolled-classes__div">
                    {classData.map((c,i)=>
                        ( i === classData.length - 1 ) ?
                            <ClassCard parentRef={context} classData={c} classId={c.id} key={i} className={c.name} department="Computer Science and Engineering"/>
                        :
                            <ClassCard classData={c} classId={c.id} key={i} className={c.name} department="Computer Science and Engineering"/> 
                        )}
                </div>
            </div>
        </div>
    );
}

export default memo(Home);
