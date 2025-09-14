"use client";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
// import 'cally';
export const BookingSection = () => {
  const [dateOffice, setDateOffice] = useState<Date>();
  const [dateContent, setDateContent] = useState<Date>();
  const [datePhoto, setDatePoto] = useState<Date>();

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return (
    <div>
      <div className="lg:grid lg:grid-cols-[1fr_2fr]">
        <div className="p-5">
          <h2 className="font-roboto font-bold text-2xl text-base-content">
            Booking Layanan
          </h2>
          <p>Pesan sekarang!</p>
        </div>
        <div className="p-1.5">
          <div className="bg-base-cotent rounded-selector min-h-20 p-3.5">
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
              <label className="tab text-base-100">
                <input type="radio" name="my_tabs_4" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 me-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                  />
                </svg>
                Office
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <div>
                  <div className="flex flex-row gap-3 w-full">
                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Rooms</legend>
                      <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick a browser</option>
                        <option>Sontong Rooms</option>
                        <option>Balakutak Rooms</option>
                        <option>Kraken Rooms</option>
                      </select>
                      {/* <span className="label">Optional</span> */}
                    </fieldset>

                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Date</legend>
                      <button
                        popoverTarget="rdp-popover"
                        className="input input-border"
                        style={{ anchorName: "--rdp" } as React.CSSProperties}
                      >
                        {dateOffice
                          ? dateOffice.toLocaleDateString()
                          : "Pick a date"}
                      </button>
                      <div
                        popover="auto"
                        id="rdp-popover"
                        className="dropdown"
                        style={
                          { positionAnchor: "--rdp" } as React.CSSProperties
                        }
                      >
                        <DayPicker
                          className="react-day-picker"
                          mode="single"
                          selected={dateOffice}
                          onSelect={setDateOffice}
                          disabled={(date) => date < today}
                          footer={
                            dateOffice
                              ? `Selected: ${dateOffice.toLocaleDateString()}`
                              : "Pick a day."
                          }
                        />
                      </div>
                    </fieldset>

                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Period</legend>
                      <label className="input">
                        <input
                          type="number"
                          placeholder="Number of period"
                          className="grow "
                        />
                        <select
                          defaultValue="Pick a browser"
                          className="select-md"
                        >
                          <option>Month</option>
                          <option>Annual</option>
                        </select>
                      </label>
                      {/* <span className="label">Optional</span> */}
                    </fieldset>
                  </div>

                  <div className="flex justify-end mt-2">
                    <button className="btn btn-primary rounded-box">
                      Book now
                    </button>
                  </div>
                </div>
              </div>

              <label className="tab">
                <input type="radio" name="my_tabs_4" defaultChecked />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 me-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
                Content
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <div>
                  <div className="flex flex-row gap-3 w-full">
                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Rooms</legend>
                      <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick a rooms</option>
                        <option>Polos SM</option>
                        <option>Polos MD</option>
                        <option>Pod Tiny</option>
                        <option>Pod Rock</option>
                        <option>Pod Karang</option>
                      </select>
                      {/* <span className="label">Optional</span> */}
                    </fieldset>

                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Date</legend>
                      <button
                        popoverTarget="rdp-popover2"
                        className="input input-border"
                        style={{ anchorName: "--rdp2" } as React.CSSProperties}
                      >
                        {dateContent
                          ? dateContent.toLocaleDateString()
                          : "Pick a date"}
                      </button>
                      <div
                        popover="auto"
                        id="rdp-popover2"
                        className="dropdown"
                        style={
                          { positionAnchor: "--rdp2" } as React.CSSProperties
                        }
                      >
                        <DayPicker
                          className="react-day-picker"
                          mode="single"
                          selected={dateContent}
                          onSelect={setDateContent}
                          disabled={(date) => date < today}
                          footer={
                            dateContent
                              ? `Selected: ${dateContent.toLocaleDateString()}`
                              : "Pick a day."
                          }
                        />
                      </div>
                    </fieldset>

                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Start at</legend>
                      <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick a hour</option>
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                        <option>12:00</option>
                        <option>13:00</option>
                      </select>
                      {/* <span className="label">Optional</span> */}
                    </fieldset>
                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Hour</legend>
                      <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick a hour</option>
                        <option>1 Hour</option>
                        <option>2 Hour</option>
                        <option>3 Hour</option>
                        <option>4 Hour</option>
                        <option>5 Hour</option>
                        <option>6 Hour</option>
                      </select>
                      {/* <span className="label">Optional</span> */}
                    </fieldset>
                  </div>
                  <div className="flex justify-end mt-2">
                    <button className="btn btn-primary rounded-box">
                      Book now
                    </button>
                  </div>
                </div>
              </div>

              <label className="tab">
                <input type="radio" name="my_tabs_4" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-4 me-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Photobooth
              </label>
              <div className="tab-content bg-base-100 border-base-300 p-6">
                <div>
                  <div className="flex flex-row gap-3 w-full">
                    <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Rooms</legend>
                      <select defaultValue="Pick a browser" className="select">
                        <option disabled={true}>Pick a rooms</option>
                        <option>Couple</option>
                        <option>Small</option>
                        <option>Group</option>
                      </select>
                      {/* <span className="label">Optional</span> */}
                    </fieldset>

                     <fieldset className="fieldset flex-1">
                      <legend className="fieldset-legend">Date</legend>
                      <button
                        popoverTarget="rdp-popover3"
                        className="input input-border"
                        style={{ anchorName: "--rdp3" } as React.CSSProperties}
                      >
                        {datePhoto
                          ? datePhoto.toLocaleDateString()
                          : "Pick a date"}
                      </button>
                      <div
                        popover="auto"
                        id="rdp-popover3"
                        className="dropdown"
                        style={
                          { positionAnchor: "--rdp3" } as React.CSSProperties
                        }
                      >
                        <DayPicker
                          className="react-day-picker"
                          mode="single"
                          selected={datePhoto}
                          onSelect={setDatePoto}
                          disabled={(date) => date < today}
                          footer={
                            datePhoto
                              ? `Selected: ${datePhoto.toLocaleDateString()}`
                              : "Pick a day."
                          }
                        />
                      </div>
                    </fieldset>
                  </div>

                  <div className="flex justify-end mt-2">
                    <button className="btn btn-primary rounded-box">
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
