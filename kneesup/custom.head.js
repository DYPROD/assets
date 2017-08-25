(function() {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
        if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
                ShopifyBuyInit();
            } else {
                loadScript();
            }
        } else {
            loadScript();
        }

        function loadScript() {
            var script = document.createElement('script');
            script.async = true;
            script.src = scriptURL;
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
            script.onload = ShopifyBuyInit;
        }

        function ShopifyBuyInit() {
            var client = ShopifyBuy.buildClient({
                domain: 'thisislekka-com.myshopify.com',
                apiKey: 'bf844c76bf5bc6807c21a9665b830853',
                appId: '6',
            });
            ShopifyBuy.UI.onReady(client).then(function(ui) {
                ui.createComponent('product', {
                    id: [8965940423],
                    node: document.getElementById('buynavdt'),
                    moneyFormat: 'AUD%20%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "variantId": "all",
                            "width": "250px",
                            "contents": {
                                "img": false,
                                "imgWithCarousel": false,
                                "title": false,
                                "variantTitle": false,
                                "price": false,
                                "description": false,
                                "buttonWithQuantity": false,
                                "quantity": false
                            },
                            "styles": {
                                "product": {
                                    "text-align": "left",
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0",
                                        "margin-bottom": "50px"
                                    }
                                },
                                "button": {
                                    "background-color": "#a68f66",
                                    "font-size": "40px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#95815c"
                                    },
                                    "border-radius": "0px",
                                    ":focus": {
                                        "background-color": "#95815c"
                                    }
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                },
                                "compareAt": {
                                    "font-size": "12px"
                                }
                            }
                        },
                        "cart": {
                            "contents": {
                                "button": true
                            },
                            "styles": {
                                "button": {
                                    "background-color": "#00b0cb",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#00b0cb"
                                    },
                                    "border-radius": "0px",
                                    ":focus": {
                                        "background-color": "#00b0cb"
                                    }
                                },
                                "footer": {
                                    "background-color": "#ffffff"
                                }
                            }
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "variantTitle": false,
                                "buttonWithQuantity": true,
                                "button": false,
                                "quantity": false
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                },
                                "button": {
                                    "background-color": "#00b0cb",
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px",
                                    ":hover": {
                                        "background-color": "#00b0cb"
                                    },
                                    "border-radius": "0px",
                                    ":focus": {
                                        "background-color": "#00b0cb"
                                    }
                                },
                                "quantityInput": {
                                    "font-size": "14px",
                                    "padding-top": "15px",
                                    "padding-bottom": "15px"
                                }
                            }
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "background-color": "#00b0cb",
                                    ":hover": {
                                        "background-color": "#00b0cb"
                                    },
                                    ":focus": {
                                        "background-color": "#00b0cb"
                                    }
                                },
                                "count": {
                                    "font-size": "14px"
                                }
                            }
                        },
                        "productSet": {
                            "styles": {
                                "products": {
                                    "@media (min-width: 601px)": {
                                        "margin-left": "-20px"
                                    }
                                }
                            }
                        }
                    }
                });
            });
        }
    })();
