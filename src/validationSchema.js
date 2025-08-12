import * as yup from 'yup';

export const tournamentSchema = yup.object().shape({
  title: yup.string().required('Title is required'),
  subtitle: yup.string().required('Subtitle is required'),
  date: yup.date().required('Date is required'),
  season: yup.string().required('Season is required'),
  teamLimit: yup
    .number()
    .required('Team limit is required')
    .positive()
    .integer(),
  playerLimit: yup
    .number()
    .required('Player limit is required')
    .positive()
    .integer(),
  contact: yup
    .string()
    .matches(/^\d{10}$/, 'Contact must be 10 digits')
    .required('Contact number is required'),
  // image: yup
  //   .mixed()
  //   .test('required', 'Image is required', (value) => value && value.length > 0),
});
