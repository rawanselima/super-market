import React from "react";
const Payment = () => {
  const styleDiv = "flex flex-col my-2 text-dark-green text-green";
  const styleInput =
    "border-1 border-light-gray focus:border-green rounded px-2 py-1 my-2 outline-0 text-dark-green";
  const styleH3 = "text-lg font-bold my-3 text-dark-green";
  const government = [
    { value: "cairo", label: "Cairo" },
    { value: "giza", label: "Giza" },
    { value: "alexandria", label: "Alexandria" },
    { value: "dakahlia", label: "Dakahlia" },
    { value: "sharqia", label: "Sharqia" },
    { value: "qalyubia", label: "Qalyubia" },
    { value: "kafr_el_sheikh", label: "Kafr El Sheikh" },
    { value: "beheira", label: "Beheira" },
    { value: "gharbiya", label: "Gharbiya" },
    { value: "monufia", label: "Monufia" },
    { value: "minya", label: "Minya" },
    { value: "beni_suef", label: "Beni Suef" },
    { value: "faiyum", label: "Faiyum" },
    { value: "assiut", label: "Assiut" },
    { value: "sohag", label: "Sohag" },
    { value: "qena", label: "Qena" },
    { value: "luxor", label: "Luxor" },
    { value: "aswan", label: "Aswan" },
    { value: "red_sea", label: "Red Sea" },
    { value: "new_valley", label: "New Valley" },
    { value: "matrouh", label: "Matrouh" },
    { value: "north_sinai", label: "North Sinai" },
    { value: "south_sinai", label: "South Sinai" },
    { value: "port_said", label: "Port Said" },
    { value: "ismailia", label: "Ismailia" },
    { value: "suez", label: "Suez" },
  ];
  return (
    <div className="border-1 border-light-gray rounded p-3">
      <form>
        <h3 className={styleH3}> Contact </h3>
        <div className={styleDiv}>
          <label htmlFor="number"> Phone Number </label>
          <input type="text" name="number" className={styleInput} />
        </div>

        <h3 className={styleH3}> Delivery </h3>
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
          <div className={styleDiv}>
            <label htmlFor="firstName"> First Name </label>
            <input type="text" name="firstName" className={`${styleInput}`} />
          </div>

          <div className={styleDiv}>
            <label htmlFor="lastName"> Last Name </label>
            <input type="text" name="lastName" className={styleInput} />
          </div>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1 gap-2">
          <div className={styleDiv}>
            <label htmlFor="country"> Country </label>
            <select name="country" className={styleInput}>
              <option value="egypt"> Egypt </option>
              <option value="other"> other </option>
            </select>
          </div>

          <div className={styleDiv}>
            <label htmlFor="government">Select Governorate</label>
            <select
              className={styleInput}
              aria-label="Select Governorate"
              name="government"
            >
              {government.map((g) => (
                <option key={g.value} value={g.value}>
                  {g.label}-50LE
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styleDiv}>
          <label htmlFor="address"> your Address </label>
          <input type="text" name="address" className={styleInput} />
        </div>
        <h3 className={styleH3}> Payment Way </h3>

        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="paymentWay"
            className="accent-green w-5 h-5"
            checked={true}
          />
          <label htmlFor="paymentWay"> Cash on delivery </label>
        </div>
      </form>
    </div>
  );
};

export default Payment;
