new Vue({ 
    el: '#products',
    data() {
      return {
          productList: [
                          {
                            name: 'B3 AFIB',
                            displayName: 'BP B3 AFIB',
                            img: 'img/products/b3-afib.png',
                            url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-b3-afib',
                            description: 'Tlakomjer s AFIBsens, IHB i MAM tehnologijama. Podržava 99 memorija.',
                            index: 0,
                            features: [
                              {
                                name: 'Mogućnost otkrivanja rizika atrijske fibrilacije',
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
                            },
                            {
                              name: 'A6 PC',
                              displayName: 'BP A6 PC',
                              img: 'img/products/a6-pc.png',
                              url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a6-pc',
                              description: 'Tlakomjer s AFIBsens i MAM tehnologijama. Tvrda konusna manžeta, memorija za 2 korisnika te adapter u paketu.',
                              index: 1,
                              features: [
                                {
                                  name: 'Mogućnost otkrivanja rizika atrijske fibrilacije',
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
                              name: 'A150 AFIB',
                              displayName: 'BP A150 AFIB',
                              img: 'img/products/a150-afib.png',
                              url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a150-afib',
                              description: 'Tlakomjer s IHB i MAM tehnologijama. Podržava 30 memorija.',
                              index: 2,
                              features: [
                                {
                                  name: 'Mogućnost otkrivanja rizika atrijske fibrilacije',
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
                                  name: 'Meka konusna manžeta - 2 godine garancije',
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
                                name: 'A2 Basic',
                                displayName: 'BP A2 Basic',
                                img: 'img/products/a2-basic.png',
                                url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-basic',
                                description: 'Tlakomjer s IHB tehnologijom. Podržava 30 memorija.',
                                index: 3,
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
                                    name: 'Meka konusna manžeta - 2 godine garancije',
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
                    displayName: 'BP A3 Plus',
                    img: 'img/products/a3-plus.png',
                    url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a3-plus',
                    description: 'Tlakomjer s IHB i MAM tehnologijama. Memorija za 2 korisnika te adapter u paketu.',
                    index: 4,
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
                        name: 'Meka konusna manžeta - 2 godine garancije',
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
                      name: 'A2 Classic',
                      displayName: 'BP A2 Classic',
                      img: 'img/products/a2-classic.png',
                      url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a2-classic',
                      description: 'Tlakomjer s IHB tehnologijom. Podržava 30 memorija te adapter u paketu.',
                      index: 5,
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
                          name: 'Meka konusna manžeta - 2 godine garancije',
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
              name: 'A1 Easy',
              displayName: 'BP A1 Easy',
              img: 'img/products/a1-easy.png',
              url: 'https://www.microlife.hr/proizvodi/krvni-tlak/automatski-nadlakticni-tlakomjeri/bp-a1-easy',
              description: 'Tlakomjer s IHB tehnologijom. Najjednostavniji model, idealan kao putni tlakomjer.',
              index: 6,
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
                  name: 'Meka konusna manžeta - 2 godine garancije',
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
              }
          ],
          counter: 0,
          productToShow: []
      }
    },
    methods: {
      checkIfItemInStorage: function () {

        const item = document.querySelector('#products');
    
        const isInViewport = function(el) {
          const rect = el.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight/2 && rect.top >= -(window.innerHeight/3)
          );
        };
    
        const run = () =>  {
          if(isInViewport(item)) {
            if(localStorage.getItem('showProductIndex') != null) {
              let index = parseInt(localStorage.getItem('showProductIndex'));
              this.productToShow = this.productList[index];
              localStorage.removeItem('showProductIndex');
            }
          }
        };
    
        window.addEventListener('load', run);
        window.addEventListener('resize', run);
        window.addEventListener('scroll', run);
    }
    },
    mounted() {

      this.productToShow = this.productList[0];
      this.productList.forEach(element => {
      });
      
      var nextBtnProd = this.$el.querySelector('.next-btn-prod'),
          prevBtnProd = this.$el.querySelector('.prev-btn-prod'),
          productCard = this.$el.querySelector('.product-card');
            
      nextBtnProd.addEventListener('click', () => {
        if(this.counter < (this.productList.length - 1)){
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
          this.counter = this.productList.length - 1;
        }
        this.productToShow = this.productList[this.counter];
      });

      this.checkIfItemInStorage();
    

/*       productCard.addEventListener('swiped-left', function(e) {
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
      }); */

    }
  });