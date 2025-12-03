function getBloodPressure(history) {
  const result = [];

  // get first 6 months in reverse order
  for (let i = 5; i >= 0; i--) {
    const { month, year, blood_pressure } = history[i];
    const { levels: diastolicLevel, value: diastolicValue } =
      blood_pressure.diastolic;
    const { levels: systolicLevel, value: systolicValue } =
      blood_pressure.systolic;

    // console.log(systolicValue)

    result.push({
      month,
      year,
      diastolicLevel,
      diastolicValue,
      systolicLevel,
      systolicValue,
    });
  }

//   console.log(result);

  return result;
}

export { getBloodPressure };
