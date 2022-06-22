const rating = (number) => {
  if (number < 1) {
    return '☆☆☆☆☆';
  }
  if (number > 1 && number < 2) {
    return '★☆☆☆☆';
  }
  if (number > 2 && number < 3) {
    return '★★☆☆☆';
  }
  if (number > 3 && number < 4) {
    return '★★★☆☆';
  }
  if (number > 4 && number < 5) {
    return '★★★★☆';
  }
  if (number > 5 && number < 6) {
    return '★★★★★';
  }
  if (!number) {
    return 'No rating';
  }
};

export const dataNormalizer = (data) => {
  let x = [];
  for (let i = 0; i < data.length; i++) {
    const newData = { ...data[i],
      // Create full name from first and last name and capitalize all names
      full_name: data[i].first_name.charAt(0).toUpperCase() + data[i].first_name.slice(1) + ' ' + data[i].last_name.charAt(0).toUpperCase() + data[i].last_name.slice(1),
      // Create date of birth
      date_of_birth: Intl.DateTimeFormat('en-GB').format(new Date(data[i].age)),
      // Get the rating
      rating: rating(data[i].rating)
    };
    delete newData.age;
    delete newData.name;
    x.push(newData);
  }
  return x;
};

