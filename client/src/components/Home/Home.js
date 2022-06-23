import { React, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getChallenges } from '../../redux/actions/challenges'
import Header from "../Header/Header";
import Challenges from "../Challenges/Challenges";
import SortChallenge from "../SortChallenge/SortChallenge";


function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getChallenges());
  }, [dispatch]);

  return (
    <>
        <Header />
        <SortChallenge />
        <Challenges />
    </>
  );
}

export default Home;
