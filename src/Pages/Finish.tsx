import Title from "../components/Title";
import Success from "../svg/Success";

export default function Finish(){
    return(
        <div className="gap-5 grid m-5 " >
            <Title title="All done! We will be in touch"/>
            <Success/>
        </div>
    )
}