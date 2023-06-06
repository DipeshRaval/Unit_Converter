const option = document.getElementById("convertChoises");
const fromSelector = document.getElementById("fromSelector");
const toSelector = document.getElementById("toSelector");
const input = document.querySelector(".input");
const btn = document.getElementById("convertBtn");
const output = document.getElementById("output");
const resLable = document.getElementById("resLable");
// change a options based on the selected a conversion type
option.addEventListener("change", () => {
  fromSelector.innerHTML = "";
  toSelector.innerHTML = "";
  let options;

  if (option.value === "Time") {
    options = `
      <option value="second">second</option>
      <option value="minutes">minutes</option>
      <option value="hour">hour</option>
      <option value="day">Day</option>
      <option value="month">month</option>
    `;
  } else if (option.value === "temperature") {
    options = `
      <option value="Celsius">Celsius</option>
      <option value="Fahrenheit">Fahrenheit</option>
      <option value="Kelvin">Kelvin</option>
    `;
  } else if (option.value === "Area") {
    options = `
      <option value="Square kilometer">Square kilometer</option>
      <option value="Square meter">Square meter</option>
      <option value="Square centimeter">Square centimeter</option>
      <option value="Square milimeter">Square milimeter</option>
    `;
  } else if (option.value === "weight") {
    options = `
      <option value="Kilogram">Kilogram</option>
      <option value="Gram">Gram</option>
      <option value="Milligram">Milligram</option>
      <option value="Pound">Pound</option>
    `;
  } else if (option.value === "Volume") {
    options = `
      <option value="Cubic Kilometer">Cubic Kilometer</option>
      <option value="Cubic Meter">Cubic Meter</option>
      <option value="Cubic Centimeter">Cubic Centimeter</option>
      <option value="Cubic Millimeter">Cubic Millimeter</option>
    `;
  }

  fromSelector.innerHTML = options;
  toSelector.innerHTML = options;
});

// convert button click listener
btn.addEventListener("click", () => {
  const value = +input.value;
  const from = fromSelector.value;
  const selectVal = option.value;
  const to = toSelector.value;
  let result;

  if (from === to) {
    result = `${value} ${from} = ${value} ${to}`;
  }

  // legth conversion
  if (selectVal === "length") {
    if (from === "kilometer" && to === "meter")
      result = `${value} km = ${value * 1000} m`;
    else if (from === "kilometer" && to === "centimeter")
      result = `${value} km = ${value * 100000} cm`;
    else if (from === "kilometer" && to === "millimeter")
      result = `${value} km = ${value * 1000000} mm`;
    else if (from === "meter" && to === "kilometer")
      result = `${value} m = ${value / 1000} km`;
    else if (from === "meter" && to === "centimeter")
      result = `${value} m = ${value * 100} cm`;
    else if (from === "meter" && to === "millimeter")
      result = `${value} m = ${value * 1000} mm`;
    else if (from === "centimeter" && to === "kilometer")
      result = `${value} cm = ${value / 100000} km`;
    else if (from === "centimeter" && to === "meter")
      result = `${value} cm = ${value / 100} m`;
    else if (from === "centimeter" && to === "millimeter")
      result = `${value} cm = ${value * 10} mm`;
    else if (from === "millimeter" && to === "kilometer")
      result = `${value} mm = ${value / 1000000} km`;
    else if (from === "millimeter" && to === "meter")
      result = `${value} mm = ${value / 1000} m`;
    else if (from === "millimeter" && to === "centimeter")
      result = `${value} mm = ${value / 10} cm`;
  }

  // temperature conversion
  if (selectVal === "temperature") {
    if (from === "Celsius" && to === "Fahrenheit")
      result = `${value} C = ${((value * 9) / 5 + 32).toFixed(3)} F`;
    else if (from === "Celsius" && to === "Kelvin")
      result = `${value} C = ${value + 273.15} K`;
    else if (from === "Fahrenheit" && to === "Celsius")
      result = `${value} F = ${(((value - 32) * 5) / 9).toFixed(3)} C`;
    else if (from === "Fahrenheit" && to === "Kelvin")
      result = `${value} F = ${(((value - 32) * 5) / 9 + 273.15).toFixed(3)} K`;
    else if (from === "Kelvin" && to === "Fahrenheit")
      result = `${value} K = ${(((value - 273.15) * 9) / 5 + 32).toFixed(3)} F`;
    else if (from === "Kelvin" && to === "Celsius")
      result = `${value} K = ${value - 273.15} C`;
  }

  // area conversion
  if (selectVal === "Area") {
    if (from === "Square kilometer" && to === "Square meter")
      result = `${value} Square kilometer = ${value * 1000000} Square meter`;
    else if (from === "Square kilometer" && to === "Square centimeter")
      result = `${value} Square kilometer = ${
        value * 10000000000
      } Square centimeter`;
    else if (from === "Square kilometer" && to === "Square milimeter")
      result = `${value} Square kilometer = ${
        value * 1000000000000
      } Square milimeter`;
    else if (from === "Square meter" && to === "Square kilometer")
      result = `${value} Square meter = ${value / 1000000} Square kilometer`;
    else if (from === "Square meter" && to === "Square centimeter")
      result = `${value} Square meter = ${value * 10000} Square centimeter`;
    else if (from === "Square meter" && to === "Square milimeter")
      result = `${value} Square meter = ${value * 1000000} Square milimeter`;
    else if (from === "Square centimeter" && to === "Square kilometer")
      result = `${value} Square centimeter = ${
        value / 10000000000
      } Square kilometer`;
    else if (from === "Square centimeter" && to === "Square meter")
      result = `${value} Square centimeter = ${value / 10000} Square meter`;
    else if (from === "Square centimeter" && to === "Square milimeter")
      result = `${value} Square centimeter = ${value * 100} Square milimeter`;
    else if (from === "Square milimeter" && to === "Square kilometer")
      result = `${value} Square milimeter= ${
        value / 1000000000000
      } Square kilometer`;
    else if (from === "Square milimeter" && to === "Square meter")
      result = `${value} Square milimeter = ${value / 1000000} Square meter`;
    else if (from === "Square milimeter" && to === "Square centimeter")
      result = `${value} Square milimeter = ${value / 100} Square centimeter`;
  }

  // time conversion
  if (selectVal === "Time") {
    if (from === "second" && to === "minutes")
      result = `${value} second = ${(value / 60).toFixed(4)} minutes`;
    else if (from === "second" && to === "hour")
      result = `${value} second = ${(value / 3600).toFixed(7)} hour`;
    else if (from === "second" && to === "day")
      result = `${value} second = ${(value / 86400).toFixed(10)} day`;
    else if (from === "second" && to === "month")
      result = `${value} second = ${(value / 2592000).toFixed(12)} month`;
    else if (from === "minutes" && to === "hour")
      result = `${value} minutes = ${value / 60} hour`;
    else if (from === "minutes" && to === "second")
      result = `${value} minutes = ${value * 60} second`;
    else if (from === "minutes" && to === "day")
      result = `${value} minutes = ${value * 0.0006944444} day`;
    else if (from === "minutes" && to === "month")
      result = `${value} minutes = ${value * 0.0000228154} month`;
    else if (from === "hour" && to === "minutes")
      result = `${value} hour = ${value * 60} minutes`;
    else if (from === "hour" && to === "second")
      result = `${value} hour = ${value * 3600} second`;
    else if (from === "hour" && to === "day")
      result = `${value} hour = ${value * 0.0416666667} day`;
    else if (from === "hour" && to === "month")
      result = `${value} hour = ${value * 0.0013689254} month`;
    else if (from === "day" && to === "minutes")
      result = `${value} day = ${value * 1440} minutes`;
    else if (from === "day" && to === "second")
      result = `${value} day = ${value * 86400} second`;
    else if (from === "day" && to === "hour")
      result = `${value} day = ${value * 24} hour`;
    else if (from === "day" && to === "month")
      result = `${value} day = ${value * 0.0328542094} month`;
    else if (from === "month" && to === "minutes")
      result = `${value} month = ${value * 43830} minutes`;
    else if (from === "month" && to === "second")
      result = `${value} month = ${value * 2629800} second`;
    else if (from === "month" && to === "hour")
      result = `${value} month = ${value * 730.5} hour`;
    else if (from === "month" && to === "day")
      result = `${value} month = ${value * 30.4375} day`;
  }

  // weight conversion
  if (selectVal === "weight") {
    if (from === "Kilogram" && to === "Gram")
      result = `${value} Kilogram = ${value * 1000} Gram`;
    else if (from === "Kilogram" && to === "Milligram")
      result = `${value} Kilogram = ${value * 1000000} Milligram`;
    else if (from === "Kilogram" && to === "Pound")
      result = `${value} Kilogram = ${value * 2.2046244202} Pound`;
    else if (from === "Gram" && to === "Kilogram")
      result = `${value} Gram = ${value * 0.001} Kilogram`;
    else if (from === "Gram" && to === "Milligram")
      result = `${value} Gram = ${value * 1000} Milligram`;
    else if (from === "Gram" && to === "Pound")
      result = `${value} Gram = ${value * 0.0022046244} Pound`;
    else if (from === "Milligram" && to === "Kilogram")
      result = `${value} Milligram = ${value * 0.000001} Kilogram`;
    else if (from === "Milligram" && to === "Gram")
      result = `${value} Milligram = ${value * 0.001} Gram`;
    else if (from === "Milligram" && to === "Pound")
      result = `${value} Milligram = ${value * 0.0000022046} Pound`;
    else if (from === "Pound" && to === "Kilogram")
      result = `${value} Pound= ${value * 0.453592} Kilogram`;
    else if (from === "Pound" && to === "Gram")
      result = `${value} Pound = ${value * 453.592} Gram`;
    else if (from === "Pound" && to === "Milligram")
      result = `${value} Pound = ${value * 453592} Milligram`;
  }

  //volume conversion
  if (selectVal === "Volume") {
    if (from === "Cubic Kilometer" && to === "Cubic Meter")
      result = `${value} Cubic Kilometer = ${value * 1000000000} Cubic Meter`;
    else if (from === "Cubic Kilometer" && to === "Cubic Centimeter")
      result = `${value} Cubic Kilometer = ${
        value * 1000000000000000
      } Cubic Centimeter`;
    else if (from === "Cubic Kilometer" && to === "Cubic Millimeter")
      result = `${value} Cubic Kilometer = ${
        value * 1000000000000000000
      } Cubic Millimeter`;
    else if (from === "Cubic Meter" && to === "Cubic Kilometer")
      result = `${value} Cubic Meter = ${value / 1000000000} Cubic Kilometer`;
    else if (from === "Cubic Meter" && to === "Cubic Centimeter")
      result = `${value} Cubic Meter = ${value * 1000000} Cubic Centimeter`;
    else if (from === "Cubic Meter" && to === "Cubic Millimeter")
      result = `${value} Cubic Meter = ${value * 1000000000} Cubic Millimeter`;
    else if (from === "Cubic Centimeter" && to === "Cubic Kilometer")
      result = `${value} Cubic Centimeter = ${
        value / 1000000000000000
      } Cubic Kilometer`;
    else if (from === "Cubic Centimeter" && to === "Cubic Meter")
      result = `${value} Cubic Centimeter = ${value / 1000000} Cubic Meter`;
    else if (from === "Cubic Centimeter" && to === "Cubic Millimeter")
      result = `${value} Cubic Centimeter = ${value * 1000} Cubic Millimeter`;
    else if (from === "Cubic Millimeter" && to === "Cubic Kilometer")
      result = `${value} Cubic Millimeter= ${
        value / 1000000000000000000
      } Cubic Kilometer`;
    else if (from === "Cubic Millimeter" && to === "Cubic Meter")
      result = `${value} Cubic Millimeter = ${value / 1000000000} Cubic Meter`;
    else if (from === "Cubic Millimeter" && to === "Cubic Centimeter")
      result = `${value} Cubic Millimeter = ${value / 1000} Cubic Centimeter`;
  }

  output.innerHTML = result;
  resLable.style.display = "block";
});
