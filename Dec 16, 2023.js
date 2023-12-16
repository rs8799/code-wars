const toFreud = string =>
  string
    ? string
        .split(' ')
        .map(_ => 'sex')
        .join(' ')
    : ''