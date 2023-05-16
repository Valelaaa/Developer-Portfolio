import './portfolio.scss'
import PortfolioList from "../portfolioList/PortfolioList.tsx";
import {useEffect, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio, AddedMyWork, MyWork
} from "../../data.ts";
import WorkForm from "../workform/WorkForm.tsx";

export default function Portfolio({portfolioOpen, setPortfolioOpen}) {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedImage(file);
        }
    };
    const handleSaveImage = () => {
        if (selectedImage) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedImage);
            reader.onload = () => {
                const base64Image = reader.result as string;
                localStorage.setItem('image', base64Image);
                console.log('Image saved to local storage');
            };
            reader.onerror = () => {
                console.error('Error occurred while reading the image file');
            };
        }
    };
    const [selected, setSelected] = useState("featured")
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "rest",
            title: "REST API"
        },
        {
            id: "design",
            title: "Design"
        },
        {
            id: "branding",
            title: "Branding"
        }
    ]
    const [data, setData] = useState(featuredPortfolio)

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featuredPortfolio);
                break;
            case 'web':
                setData(webPortfolio);
                break;
            case 'mobile':
                setData(mobilePortfolio);
                break;
            case 'design':
                setData(designPortfolio);
                break;
            case 'content':
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
                break;
        }

    }, [selected],);
    const createNewItem = (item: AddedMyWork) => {
        setData(prevState => [...prevState, item])
        console.log(data)
    }
    const handleAddWorksClick = () => {
        setPortfolioOpen(!portfolioOpen);
    };
    return (
        <div className={"portfolio"} id={"portfolio"}>
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <a href={d.link} target={"_blank"}>
                        <div className="item">
                            <img src={d.img} alt={d.title}/>
                            <h3>{d.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
            <div className={`feature-container ${portfolioOpen ? 'active' : ''}`}
                 onClick={handleAddWorksClick}>
                <div className={"add-feature"} onClick={(e) => e.stopPropagation()}>
                    <h1>Add work</h1>
                    <WorkForm selectedImage={selectedImage}
                              handleImageUpload={handleImageUpload}
                              handleSaveImage={handleSaveImage}
                              portfolioOpen={portfolioOpen}
                              setPortfolioOpen={setPortfolioOpen}
                              createWorkPlace={(item: AddedMyWork) => createNewItem(item)}
                              handleAddWorksClick = {handleAddWorksClick}
                    />

                </div>
            </div>
            <div className={"add-works"} onClick={handleAddWorksClick}>
                <PlusOutlined
                    className={"plus"}
                />
            </div>
        </div>

    );
}
