import "./styles.css";
import { WEATHER_CODES } from "./types";
import Button from "../../components/Button/Button";

function Lesson07() {
    const decode = (weatherCode: WEATHER_CODES): string => {
        switch (weatherCode) {
          case WEATHER_CODES.SQ: {
            return "шквал";
          }
          case WEATHER_CODES.PO: {
            return "пыльный вихрь";
          }
          case WEATHER_CODES.FC: {
            return "торнадо";
          }
          case WEATHER_CODES.BR: {
            return "дымка (видимость от 1 до 9 км)";
          }
          case WEATHER_CODES.HZ: {
            return "мгла (видимость менее 10 км)";
          }
          case WEATHER_CODES.FU: {
            return "дым (видимость менее 10 км)";
          }
          case WEATHER_CODES.DS: {
            return "пыльная буря (видимость менее 10 км)";
          }
          case WEATHER_CODES.SS: {
            return "песчаная буря (видимость менее 10 км) ";
          }
          default:
            return "This code doesnt exist";
        }
      };
    const showWeather = (
        weatherCode: WEATHER_CODES,
        decodeFunc: (weatherCode: WEATHER_CODES) => string
      ) => {
        console.log(decodeFunc(weatherCode));
      };
    
      showWeather(WEATHER_CODES.FC, decode);
      showWeather(WEATHER_CODES.BR, decode);
      showWeather(WEATHER_CODES.FC, decode);

  return <div className="card-wrapper"><Button name="Send" onClick={() => {}} /></div>;
}

export default Lesson07;
