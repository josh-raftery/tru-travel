export default function Previous({fill="black"}){
    return (
            <button 
                className="rounded-xl flex justify-center w-full h-9 p-1 m-auto outline-solid gap-3 hover:opacity-50 items-center"
                onClick={() => window.history.back()}
            >
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" style={{width: "20px"}} viewBox="0 0 300.000000 300.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill={fill} stroke={fill}> <path d="M1075 2490 c-11 -4 -228 -217 -482 -472 l-463 -464 0 -54 0 -54 462 -463 c254 -254 474 -467 490 -474 35 -14 88 -5 122 22 31 24 51 86 42 126 -5 19 -117 138 -349 370 l-342 343 1090 0 c630 0 1107 4 1130 10 60 14 95 58 95 120 0 62 -35 106 -95 120 -23 6 -500 10 -1130 10 l-1090 0 344 344 344 344 5 51 c4 49 3 53 -36 91 -33 33 -46 40 -78 39 -22 0 -48 -4 -59 -9z"/> </g> </svg> 
                <p className="tru-text" ><b>Previous</b></p>
            </button>
    )
}