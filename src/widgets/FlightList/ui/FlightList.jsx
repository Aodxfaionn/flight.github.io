import React from "react";
import "./flightList.css";
import { Button } from "../../../shared/ui/Button/Button";
import data from "../../../app/flights.json";
import { useLoadArray } from "../lib/useLoadArray";

function FlightList() {
  const [transformArray, showElem] = useLoadArray(data.result.flights, 10);
  return (
    <div className="flightList">
      <div className="flightList">
        {transformArray.map((flight, num) => (
          <div key={num} className="flight">
            <div className="flight__header">
              <div className="flight__aviaCompany">
                {flight.flight.carrier.caption}
              </div>
              <div>
                <p className="flight__price">
                  {flight.flight.price.total.amount}&nbsp;
                  {flight.flight.price.total.currency}
                </p>
                <p className="flight__flight">
                  Стоимость для одного взрослого пассажира
                </p>
              </div>
            </div>
            <div className="flight__main">
              <div className="forward">
                <div className="direction">
                  <span>
                    {flight.flight.legs[0].segments[0].departureCity.caption}
                    ,&nbsp;
                    {flight.flight.legs[0].segments[0].departureAirport.caption}
                    &nbsp;
                  </span>
                  <span className="blue direction-abr">
                    {flight.flight.legs[0].segments[0].departureAirport.uid}
                    &nbsp;
                  </span>
                  <span className="blue direction__arrow">&#8594;</span>
                  <span>
                    &nbsp;
                    {flight.flight.legs[0].segments[1]
                      ? flight.flight.legs[0].segments[1].arrivalAirport.caption
                      : flight.flight.legs[0].segments[0].arrivalAirport
                          .caption}
                  </span>
                  <span className="blue direction-abr">
                    &nbsp;
                    {flight.flight.legs[0].segments[1]
                      ? flight.flight.legs[0].segments[1].arrivalAirport.uid
                      : flight.flight.legs[0].segments[0].arrivalAirport.uid}
                  </span>
                </div>
                <div className="time">
                  {flight.flight.legs[0].segments[1] ? (
                    <div className="time__start">
                      {flight.flight.legs[0].segments[0].departureDate.slice(
                        11,
                        16
                      )}
                      ,&nbsp;
                      <span className="blue">
                        {flight.flight.legs[0].segments[1].departureDate.slice(
                          0,
                          10
                        )}
                      </span>
                    </div>
                  ) : (
                    <div className="time__start">
                      {flight.flight.legs[0].segments[0].departureDate.slice(
                        11,
                        16
                      )}
                      ,
                      <span className="blue">
                        {flight.flight.legs[0].segments[0].departureDate.slice(
                          0,
                          10
                        )}
                      </span>
                    </div>
                  )}
                  <div className="time__time">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                    </svg>
                    <span>Время в пути</span>
                  </div>
                  {flight.flight.legs[0].segments[1] ? (
                    <div className="time__finish">
                      <span className="blue">
                        {flight.flight.legs[0].segments[1].arrivalDate.slice(
                          0,
                          10
                        )}
                      </span>
                      ,&nbsp;
                      {flight.flight.legs[0].segments[1].arrivalDate.slice(
                        11,
                        16
                      )}
                    </div>
                  ) : (
                    <div className="time__finish">
                      <span className="blue">
                        {flight.flight.legs[0].segments[0].arrivalDate.slice(
                          0,
                          10
                        )}
                      </span>
                      ,
                      {flight.flight.legs[0].segments[0].arrivalDate.slice(
                        11,
                        16
                      )}
                    </div>
                  )}
                </div>
                {flight.flight.legs[0].segments[1] ? (
                  <p className="transfer">1 пересадка</p>
                ) : (
                  <p className="transfer"></p>
                )}
                <p className="aviaCompany">
                  Рейс выполняет: {flight.flight.carrier.caption}
                </p>
              </div>
              <div className="back">
                <div className="direction">
                  <span>
                    {flight.flight.legs[1].segments[0].departureAirport.caption}
                    ,&nbsp;
                  </span>
                  <span className="blue direction-abr">
                    {flight.flight.legs[1].segments[0].departureAirport.uid}
                    &nbsp;
                  </span>
                  <span className="blue direction__arrow">&#8594;</span>
                  <span>
                    &nbsp;
                    {flight.flight.legs[1].segments[1]
                      ? flight.flight.legs[1].segments[1].arrivalAirport.caption
                      : flight.flight.legs[1].segments[0].arrivalAirport
                          .caption}
                  </span>
                  <span className="blue direction-abr">
                    &nbsp;
                    {flight.flight.legs[1].segments[1]
                      ? flight.flight.legs[1].segments[1].arrivalAirport.uid
                      : flight.flight.legs[1].segments[0].arrivalAirport.uid}
                  </span>
                </div>
                <div className="time">
                  {flight.flight.legs[1].segments[1] ? (
                    <div className="time__start">
                      {flight.flight.legs[1].segments[1].departureDate.slice(
                        11,
                        16
                      )}
                      ,&nbsp;
                      <span className="blue">
                        {flight.flight.legs[1].segments[0].departureDate.slice(
                          0,
                          10
                        )}
                      </span>
                    </div>
                  ) : (
                    <div className="time__start">
                      {flight.flight.legs[0].segments[0].departureDate.slice(
                        11,
                        16
                      )}
                      ,&nbsp;
                      <span className="blue">
                        {flight.flight.legs[0].segments[0].departureDate.slice(
                          0,
                          10
                        )}
                      </span>
                    </div>
                  )}
                  <div className="time__time">
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                    </svg>
                    <span>Время в пути</span>
                  </div>
                  {flight.flight.legs[1].segments[1] ? (
                    <div className="time__finish">
                      <span className="blue">
                        {flight.flight.legs[1].segments[1].arrivalDate.slice(
                          0,
                          10
                        )}
                      </span>
                      ,&nbsp;
                      {flight.flight.legs[1].segments[1].arrivalDate.slice(
                        11,
                        16
                      )}
                    </div>
                  ) : (
                    <div className="time__finish">
                      <span className="blue">
                        {flight.flight.legs[1].segments[0].arrivalDate.slice(
                          0,
                          10
                        )}
                      </span>
                      ,&nbsp;
                      {flight.flight.legs[1].segments[0].arrivalDate.slice(
                        11,
                        16
                      )}
                    </div>
                  )}
                </div>
                {flight.flight.legs[1].segments[1] ? (
                  <p className="transfer">1 пересадка</p>
                ) : (
                  <p className="transfer-empty"></p>
                )}
                <p className="aviaCompany">
                  Рейс выполняет: {flight.flight.carrier.caption}
                </p>
              </div>
            </div>
            <Button text="Выбрать" />
          </div>
        ))}
      </div>
      <Button text="Показать еще" style="btn-more" onClick={() => showElem()} />
    </div>
  );
}

export default FlightList;
