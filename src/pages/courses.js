import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";

const data = [
  {
    type: `frontend`,
    title: `Frontend`,
    subtitle: `Bu - xizmatning dasturiy va apparat qismining foydalanuvchi interfeysi mijoz tomoni.`,
    number: `1`,
    to: `frontend`,
  },
  {
    type: `backend`,
    title: `Backend`,
    subtitle: `Backend - xizmatning dasturiy va apparat qismi bo'lib, uning ichki qismi ishlashi uchun javobgardir.`,
    number: `2`,
    to: `backend`,
  },
  {
    type: `iOS`,
    title: `iOS`,
    subtitle: `iOS - bu Amerikaning Apple kompaniyasi tomonidan ishlab chiqilgan smartfonlar, elektron planshetlar, taqiladigan pleyerlar va boshqa qurilmalar uchun mobil operatsion tizim.`,
    number: `3`,
    to: `iOS`,
  },
  {
    type: `max`,
    title: `3ds Max`,
    subtitle: `Autodesk 3dsMax - bu o'yinlarni yaratish va loyihalash uchun professional 3D -modellashtirish, animatsiya va renderlash dasturi.`,
    number: `4`,
    to: `/courses/max`,
  },
];

const datas = [
  { type: `frontend`, title: `Frontend`, number: `5` },
  { type: `backend`, title: `Backend`, number: `6` },
  { type: `iOS`, title: `iOS`, number: `7` },
  { type: `max`, title: `3ds Max`, number: `8` },
];

const BoxWrapper = styled.div`
  overflow-x: hidden;
  transition: 0.5s !important;
  width: 100%;
  .sidebar {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #7da097;
  }
  .cards {
    padding: 50px 10px;
    text-align: center;
    width: 100px;
    height: 100vh;
    transition: 0.5s !important;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.5);
    position: relative;

    &.frontend {
      background-color: #ff6766;
    }
    &.backend {
      background-color: #ffad96;
    }
    &.iOS {
      background-color: #f2c5a6;
    }
    &.max {
      background-color: #b3ab92;
    }

    &.show {
      width: 600px;
      transition: 0.5s !important;
      .fa_right {
        position: absolute;
        top: 48%;
        right: -1.5%;
        font-size: 30px;
        cursor: pointer;
        z-index: 1000;
      }
    }

    .fa_right {
      position: absolute;
      top: 48%;
      right: -9%;
      font-size: 30px;
      cursor: pointer;
      z-index: 1000;
    }
    .title {
      font-weight: bold;
      font-size: 18px;
      line-height: 100%;
      /* width: 75px; */
    }
    .link {
      color: #000;
      text-decoration: none;
      cursor: pointer;
    }
  }
`;

const Courses = () => {
  const [show, setShow] = useState(-1);

  const activePagination = (value) => {
    setShow(value);
  };

  return (
    <BoxWrapper>
      <div className="d-flex">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className={`cards ${value.type} ${
                show === value.number ? "show" : ""
              }`}
            >
              <div className="card_content">
                <a
                  href={`${value.to}`}
                  // to={`${value.to}`}
                  className="title text-decoration-none text-dark"
                >
                  {value.title}
                </a>
                <FontAwesomeIcon
                  className="fa_right"
                  onClick={() => activePagination(`${value.number}`)}
                  icon={faAngleRight}
                />
                {show === value.number ? <p>{value.subtitle}</p> : ""}
              </div>
            </div>
          );
        })}
        <div className={`sidebar px-5`}>
          <h1>Bizning kurslar</h1>
        </div>
        {datas.map((value, index) => {
          return (
            <div
              key={index}
              onClick={() => activePagination(`${value.number}`)}
              className={`cards ${value.type} ${
                show === value.number ? "show" : ""
              }`}
            >
              <div className="card_content">
                <p className="title">{value.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </BoxWrapper>
  );
};

export default Courses;

// import React from "react";
// import styled from "styled-components";

// const BoxWrapper = styled.div`
//   overflow-x: hidden;
//   .cards {
//     background-color: blanchedalmond;
//     padding: 50px 0;
//     text-align: center;
//     width: 200px;
//     height: 100vh;
//   }
// `;

// const styles = {
//   transition: `all 1s ease-out`,
// };

// class Courses extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       opacity: 1,
//       scale: 1,
//     };
//   }

//   onHide() {
//     this.setState({
//       opacity: 0,
//     });
//   }

//   onScale() {
//     this.setState({
//       scale: this.state.scale > 1 ? 1 : 1.3,
//     });
//   }

//   render() {
//     return (
//       <BoxWrapper>
//         <div className="conatiner">
//           <div className="row">
//             <div className="s8 offset-s2 center-align">
//               <div
//                 style={{
//                   ...styles,
//                   opacity: this.state.opacity,
//                   transform: `scale(` + this.state.scale + `)`,
//                 }}
//                 className="cards"
//               >
//                 <div className="card_content">
//                   <span>Lorem, ipsum dolor.</span>
//                   <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                     Unde optio veritatis nemo!
//                   </p>
//                 </div>
//                 <div className="card_action">
//                   <a onClick={this.onHide.bind(this)} className="me-5">
//                     Hide
//                   </a>
//                   <a onClick={this.onScale.bind(this)} className="ms-1">
//                     show
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </BoxWrapper>
//     );
//   }
// }

// export default Courses;
