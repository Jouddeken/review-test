const getAddress = ({ street, number, zip, state, country }) => {
  return `${number + ' ' || ''}${street + ' ' || ''}${zip + ' ' || ''}${state + ' ' || ''}${country || ''}`
}

const rating = (number) => {
  if (number < 1) {
    return '☆☆☆☆☆'
  }
  if (number > 1 && number < 2) {
    return '★☆☆☆☆'
  }
  if (number > 2 && number < 3) {
    return '★★☆☆☆'
  }
  if (number > 3 && number < 4) {
    return '★★★☆☆'
  }
  if (number > 4 && number < 5) {
    return '★★★★☆'
  }
  if (number > 5 && number < 6) {
    return '★★★★★'
  }
}

export const dataNormalizer = (data) => {
  let x = [];
  for (let i = 0; i < data.length; i++) {
    const newData = {
      ...data[i],
      full_name: data[i].name.charAt(0).toUpperCase() + data[i].name.slice(1) + ' ' + data[i].full_name.charAt(0).toUpperCase() + data[i].full_name.slice(1),
      address: getAddress(data[i].address),
      DoB: Intl.DateTimeFormat('en-GB').format(new Date(data[i].age)),
      rating: rating(data[i].rating)
    };

    delete newData.age;
    delete newData.name;

    x.push(newData);
  }
  return x;
}

