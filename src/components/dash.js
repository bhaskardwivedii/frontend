import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import './styles.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.from("#nav", { x: "-100%", duration: 1 });
    gsap.from("#companyInfo", { opacity: 0, y: 50, duration: 1, delay: 0.5 });

    ScrollTrigger.create({
      trigger: "#p2",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to("#p2", { opacity: 0, y: -50, duration: 1 });
      },
      onLeaveBack: () => {
        gsap.to("#p2", { opacity: 1, y: 0, duration: 1 });
      },
    });
  }, []);

  return (
    <div id="main">
      <nav id="nav">
        <div id="logo">
          <img src="logo.png" alt="" />
        </div>
        <a href="#l1">
          <div id="Home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="48"
              fill="rgba(240,187,64,1)"
            >
              <path
                d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19ZM12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 9.99998 12 9.99998C13.3807 9.99998 14.5 11.1193 14.5 12.5C14.5 13.8807 13.3807 15 12 15Z"
              ></path>
            </svg>
          </div>
        </a>
        <a href="#page2">
          <div id="About">
            <button>About</button>
          </div>
        </a>
        <a href="">
          <div>
            <button>Wallet</button>
          </div>
        </a>
        <a href="">
          <div>
            <button>Acount</button>
          </div>
        </a>
        <a href="">
          <div>
            <button>Policies</button>
          </div>
        </a>
        <a href=""> </a>
      </nav>
      <img id="bgimg" src="blockchain.png" alt="" />
      <div id="l1">
        <div id="page1"></div>
        <h1 id="Blocksure2">Blocksure</h1>
        <div id="p1"></div>
        <div id="p2">
          <p id="companyInfo">
            We are <br />
            Insurance company <br />
            based on blockchain
          </p>
        </div>
      </div>
      <div id="page2">
        <div className="page2_r">
          <h1 id="hop">WHO WE ARE?</h1>
        </div>
        <div className="page2_r">
          <h2>Revolutionizing Insurance with Blockchain and Smart Contracts</h2>
        </div>
      </div>
      <style jsx>{`
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        HTML BODY{
            height: 100%;
            width: 100%;
            font-family: 'Poppins', sans-serif;
            overflow-x: hidden; /* Added to remove right scroll */
        }
        #main{
            height: 100%;
            width: 100%;
            display: flex;
        }
        #nav{
            position: fixed;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            width: 170px;
            gap: 50px;
            background-color: black;
            z-index: 9;
           backdrop-filter: blur;
        }
        #logo{
            height:100px;
            width: 100px;
            margin-top: -40px;
            margin-bottom: 10px;
            background-color: black;
        }
        #logo img{
           height: 100%;
           width: 100%;
           object-fit: cover;
        }
        #bgimg{
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            z-index: -1;
        }
        #Blocksure{
            color: gold;
            margin-bottom: 130px;
            background-color: black;
            font-size: 25px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
        }
        button{
            height: 50px;
            width: 100px;
            font-size: 23px;
            border-radius: 30px;
            background-color: rgb(255, 217, 0);
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            border: none;
           box-shadow: 1px;
        }
        #Home i{
           height: 100px;
           width: 100px;
        }
        button:hover{
            color: gold;
            background-color: black;
            /* box-shadow: 0 14px 10px white, 0 10px 28px gold; */
            position: relative;
            overflow: hidden;
            
            /* background-color: #2EE59D; */
          box-shadow: 0px 15px 20px rgba(255, 217, 0, 0.559);
          
          transform: translateY(-7px);
        }

        button:hover::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #ffd700;
            animation: moveLine 1.2s infinite;
        }

        @keyframes moveLine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        #l1{
            display: flex;
            height: 100%;
            width: 100%;
        }
        #page1{
            position: fixed;
            background-position: center;
            background-size: 100%;
            height: 100vh;
            width: 100vw;
            margin: 0;
            background-color: black;
            opacity: 0.3 ;
        }
        #Blocksure2{
            margin-top: 20px;
            text-align: center;
            color: gold;
            font-size: 50px;
            /* opacity: 0; */
            position: fixed;
           padding-left: 50%;
           z-index: 8;
           font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
           filter: highlight;
           letter-spacing: 2px ;
           text-shadow: 2px 2px 4px #000000;
        }
        #p1{ position: relative;
            height: 100vh;
            width: 50vw;
            
        }
        #p2{
            position: relative;
            height: 100vh;
            width: 50vw;
            display: flex;
            align-items: center;
            justify-content: center;

        }
        #p2 p{
            color: aliceblue;
            font-size: 50px;
            width: 80%;
           text-shadow: 2px 2px 4px #000000;
           mix-blend-mode: difference;
           letter-spacing: 4px;
            
        }
        #page2{
            position: relative;
            height: 100vh;
            width: 100vw;
            background: linear-gradient(to bottom, rgba(0, 0, 0, 0.078), black);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .page2_r{
            width: 50vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        #page2 h1{
            /* padding: 100px 300px 300px; */
            
            color: white;
           text-shadow: 2px 2px 4px #000000;
           font-weight: 500;

        }
      `}</style>
    </div>
  );
}

export default App;
