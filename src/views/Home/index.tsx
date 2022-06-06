import Header from "../../components/Header";
import Card from "../../components/BreweryCard";
import SearchField from "../../components/SearchField";
import { useContext, useEffect, useState, ChangeEvent } from "react";
import { UserContext } from "../../store/userContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import beerMug from "./assets/beerMug.png";
import { DataType } from "./interface";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false)
  const [initialData, setInitialData] = useState<DataType>([{}, {}]);
  const [data, setData] = useState<DataType>(initialData);

  useEffect(() => {
    if (!user?.fullName) {
      navigate("/", { replace: true });
    } else {
      getBreweriesData();
    }
  }, []);

  if (!user?.fullName) {
    return null;
  }

  const getBreweriesData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openbrewerydb.org/breweries");
      const responseData = await response.json();
      setData(responseData);
      setInitialData(responseData);
    } catch (error: any) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onDelete = (id?: string) => {
    setData((currentData) =>
      currentData.filter((item) => item?.id !== id)
    );
    toast.success("Brewerie deleted successfully", {
      position: "top-right",
      autoClose: 3000,
      closeOnClick: true,
    });
  };

  const renderEmptyData = () => {
    if (!data.length && !isLoading) {
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

  const handleChange = (value: string) => {
    setData(
      initialData.filter((item) => item?.name?.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <SearchField onChange={handleChange}/>
      <main className="home-content">
        {data.map((brewerie) => (
          <Card
            key={brewerie?.id}
            name={brewerie?.name}
            street={brewerie?.street}
            city={brewerie?.city}
            state={brewerie?.state}
            country={brewerie?.country}
            breweryType={brewerie?.brewery_type}
            postalCode={brewerie?.postal_code}
            phone={brewerie?.phone}
            loading={isLoading}
            onDelete={() => onDelete(brewerie?.id)}
          />
        ))}
        {renderEmptyData()}
      </main>
    </>
  );
}

export default Home;
