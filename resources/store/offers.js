export const state = () => ({
  offers: [
    {
      title: 'Gull',
      price: '999',
      benefits: [
        'Internett <strong>700mps</strong> opp og ned',
        '70 kanaler',
        'Programarkiv',
        '500 timer opptak',
        '<strong>Viaplay inkludert</strong>'
      ],
      isCtaActive: true,
      isHighlighted: false

    },
    {
      title: 'Sølv',
      price: '659',
      benefits: [
        'Internett <strong>500mps</strong> opp og ned',
        '50 kanaler',
        'Programarkiv',
        '300 timer opptak',
        '<strong>Viaplay inkludert</strong>'
      ],
      isCtaActive: true,
      isHighlighted: true

    },
    {
      title: 'Bronse',
      price: '359',
      benefits: [
        'Internett <strong>300mps</strong> opp og ned',
        '20 kanaler ',
        'Programarkiv',
        '100 timer opptak'
      ],
      isCtaActive: true,
      isHighlighted: false

    }
  ]
});
