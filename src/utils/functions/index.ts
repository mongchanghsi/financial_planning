export const calculate_future_value = ({
  currentValue = 0,
  annualDeposits = 0,
  interestRate = 0, // Assume that interstRate is in 0.03
  years = 1,
}: {
  currentValue: number;
  annualDeposits: number;
  interestRate: number;
  years: number;
}): string[] => {
  let principleValue = currentValue;
  const principleValue_string = principleValue.toString();
  let progression: string[] = [principleValue_string];
  for (let year = 0; year < years; year++) {
    principleValue = (principleValue + annualDeposits) * (1 + interestRate);
    progression.push(principleValue.toFixed(2));
  }
  return progression;
};

export const generate_years_label = (number_of_years: number): string[] => {
  const startingYear = new Date().getFullYear();
  let output = [startingYear];

  for (let i = 1; i < number_of_years + 1; i++) {
    output.push(startingYear + i);
  }

  return convert_data_to_string(output);
};

const convert_data_to_string = (num_array: number[]): string[] => {
  return num_array.map((item: number) => item.toString());
};
