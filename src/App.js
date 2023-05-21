// import logo from './logo.svg';
import './App.css';
import { UpCircleFilled, DownCircleFilled, LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Radio } from 'antd';


function App() {

  let sa = { width: "3em", fontSize: '200%', padding: "2px" }, ab = '';
  let [s, change] = useState([{ id: 1, active: false, cl: "red" }, { id: 2, active: false, cl: "red" }, { id: 3, active: false, cl: "red" },
  { id: 4, active: false, cl: "red" }]);
  const [value, setValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [interv, setinterv] = useState();
  const [inter, setinter] = useState();
  const [cur_st, st] = useState(0);
  const [tm, sb] = useState(0);
  let list = [s.find(elem => elem.id === 1), s.find(elem => elem.id === 2), s.find(elem => elem.id === 3), s.find(elem => elem.id === 4)]
  let sec = 0;
  let count = tm;

  useEffect(() => {
    return(
    change(
      s.map((elem) => {
        if (elem.id !== null) {
          return { ...elem, active: false, cl: "red" }
        } return elem;
      })
    ) 
    )
  }, [])

  

  const run = () => {
    if (sec >= 6) {
      sec = sec % 6;
    }
    sec = sec + 1;
    console.log(seconds);
    return setSeconds(sec);
  }
  const cli = () => {
    clearInterval(interv);
    setinterv(setInterval(run, 1000));
  }
  const editp = () => {
    
    sb(cur_st);
    console.log("sssbbbb" , cur_st);
    st(count);
    change(
      s.map((elem) => {
        if (elem.cl === "green" ){
          return { ...elem, active: false, cl: "red" }
        }
        if (elem.id === count) {
          return { ...elem, active: true, cl: "green" }
        } return elem;
      })
    )
    
  }
console.log(s);
  // const editn = () =>{

  //   change(
  //     s.map((elem)=>{if(elem.id !== null){
  //       console.log("neg", elem.id);  
  //       return {...elem, active : false, cl: "red" }
  //     } return elem;
  //     })
  //   )
  // }

  const onChange = e => {
    console.log('radio checked', e.target.value);
    ab = e.target.value;
    setValue(ab);
    console.log("ssssssssssssssssssssss",cur_st);
    console.log("Count", count);

    if (ab !== null) {
      SM();
      clearInterval(inter);
      setinter(setInterval(SM, 6000));
    }

  };

  //  const CW = () => {
  //   if(ab === "Clockwise"){
  //      count = count + 1;
  //     console.log('radio checked', ab , count, s );
  //     if (count > 4){ 
  //        count = count - 4 }
  //     editp(count);
  //   }
  // };
  //  const ACW = c => {

  //   if(ab === "AntiClockwise"){
  //     if (count === 0){ 
  //        count = count + 4;
  //         }else if(count === 1){ count = 4;}
  //         else{
  //         count = count - 1;
  //        }

  //        console.log('radio checked', ab , count);
  //     editp(count);
  //   }
  //  };
  //  const UD = c => {

  //   if(ab === "UpDown"){
  //     count=count + 1;

  //     if (count > 4){ 
  //       count = count - 4;
  //        }       
  //        if( count % 2 !== 0){
  //            editp(count);}else{
  //              count = count +1 ;
  //              if( count % 2 !== 0){
  //               editp(count);}
  //            }

  // }
  // };
  // const LR = c => { 
  //   if(ab === "RightLeft"){
  //     count=count + 1;

  //     if (count > 4){ 
  //       count = count - 4;
  //        }else if(count===0){count = 2 }       
  //     if( count % 2 === 0){
  //       console.log('radio checked', ab ,count);
  //        editp(count);}else{
  //          count = count +1 ;
  //           if( count % 2 === 0){
  //             console.log('radio checked', ab ,count);
  //             editp(count);
  //             }
  //            }

  // }
  // };

  const SM = () => {
    console.log('radio checked', ab + "SMM");
    if (ab === "Clockwise") {
      count = count + 1;
      if (count > 4) {
        count = count - 4
      }
      console.log('radio checked', ab, count);
      editp();
      
    } else if (ab === "AntiClockwise") {
      if (count === 0) {
        count = count + 4;
      } else if (count === 1) { count = 4; }
      else {
        count = count - 1;
      }
      console.log('radio checked', ab, count);
      editp();
    } else if (ab === "UpDown") {
      count = count + 1;
      if (count >= 4 || count === 5) {
        count = count - 4;
      }

      if (count % 2 !== 0) {
        console.log('radio checked', ab, count, s);
        editp();
      } else {
        count = count + 1;
        if (count % 2 !== 0) {
          console.log('radio checked', ab, count, s);
          editp();
        }
      }
    } else if (ab === "RightLeft") {
      count = count + 1;

      if (count > 4) {
        count = count - 4;
      } else if (count === 0) { count = 2 }
      if (count % 2 === 0) {
        console.log('radio checked', ab, count);
        editp();
      } else {
        count = count + 1;
        if (count % 2 === 0) {
          console.log('radio checked', ab, count);
          editp();
        }
      }

    }

  }
  return (
    <>
      <h1 style={{ padding: "2px", textAlign: "center", }}>Traffic Management pr.state {tm} cur.state {cur_st} {value} {seconds} </h1>

      <Radio.Group onChange={onChange} value={value} style={{ padding: "20px", textAlign: "center" }}>
        <Radio onClick={cli} style={{ width: "10em" }} value={"Clockwise"}>Clockwise</Radio>          <br />
        <Radio onClick={cli} style={{ width: "10em" }} value={"AntiClockwise"}>AntiClockwise</Radio>  <br />
        <Radio onClick={cli} style={{ width: "10em" }} value={"UpDown"}>Up-Down</Radio>               <br />
        <Radio onClick={cli} style={{ width: "10em" }} value={"RightLeft"}>Right-Left</Radio>         <br />
      </Radio.Group>


      <table style={{ padding: "2px", textAlign: "center", width: "100%", height: "40%" }}>
        <tr>
          <td colSpan="4" style={{ textAlign: "center" }}> <span ><UpCircleFilled style={{ ...sa, color: list[0].cl }} /><b>Up Active: {list[0].active.toString()} {list[0].active ? <span>{seconds}</span> : null}</b><br /></span> </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ textAlign: "center" }}><span ><LeftCircleFilled style={{ ...sa, color: list[3].cl }} /><b>Left Active: {list[3].active.toString()} {list[3].active ? <span>{seconds}</span> : null}</b><br /></span></td>
          <td colSpan="2" style={{ textAlign: "center" }}><span ><RightCircleFilled style={{ ...sa, color: list[1].cl }} /><b>Right Active: {list[1].active.toString()} {list[1].active ? <span>{seconds}</span> : null}</b><br /></span></td>
        </tr>
        <tr>
          <td colSpan="4" style={{ textAlign: "center" }}><span ><DownCircleFilled style={{ ...sa, color: list[2].cl }} /><b>Down Active: {list[2].active.toString()} {list[2].active ? <span>{seconds}</span> : null} </b><br /></span></td>
        </tr>
      </table>
    </>
  );
}


export default App;
