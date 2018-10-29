import { brown, indigo, pink, purple, red } from '@material-ui/core/colors'

export const allLayers = [
  {
    label: 'Корж',
    value: { color: brown[600], costFor10: 5 },
  },
  {
    label: 'Карсный крем',
    value: { color: red.A100, costFor10: 20 },
  },
  {
    label: 'Розовый крем',
    value: { color: pink.A400, costFor10: 50 },
  },
  {
    label: 'Сливы',
    value: { color: purple.A400, costFor10: 100 },
  },
  {
    label: 'Маскарпоне',
    value: { color: indigo[500], costFor10: 200 },
  },
  {
    label: 'Шоколад',
    value: { color: brown[900], costFor10: 100 },
  },
];