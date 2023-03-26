
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, set, ref, onValue, update } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_qH3tD1JAJif86Fxm6otkD6iEIMYqzVk",
    authDomain: "snkr-97b15.firebaseapp.com",
    databaseURL: "https://snkr-97b15-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "snkr-97b15",
    storageBucket: "snkr-97b15.appspot.com",
    messagingSenderId: "685803751797",
    appId: "1:685803751797:web:61bba736f52e788e81eb3c",
    measurementId: "G-0BLGRE0YDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app);
//const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);




onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        const userRef = ref(database, `users/${uid}`);
        onValue(userRef, (snapshot) => {
            const userData = snapshot.val();
            const username = userData?.username ?? '';

            const schoen1 = userData?.schoenen?.schoenm1?.schoen ?? '';
            const prijs1 = userData?.schoenen?.schoenm1?.prijs ?? '';
            const maat1 = userData?.schoenen?.maatm1 ?? {};
            const maat1Values = Object.values(maat1);
            const maat1String = maat1Values.length ? maat1Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen2 = userData?.schoenen?.schoenm2?.schoen ?? '';
            const prijs2 = userData?.schoenen?.schoenm2?.prijs ?? '';
            const maat2 = userData?.schoenen?.maatm2 ?? {};
            const maat2Values = Object.values(maat2);
            const maat2String = maat2Values.length ? maat2Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen3 = userData?.schoenen?.schoenm3?.schoen ?? '';
            const prijs3 = userData?.schoenen?.schoenm3?.prijs ?? '';
            const maat3 = userData?.schoenen?.maatm3 ?? {};
            const maat3Values = Object.values(maat3);
            const maat3String = maat3Values.length ? maat3Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen4 = userData?.schoenen?.schoenm4?.schoen ?? '';
            const prijs4 = userData?.schoenen?.schoenm4?.prijs ?? '';
            const maat4 = userData?.schoenen?.maatm4 ?? {};
            const maat4Values = Object.values(maat4);
            const maat4String = maat4Values.length ? maat4Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen5 = userData?.schoenen?.schoenv1?.schoen ?? '';
            const prijs5 = userData?.schoenen?.schoenv1?.prijs ?? '';
            const maat5 = userData?.schoenen?.maatv1 ?? {};
            const maat5Values = Object.values(maat5);
            const maat5String = maat5Values.length ? maat5Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen6 = userData?.schoenen?.schoenv2?.schoen ?? '';
            const prijs6 = userData?.schoenen?.schoenv2?.prijs ?? '';
            const maat6 = userData?.schoenen?.maatv2 ?? {};
            const maat6Values = Object.values(maat6);
            const maat6String = maat6Values.length ? maat6Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen7 = userData?.schoenen?.schoenv3?.schoen ?? '';
            const prijs7 = userData?.schoenen?.schoenv3?.prijs ?? '';
            const maat7 = userData?.schoenen?.maatv3 ?? {};
            const maat7Values = Object.values(maat7);
            const maat7String = maat7Values.length ? maat7Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen8 = userData?.schoenen?.schoenv4?.schoen ?? '';
            const prijs8 = userData?.schoenen?.schoenv4?.prijs ?? '';
            const maat8 = userData?.schoenen?.maatv4 ?? {};
            const maat8Values = Object.values(maat8);
            const maat8String = maat8Values.length ? maat8Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen9 = userData?.schoenen?.schoenk1?.schoen ?? '';
            const prijs9 = userData?.schoenen?.schoenk1?.prijs ?? '';
            const maat9 = userData?.schoenen?.maatk1 ?? {};
            const maat9Values = Object.values(maat9);
            const maat9String = maat9Values.length ? maat9Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen10 = userData?.schoenen?.schoenk2?.schoen ?? '';
            const prijs10 = userData?.schoenen?.schoenk2?.prijs ?? '';
            const maat10 = userData?.schoenen?.maatk2 ?? {};
            const maat10Values = Object.values(maat10);
            const maat10String = maat10Values.length ? maat10Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen11 = userData?.schoenen?.schoenk3?.schoen ?? '';
            const prijs11 = userData?.schoenen?.schoenk3?.prijs ?? '';
            const maat11 = userData?.schoenen?.maatk3 ?? {};
            const maat11Values = Object.values(maat11);
            const maat11String = maat11Values.length ? maat11Values.map(maat => `${maat.maat}`).join(', ') : '';

            const schoen12 = userData?.schoenen?.schoenk4?.schoen ?? '';
            const prijs12 = userData?.schoenen?.schoenk4?.prijs ?? '';
            const maat12 = userData?.schoenen?.maatk4 ?? {};
            const maat12Values = Object.values(maat12);
            const maat12String = maat12Values.length ? maat12Values.map(maat => `${maat.maat}`).join(', ') : '';

            const usernameElement = document.getElementById("naam");
            if (usernameElement) {
                usernameElement.innerText = `Welcome, ${username}!`;
            }
        
            const product1Element = document.getElementById("productm1");
            if (product1Element) {
                product1Element.innerText = `${schoen1}`;
                if(schoen1!= ''){
                    document.getElementById("M1").style.display="block"
                    document.getElementById("r1").style.display="block"
                }   
            }
            const prijs1Element = document.getElementById("prijsm1");
            if (prijs1Element) {
               prijs1Element.innerText = `${prijs1}`;
            }

            const maat1Element = document.getElementById("maatm1");
            if (maat1Element) {
                maat1Element.innerText = `${maat1String}`;
             }





             const product2Element = document.getElementById("productm2");
             if (product2Element) {
                 product2Element.innerText = `${schoen2}`;
                 if(schoen2!= ''){
                     document.getElementById("M2").style.display="block"
                     document.getElementById("r2").style.display="block"
                 }   
             }
             const prijs2Element = document.getElementById("prijsm2");
             if (prijs2Element) {
                prijs2Element.innerText = `${prijs2}`;
             }
 
             const maat2Element = document.getElementById("maatm2");
             if (maat2Element) {
                 maat2Element.innerText = `${maat2String}`;
              }





              const product3Element = document.getElementById("productm3");
             if (product3Element) {
                 product3Element.innerText = `${schoen3}`;
                 if(schoen3!= ''){
                     document.getElementById("M3").style.display="block"
                     document.getElementById("r3").style.display="block"
                 }   
             }
             const prijs3Element = document.getElementById("prijsm3");
             if (prijs3Element) {
                prijs3Element.innerText = `${prijs3}`;
             }
 
             const maat3Element = document.getElementById("maatm3");
             if (maat3Element) {
                 maat3Element.innerText = `${maat3String}`;
              }




              const product4Element = document.getElementById("productm4");
              if (product4Element) {
                  product4Element.innerText = `${schoen4}`;
                  if(schoen4!= ''){
                      document.getElementById("M4").style.display="block"
                      document.getElementById("r4").style.display="block"
                  }   
              }
              const prijs4Element = document.getElementById("prijsm4");
              if (prijs4Element) {
                 prijs4Element.innerText = `${prijs4}`;
              }
  
              const maat4Element = document.getElementById("maatm4");
              if (maat4Element) {
                  maat4Element.innerText = `${maat4String}`;
               }
 

               const product5Element = document.getElementById("productv1");
               if (product5Element) {
                   product5Element.innerText = `${schoen5}`;
                   if(schoen5!= ''){
                       document.getElementById("V1").style.display="block"
                       document.getElementById("r5").style.display="block"
                   }   
               }
               const prijs5Element = document.getElementById("prijsv1");
               if (prijs5Element) {
                  prijs5Element.innerText = `${prijs5}`;
               }
   
               const maat5Element = document.getElementById("maatv1");
               if (maat5Element) {
                   maat5Element.innerText = `${maat5String}`;
                }


                const product6Element = document.getElementById("productv2");
                if (product6Element) {
                    product6Element.innerText = `${schoen6}`;
                    if(schoen6!= ''){
                        document.getElementById("V2").style.display="block"
                        document.getElementById("r6").style.display="block"
                    }   
                }
                const prijs6Element = document.getElementById("prijsv2");
                if (prijs6Element) {
                   prijs6Element.innerText = `${prijs6}`;
                }
    
                const maat6Element = document.getElementById("maatv2");
                if (maat6Element) {
                    maat6Element.innerText = `${maat6String}`;
                 }
   
                 const product7Element = document.getElementById("productv3");
                 if (product7Element) {
                     product7Element.innerText = `${schoen7}`;
                     if(schoen7!= ''){
                         document.getElementById("V3").style.display="block"
                         document.getElementById("r7").style.display="block"
                     }   
                 }
                 const prijs7Element = document.getElementById("prijsv3");
                 if (prijs7Element) {
                    prijs7Element.innerText = `${prijs7}`;
                 }
     
                 const maat7Element = document.getElementById("maatv3");
                 if (maat7Element) {
                     maat7Element.innerText = `${maat7String}`;
                  }
    
                  const product8Element = document.getElementById("productv4");
                  if (product8Element) {
                      product8Element.innerText = `${schoen8}`;
                      if(schoen8!= ''){
                          document.getElementById("V4").style.display="block"
                          document.getElementById("r8").style.display="block"
                      }   
                  }
                  const prijs8Element = document.getElementById("prijsv4");
                  if (prijs8Element) {
                     prijs8Element.innerText = `${prijs8}`;
                  }
      
                  const maat8Element = document.getElementById("maatv4");
                  if (maat8Element) {
                      maat8Element.innerText = `${maat8String}`;
                   }
     

                   const product9Element = document.getElementById("productk1");
                   if (product9Element) {
                       product9Element.innerText = `${schoen9}`;
                       if(schoen9!= ''){
                           document.getElementById("K1").style.display="block"
                           document.getElementById("r9").style.display="block"
                       }   
                   }
                   const prijs9Element = document.getElementById("prijsk1");
                   if (prijs9Element) {
                      prijs9Element.innerText = `${prijs9}`;
                   }
       
                   const maat9Element = document.getElementById("maatk1");
                   if (maat9Element) {
                       maat9Element.innerText = `${maat9String}`;
                    }
      
                    const product10Element = document.getElementById("productk2");
                    if (product10Element) {
                        product10Element.innerText = `${schoen10}`;
                        if(schoen10!= ''){
                            document.getElementById("K2").style.display="block"
                            document.getElementById("r10").style.display="block"
                        }   
                    }
                    const prijs10Element = document.getElementById("prijsk2");
                    if (prijs10Element) {
                       prijs10Element.innerText = `${prijs10}`;
                    }
        
                    const maat10Element = document.getElementById("maatk2");
                    if (maat10Element) {
                        maat10Element.innerText = `${maat10String}`;
                     }
       

                     const product11Element = document.getElementById("productk3");
                     if (product11Element) {
                         product11Element.innerText = `${schoen11}`;
                         if(schoen11!= ''){
                             document.getElementById("K3").style.display="block"
                             document.getElementById("r11").style.display="block"
                         }   
                     }
                     const prijs11Element = document.getElementById("prijsk3");
                     if (prijs11Element) {
                        prijs11Element.innerText = `${prijs11}`;
                     }
         
                     const maat11Element = document.getElementById("maatk3");
                     if (maat11Element) {
                         maat11Element.innerText = `${maat11String}`;
                      }
        
                      const product12Element = document.getElementById("productk4");
                      if (product12Element) {
                          product12Element.innerText = `${schoen12}`;
                          if(schoen12!= ''){
                              document.getElementById("K4").style.display="block"
                              document.getElementById("r12").style.display="block"
                          }   
                      }
                      const prijs12Element = document.getElementById("prijsk4");
                      if (prijs12Element) {
                         prijs12Element.innerText = `${prijs12}`;
                      }
          
                      const maat12Element = document.getElementById("maatk4");
                      if (maat12Element) {
                          maat12Element.innerText = `${maat12String}`;
                       }
         
        });
    } else {
        console.log("User is signed out.");
    }















    if (document.querySelector('#m1')) {
        document.querySelector('#m1').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sm1');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }

            var value = document.getElementById('m1').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenm1'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatm1/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault()

        })
    }
    if (document.querySelector('#m2')) {
        document.querySelector('#m2').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sm2');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }

            var value = document.getElementById('m2').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenm2'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatm2/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault()

        })
    }
    if (document.querySelector('#m3')) {
        document.querySelector('#m3').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sm3');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
            var value = document.getElementById('m3').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenm3'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatm3/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });

            event.preventDefault()

        })
    }
    if (document.querySelector('#m4')) {
        document.querySelector('#m4').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sm4');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }

            var value = document.getElementById('m4').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenm4'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatm4/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault()

        })
    }
    if (document.querySelector('#v1')) {
        document.querySelector('#v1').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sv1');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }

            var value = document.getElementById('v1').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenv1'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatv1/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault()

        })
    }
    if (document.querySelector('#v2')) {
        document.querySelector('#v2').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sv2');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }

            var value = document.getElementById('v2').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenv2'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatv2/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });

            event.preventDefault()

        })
    }
    if (document.querySelector('#v3')) {
        document.querySelector('#v3').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sv3');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
            var value = document.getElementById('v3').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenv3'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatv3/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });

            event.preventDefault()

        })
    }
    if (document.querySelector('#v4')) {
        document.querySelector('#v4').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sv4');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
            var value = document.getElementById('v4').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenv4'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatv4/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault()

        })
    }
    if (document.querySelector('#k1')) {
        document.querySelector('#k1').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sk1');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
            var value = document.getElementById('k1').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenk1'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatk1/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });

            event.preventDefault()

        })
    }
    if (document.querySelector('#k2')) {
        document.querySelector('#k2').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sk2');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
            var value = document.getElementById('k2').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenk2'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatk2/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });

            event.preventDefault()

        })
    }
    if (document.querySelector('#k3')) {
        document.querySelector('#k3').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sk3');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
            var value = document.getElementById('k3').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenk3'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatk3/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });

            event.preventDefault()

        })
    }
    if (document.querySelector('#k4')) {
        document.querySelector('#k4').addEventListener('click', function (event) {
            const sizeRadios = document.getElementsByName('sk4');

            let activeSize = '';
            for (let i = 0; i < sizeRadios.length; i++) {
                if (sizeRadios[i].checked) {
                    activeSize = sizeRadios[i].value;
                    break;
                }
            }
            var value = document.getElementById('k4').value;
            var prijs = value.substr(0, 6);
            var schoen = value.substr(6);
            set(ref(database, 'users/' + user.uid + '/schoenen/schoenk4'), {
                schoen: schoen,
                prijs: prijs,
            }).catch((error) => {
                alert(error);
            });
            
            set(ref(database, 'users/' + user.uid + '/schoenen/maatk4/'+activeSize), {
                maat: activeSize
            }).catch((error) => {
                alert(error);
            });

            event.preventDefault()

        })
    }


    if (document.querySelector('#r1')) {
        document.querySelector('#r1').addEventListener('click', function (event) {
         document.getElementById("M1").style.display="none"
         document.getElementById("r1").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatm1": null,
                "schoenm1": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r2')) {
        document.querySelector('#r2').addEventListener('click', function (event) {
         document.getElementById("M2").style.display="none"
         document.getElementById("r2").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatm2": null,
                "schoenm2": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r3')) {
        document.querySelector('#r3').addEventListener('click', function (event) {
         document.getElementById("M3").style.display="none"
         document.getElementById("r3").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatm3": null,
                "schoenm3": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r4')) {
        document.querySelector('#r4').addEventListener('click', function (event) {
         document.getElementById("M4").style.display="none"
         document.getElementById("r4").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatm4": null,
                "schoenm4": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r5')) {
        document.querySelector('#r5').addEventListener('click', function (event) {
         document.getElementById("V1").style.display="none"
         document.getElementById("r5").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatv1": null,
                "schoenv1": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r6')) {
        document.querySelector('#r6').addEventListener('click', function (event) {
         document.getElementById("V2").style.display="none"
         document.getElementById("r6").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatv2": null,
                "schoenv2": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r7')) {
        document.querySelector('#r7').addEventListener('click', function (event) {
         document.getElementById("V3").style.display="none"
         document.getElementById("r7").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatv3": null,
                "schoenv3": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r8')) {
        document.querySelector('#r8').addEventListener('click', function (event) {
         document.getElementById("V4").style.display="none"
         document.getElementById("r8").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatv4": null,
                "schoenv4": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r9')) {
        document.querySelector('#r9').addEventListener('click', function (event) {
         document.getElementById("K1").style.display="none"
         document.getElementById("r9").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatk1": null,
                "schoenk1": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r10')) {
        document.querySelector('#r10').addEventListener('click', function (event) {
         document.getElementById("K2").style.display="none"
         document.getElementById("r10").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatk2": null,
                "schoenk2": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r11')) {
        document.querySelector('#r11').addEventListener('click', function (event) {
         document.getElementById("K3").style.display="none"
         document.getElementById("r11").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatk3": null,
                "schoenk3": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }

    if (document.querySelector('#r12')) {
        document.querySelector('#r12').addEventListener('click', function (event) {
         document.getElementById("K4").style.display="none"
         document.getElementById("r12").style.display="none"
            update(ref(database, 'users/' + user.uid + '/schoenen'), {
                "maatk4": null,
                "schoenk4": null, 
            }).catch((error) => {
                alert(error);
            });
            event.preventDefault();
        })
    }
});
