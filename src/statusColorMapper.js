export const statusColorMapper = (status) => {
  let result = '';

  if (status === 'in_progress') {
    result = 'green';
  } else if (status === 'on_hold') {
    result = 'red';
  } else if (status === 'new') {
    result = 'blue';
  } else {
    result = 'gray';
  }
  
  return result || 'gray';
};

export default statusColorMapper;
