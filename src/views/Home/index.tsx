import "./style.css";
import Header from "../../components/Header";
import Card from "../../components/BreweryCard";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/userContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import beerMug from "./assets/beerMug.png";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  //const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    if (!user?.fullName) {
      navigate("/", { replace: true });
    } else {
      getBreweriesData();
    }
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (!user?.fullName) {
    return null;
  }

  const getBreweriesData = async () => {
    //setIsLoading(true)

    try {
      const response = await fetch("https://api.openbrewerydb.org/breweries");
      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = (id: string) => {
    setData((currentData: any) =>
      currentData.filter((item: any) => item.id !== id)
    );
    toast.success("Brewerie deleted successfully", {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
    });
  };

  const renderEmptyData = () => {
    if (!data.length) {
      return (
        <div className="empty-data">
          <img src={beerMug} alt="beer-mug" />
          <p>
            <b>Ops!!</b> The list is empty &#128542;
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <main className="home-content">
        {data.map((brewerie: any) => (
          <Card
            key={brewerie.id}
            name={brewerie.name}
            street={brewerie?.street}
            city={brewerie?.city}
            state={brewerie?.state}
            country={brewerie.country}
            breweryType={brewerie?.brewery_type}
            postalCode={brewerie.postal_code}
            phone={brewerie.phone}
            onDelete={() => onDelete(brewerie.id)}
          />
        ))}
        {renderEmptyData()}
      </main>
    </>
  );
}

export default Home;
