import TruLogo from "../svg/TruLogo";

export default function Header() {
    return (
        <div className="w-full h-[60px] tru-primary flex justify-center items-center gap-3">
            <TruLogo className={"w-16"} />
            <h1 className="text-3xl text-white " style={{ fontWeight: 400, fontFamily: 'Space Grotesk, sans-serif', textShadow: '0.5px 0.5px 0px white, -0.5px -0.5px 0px white, 0.5px -0.5px 0px white, -0.5px 0.5px 0px white', letterSpacing: "0.02em" }}><b>TRIP PLANNER</b></h1>
        </div>
    )
}