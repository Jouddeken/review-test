export const dataNormalizer = (data) => {
  let x = [];
  for (let i = 0; i < data.length; i++) {
    const newData = { ...data[i],
      // Create full name from first and last name and capitalize all names
      full_name: data[i].first_name.charAt(0).toUpperCase() + data[i].first_name.slice(1) + ' ' + data[i].last_name.charAt(0).toUpperCase() + data[i].last_name.slice(1),
      // Create date of birth
      date_of_birth: Intl.DateTimeFormat('en-GB').format(new Date(data[i].age)),
    };
    delete newData.age;
    delete newData.name;
    x.push(newData);
  }
  return x;
};

