import DATA from "../../../data/data";
import "./style.css";

function Stage() {
    return (
        DATA.STAG.map(item => (
            <div key={item.id} className="xl:hover:scale-[1.1] xl:transition-[1s]">
                <div className="flex flex-col items-center gap-2" data-stage={item.title}>
                    <h4 className="ribeye-regular text-smoky-gray text-xl xl:text-2xl text-center">{item.title}</h4>
                    <div className="flex flex-col items-center open-sans-Medium text-smoky-gray text-lg">
                        <span>Price</span>
                        <span>{item.price}</span>
                    </div>
                    <span className="open-sans-Medium text-smoky-gray text-lg">start: {item.start}</span>
                </div>
            </div>
        ))
    );
}

export default Stage;