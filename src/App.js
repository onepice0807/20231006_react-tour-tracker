import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tour from "./components/Tour";
import { Dots } from "react-activity";

// https://api.coinpaprika.com/v1/tickers?limit=20

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, serIsLoading] = useState(false);

  const url = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=500&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=qtz5gxbeXsybxVf03ztdY6TB21gVIMi06lHnXO6VWhK7y5qMNXNwtevBUksSj5ZW3YFPYb6KXsYma4S2HuO%2FDA%3D%3D&listYN=Y&arrange=A&contentTypeId=38&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&_type=json`;

  useEffect(() => {
    // 액티비티 보여주고
    serIsLoading(true);
    fetch(url) // 데이터 인출
      .then((resp) => resp.json()) // 데이터 인출에 성공하면 json으로 변환
      .then((data) => setTours(data.response.body.items.item)) // 그 json을 변수에 저장
      .then(() => console.log(tours))
      .catch((error) => console.log(error))
      .finally(() => serIsLoading(false)); // 액티비티 감추고
  }, []); // 의존성 배열에 아무값도 없다면 처음 렌더링 될 때 딱 한번만 callback함수를 수행한다.

  return (
    <div className="container">
      <Header />

      {isLoading ? (
        <div className="loadContainer">
          <Dots color="#727981" size={32} speed={1} animating={true} />
        </div>
      ) : null}

      <div className="tours">
        {tours.map((tour, index) => (
          <Tour
            key={index}
            firstImage={tour.firstimage}
            title={tour.title}
            addr={tour.addr1}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
