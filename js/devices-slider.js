new Vue({ 
    el: '#products',
    data() {
      return {
          productList: [
            {
              name: 'A1 Easy',
              displayName: 'BP A1 EASY',
              img: 'img/products/a1-easy.png',
              url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a1-easy',
              description: 'Tlakomjer',
              features: [
                {
                  name: 'Indikator aritmije pulsa',
                  icon: 'img/products/icons/pad.png'
                },
                {
                  name: 'Gentle+ tehnologija manžete',
                  icon: 'img/products/icons/gentle+.png'
                },
                {
                  name: 'Meka konusna manžeta',
                  icon: 'img/products/icons/soft.png'
                },
                {
                  name: 'Indikator pokreta ruke',
                  icon: 'img/products/icons/hand-movement.png'
                },
                {
                  name: 'Indikator provjere manžete',
                  icon: 'img/products/icons/check.png'
                }
              ],
              featureBar: [
                {
                  name: 'Clinically Validated',
                  icon: 'img/products/icons/clinically-validated.png'
                },
                {
                  name: '5 year guarantee',
                  icon: 'img/products/icons/5-year.png'
                }
              ]
              },
              {
                name: 'A2 Classic',
                displayName: 'BP A2 CLASSIC',
                img: 'img/products/a2-classic.png',
                url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-classic',
                features: [
                  {
                    name: 'Indikator aritmije pulsa',
                    icon: 'img/products/icons/pad.png'
                  },
                  {
                    name: 'Gentle+ tehnologija manžete',
                    icon: 'img/products/icons/gentle+.png'
                  },
                  {
                    name: 'Meka konusna manžeta',
                    icon: 'img/products/icons/soft.png'
                  },
                  {
                    name: '30 memorija',
                    icon: 'img/products/icons/memory.png'
                  },
                  {
                    name: 'Adapter uključen u pakiranju',
                    icon: 'img/products/icons/power-brick.png'
                  }
                ],
                featureBar: [
                  {
                    name: 'Clinically Validated',
                    icon: 'img/products/icons/clinically-validated.png'
                  },
                  {
                    name: '5 year guarantee',
                    icon: 'img/products/icons/5-year.png'
                  }
                ]
                },
                {
                  name: 'A2 Basic',
                  displayName: 'BP A2 BASIC',
                  img: 'img/products/a2-basic.png',
                  url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-basic',
                  features: [
                    {
                      name: 'Indikator aritmije pulsa',
                      icon: 'img/products/icons/pad.png'
                    },
                    {
                      name: 'Gentle+ tehnologija manžete',
                      icon: 'img/products/icons/gentle+.png'
                    },
                    {
                      name: 'Meka konusna manžeta',
                      icon: 'img/products/icons/soft.png'
                    },
                    {
                      name: 'Indikator pokreta ruke',
                      icon: 'img/products/icons/hand-movement.png'
                    },
                    {
                      name: 'Indikator provjere manžete',
                      icon: 'img/products/icons/check.png'
                    },
                    {
                      name: '30 memorija',
                      icon: 'img/products/icons/memory.png'
                    }
                  ],
                  featureBar: [
                    {
                      name: 'Clinically Validated',
                      icon: 'img/products/icons/clinically-validated.png'
                    },
                    {
                      name: '5 year guarantee',
                      icon: 'img/products/icons/5-year.png'
                    }
                  ]
                  },
                  {
                    name: 'A3 Plus',
                    displayName: 'BP A3 PLUS',
                    img: 'img/products/a3-plus.png',
                    url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a3-plus',
                    features: [
                      {
                        name: 'Indikator aritmije pulsa',
                        icon: 'img/products/icons/pad.png'
                      },
                      {
                        name: 'Tehnologija 3 uzastopna mjerenja',
                        icon: 'img/products/icons/mam.png'
                      },
                      {
                        name: 'Gentle+ tehnologija manžete',
                        icon: 'img/products/icons/gentle+.png'
                      },
                      {
                        name: 'Meka konusna manžeta',
                        icon: 'img/products/icons/soft.png'
                      },
                      {
                        name: 'Indikator pokreta ruke',
                        icon: 'img/products/icons/hand-movement.png'
                      },
                      {
                        name: 'Indikator provjere manžete',
                        icon: 'img/products/icons/check.png'
                      },
                      {
                        name: '2 korisnika s 99 memorija',
                        icon: 'img/products/icons/memory.png'
                      },
                      {
                        name: 'Adapter uključen u pakiranju',
                        icon: 'img/products/icons/power-brick.png'
                      }
                    ],
                    featureBar: [
                      {
                        name: 'Clinically Validated',
                        icon: 'img/products/icons/clinically-validated.png'
                      },
                      {
                        name: '5 year guarantee',
                        icon: 'img/products/icons/5-year.png'
                      }
                    ]
                    },
                    {
                      name: 'A6 PC',
                      displayName: 'BP A6 PC',
                      img: 'img/products/a6-pc.png',
                      url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a6-pc',
                      features: [
                        {
                          name: 'Pouzdana metoda otkrivanja atrijske fibrilacije',
                          icon: 'img/products/icons/afib-sens.png'
                        },
                        {
                          name: 'Tehnologija 3 uzastopna mjerenja',
                          icon: 'img/products/icons/mam.png'
                        },
                        {
                          name: 'Gentle+ tehnologija manžete',
                          icon: 'img/products/icons/gentle+.png'
                        },
                        {
                          name: 'Tvrda konusna manžeta',
                          icon: 'img/products/icons/soft.png'
                        },
                        {
                          name: 'Indikator pokreta ruke',
                          icon: 'img/products/icons/hand-movement.png'
                        },
                        {
                          name: 'Indikator provjere manžete',
                          icon: 'img/products/icons/check.png'
                        },
                        {
                          name: '2 korisnika s 99 memorija',
                          icon: 'img/products/icons/memory.png'
                        },
                        {
                          name: 'Adapter uključen u pakiranju',
                          icon: 'img/products/icons/power-brick.png'
                        }
                      ],
                      featureBar: [
                        {
                          name: 'Clinically Validated',
                          icon: 'img/products/icons/clinically-validated.png'
                        },
                        {
                          name: '5 year guarantee',
                          icon: 'img/products/icons/5-year.png'
                        }
                      ]
                      },
                      {
                        name: 'A6 BT',
                        displayName: 'BP A6 BT',
                        img: 'img/products/a6-bt.jpg',
                        url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a6-bt',
                        features: [
                          {
                            name: 'Pouzdana metoda otkrivanja atrijske fibrilacije',
                            icon: 'img/products/icons/afib-sens.png'
                          },
                          {
                            name: 'Tehnologija 3 uzastopna mjerenja',
                            icon: 'img/products/icons/mam.png'
                          },
                          {
                            name: 'Gentle+ tehnologija manžete',
                            icon: 'img/products/icons/gentle+.png'
                          },
                          {
                            name: 'Tvrda konusna manžeta',
                            icon: 'img/products/icons/soft.png'
                          },
                          {
                            name: 'Indikator pokreta ruke',
                            icon: 'img/products/icons/hand-movement.png'
                          },
                          {
                            name: 'Indikator provjere manžete',
                            icon: 'img/products/icons/check.png'
                          },
                          {
                            name: '99 memorija',
                            icon: 'img/products/icons/memory.png'
                          },
                          {
                            name: 'Adapter uključen u pakiranju',
                            icon: 'img/products/icons/power-brick.png'
                          }
                        ],
                        featureBar: [
                          {
                            name: 'Clinically Validated',
                            icon: 'img/products/icons/clinically-validated.png'
                          },
                          {
                            name: '5 year guarantee',
                            icon: 'img/products/icons/5-year.png'
                          },
                          {
                            name: 'Bluetooth',
                            icon: 'img/products/icons/bt.png'
                          }
                        ]
                        },
                      {
                        name: 'A150 AFIB',
                        displayName: 'BP A150 AFIB',
                        img: 'img/products/a150-afib.png',
                        url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a150-afib',
                        features: [
                          {
                            name: 'Pouzdana metoda otkrivanja atrijske fibrilacije',
                            icon: 'img/products/icons/afib-sens.png'
                          },
                          {
                            name: 'Tehnologija 3 uzastopna mjerenja',
                            icon: 'img/products/icons/mam.png'
                          },
                          {
                            name: 'Gentle+ tehnologija manžete',
                            icon: 'img/products/icons/gentle+.png'
                          },
                          {
                            name: 'Meka konusna manžeta',
                            icon: 'img/products/icons/soft.png'
                          },
                          {
                            name: 'Indikator pokreta ruke',
                            icon: 'img/products/icons/hand-movement.png'
                          },
                          {
                            name: 'Indikator provjere manžete',
                            icon: 'img/products/icons/check.png'
                          },
                          {
                            name: '30 memorija',
                            icon: 'img/products/icons/memory.png'
                          }
                        ],
                        featureBar: [
                          {
                            name: 'Clinically Validated',
                            icon: 'img/products/icons/clinically-validated.png'
                          },
                          {
                            name: '5 year guarantee',
                            icon: 'img/products/icons/5-year.png'
                          }
                        ]
                        },
                        {
                          name: 'A3 Plus',
                          displayName: 'BP A3 PLUS',
                          img: 'img/products/a3-plus.png',
                          url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a3-plus',
                          features: [
                            {
                              name: 'Indikator aritmije pulsa',
                              icon: 'img/products/icons/pad.png'
                            },
                            {
                              name: 'Gentle+ tehnologija manžete',
                              icon: 'img/products/icons/gentle+.png'
                            },
                            {
                              name: 'Meka konusna manžeta',
                              icon: 'img/products/icons/soft.png'
                            },
                            {
                              name: 'Indikator pokreta ruke',
                              icon: 'img/products/icons/hand-movement.png'
                            },
                            {
                              name: 'Indikator provjere manžete',
                              icon: 'img/products/icons/check.png'
                            },
                            {
                              name: 'Gentle+ tehnologija manžete',
                              icon: 'img/products/icons/gentle+.png'
                            }
                          ],
                          featureBar: [
                            {
                              name: 'Clinically Validated',
                              icon: 'img/products/icons/clinically-validated.png'
                            },
                            {
                              name: '5 year guarantee',
                              icon: 'img/products/icons/5-year.png'
                            }
                          ]
                          },
                          {
                            name: 'B3 AFIB',
                            displayName: 'BP B3 AFIB',
                            img: 'img/products/b3-afib.png',
                            url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-b3-afib',
                            features: [
                              {
                                name: 'Pouzdana metoda otkrivanja atrijske fibrilacije',
                                icon: 'img/products/icons/afib-sens.png'
                              },
                              {
                                name: 'Indikator aritmije pulsa',
                                icon: 'img/products/icons/pad.png'
                              },
                              {
                                name: 'Tehnologija 3 uzastopna mjerenja',
                                icon: 'img/products/icons/mam.png'
                              },
                              {
                                name: 'Indikator provjere manžete',
                                icon: 'img/products/icons/check.png'
                              }
                            ],
                            featureBar: [
                              {
                                name: 'Clinically Validated',
                                icon: 'img/products/icons/clinically-validated.png'
                              },
                              {
                                name: '5 year guarantee',
                                icon: 'img/products/icons/5-year.png'
                              }
                            ]
                            }
          ],
          counter: 0,
          productToShow: []
      }
    },
    methods: {
    },
    mounted() {

      this.productToShow = this.productList[0];
      this.productList.forEach(element => {
      });
      
      var nextBtnProd = this.$el.querySelector('.next-btn-prod'),
          prevBtnProd = this.$el.querySelector('.prev-btn-prod'),
          productCard = this.$el.querySelector('.product-card');
            
      nextBtnProd.addEventListener('click', () => {
        if(this.counter < this.productList.length-1){
          this.counter++;
        } else {
          this.counter = 0;
        }
        this.productToShow = this.productList[this.counter];
      });
      prevBtnProd.addEventListener('click', () => {
        if(this.counter > 0){
          this.counter--;
        } else {
          this.counter = this.productList.length-1;
        }
        this.productToShow = this.productList[this.counter];
    });

    productCard.addEventListener('swiped-left', function(e) {
      console.log(this.productList);
      if(this.counter < this.productList.length-1){
        this.counter++;
      } else {
        this.counter = 0;
      }
      this.productToShow = this.productList[this.counter];
  });

  productCard.addEventListener('swiped-right', function(e) {
      if(this.counter > 0){
        this.counter--;
      } else {
        this.counter = this.productList.length-1;
      }
      this.productToShow = this.productList[this.counter];
  });


    }
  });