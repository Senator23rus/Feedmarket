import classes from './paymentMethod.module.scss';
import PayButton from "components/pages/makingAnOrder/paymentMethod/payButton";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {useEffect, useState} from "react";
import SectionWrapper from "components/pages/makingAnOrder/sectionWrapper";
import MyToggleButton from "components/pages/makingAnOrder/toggleButton";

const PaymentMethod = ({card, setPaymentParameters}) => {
    let [value, setValue] = useState('cash');

    useEffect(() => {
        setPaymentParameters(prevState => {return {...prevState, paymentMethod: value}});
    }, [value])

    let style = {
        // '&.MuiToggleButton-root': {color: '#999999'},
        '&.MuiToggleButton-root.Mui-selected': {
            color: 'black', background: 'none', fill: 'blue'
        },
        '&.MuiToggleButton-root.Mui-selected svg': {
            fill: '#FF7A00'
        },
        '&.MuiToggleButton-root.Mui-selected .cardNum': {
            color: '#FF7A00'
        },
        '&.MuiToggleButton-root:hover': {
            background: 'none'
        }};

  return(
      <SectionWrapper className={classes.paymentMethod}>
          <section>
              <div className={classes.title__wrapper}>
                  <h2 className={classes.title}>Способ оплаты</h2>

                  <MyToggleButton>
                      Все способы оплаты
                  </MyToggleButton>
              </div>
              <div>
                  <ToggleButtonGroup
                      orientation="horizontal"
                      exclusive
                      className={classes.button__wrapper}
                      value={value}
                      onChange={(e, elem) => {
                          return setValue(elem);
                      }}
                  >
                      <ToggleButton classes={{
                          root: classes.root
                      }} sx={style} value="new">
                          <PayButton isImage action={'Новая карта'}>
                              <svg width="31" height="24" viewBox="0 0 31 24" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.2875 4H18.6384C19.2152 3.99999 19.7019 3.99997 20.1005 4.03307C20.518 4.06774 20.9177 4.14328 21.2969 4.34026C21.8489 4.627 22.2989 5.07707 22.5857 5.62906C22.7826 6.00827 22.8582 6.40793 22.8929 6.82542C22.926 7.22398 22.9259 7.71076 22.9259 8.2875V15.7125C22.9259 16.2892 22.926 16.776 22.8929 17.1746C22.8582 17.5921 22.7826 17.9917 22.5857 18.3709C22.2989 18.9229 21.8489 19.373 21.2969 19.6597C20.9177 19.8567 20.518 19.9323 20.1005 19.9669C19.7019 20 19.2152 20 18.6384 20H5.2875C4.71076 20 4.22398 20 3.82542 19.9669C3.40793 19.9323 3.00827 19.8567 2.62906 19.6597C2.07707 19.373 1.627 18.9229 1.34026 18.3709C1.14328 17.9917 1.06774 17.5921 1.03307 17.1746C0.999974 16.776 0.999986 16.2892 1 15.7125V8.2875C0.999986 7.71076 0.999974 7.22398 1.03307 6.82542C1.06774 6.40793 1.14328 6.00827 1.34026 5.62906C1.627 5.07707 2.07707 4.627 2.62906 4.34026C3.00827 4.14328 3.40793 4.06774 3.82542 4.03307C4.22398 3.99997 4.71076 3.99999 5.2875 4ZM3.97255 5.80475C3.66698 5.83013 3.53173 5.87469 3.44857 5.91789C3.22128 6.03595 3.03595 6.22128 2.91789 6.44857C2.87469 6.53173 2.83013 6.66698 2.80475 6.97255C2.77849 7.28875 2.77778 7.70118 2.77778 8.32356V15.6764C2.77778 16.2988 2.77849 16.7112 2.80475 17.0275C2.83013 17.333 2.87469 17.4683 2.91789 17.5514C3.03595 17.7787 3.22128 17.964 3.44857 18.0821C3.53173 18.1253 3.66698 18.1699 3.97255 18.1952C4.28875 18.2215 4.70118 18.2222 5.32356 18.2222H18.6024C19.2247 18.2222 19.6372 18.2215 19.9534 18.1952C20.2589 18.1699 20.3942 18.1253 20.4774 18.0821C20.7046 17.964 20.89 17.7787 21.008 17.5514C21.0512 17.4683 21.0958 17.333 21.1212 17.0275C21.1474 16.7112 21.1481 16.2988 21.1481 15.6764V8.32356C21.1481 7.70118 21.1474 7.28875 21.1212 6.97255C21.0958 6.66698 21.0512 6.53173 21.008 6.44857C20.89 6.22128 20.7046 6.03595 20.4774 5.91789C20.3942 5.87469 20.2589 5.83013 19.9534 5.80475C19.6372 5.77849 19.2247 5.77778 18.6024 5.77778H5.32356C4.70118 5.77778 4.28875 5.77849 3.97255 5.80475Z"/>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.037 10.5185L1.88889 10.5185C1.39797 10.5185 1 10.1205 1 9.62962C1 9.1387 1.39797 8.74073 1.88889 8.74073L22.037 8.74072C22.528 8.74072 22.9259 9.13869 22.9259 9.62961C22.9259 10.1205 22.528 10.5185 22.037 10.5185Z"/>
                                  <circle cx="6.03699" cy="16.1481" r="1.18519"/>
                                  <path d="M26.9167 12C26.9167 14.1631 25.1631 15.9167 23 15.9167C20.8369 15.9167 19.0833 14.1631 19.0833 12C19.0833 9.83688 20.8369 8.08333 23 8.08333C25.1631 8.08333 26.9167 9.83688 26.9167 12ZM23 18.75C26.7279 18.75 29.75 15.7279 29.75 12C29.75 8.27208 26.7279 5.25 23 5.25C19.2721 5.25 16.25 8.27208 16.25 12C16.25 15.7279 19.2721 18.75 23 18.75Z" stroke="white" stroke-width="1.5"/>
                                  <mask id="path-5-outside-1_2914_14607" maskUnits="userSpaceOnUse" x="18.3333" y="7.33325" width="9" height="9">
                                      <rect fill="white" x="18.3333" y="7.33325" width="9" height="9"/>
                                      <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6666 9.86659C23.6666 9.57203 23.3681 9.33325 22.9999 9.33325C22.6317 9.33325 22.3333 9.57203 22.3333 9.86659V11.3333L20.8666 11.3333C20.572 11.3333 20.3333 11.6317 20.3333 11.9999C20.3333 12.3681 20.572 12.6666 20.8666 12.6666H22.3333V14.1333C22.3333 14.4278 22.6317 14.6666 22.9999 14.6666C23.3681 14.6666 23.6666 14.4278 23.6666 14.1333V12.6666H25.1333C25.4278 12.6666 25.6666 12.3681 25.6666 11.9999C25.6666 11.6317 25.4278 11.3333 25.1333 11.3333L23.6666 11.3333V9.86659Z"/>
                                  </mask>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6666 9.86659C23.6666 9.57203 23.3681 9.33325 22.9999 9.33325C22.6317 9.33325 22.3333 9.57203 22.3333 9.86659V11.3333L20.8666 11.3333C20.572 11.3333 20.3333 11.6317 20.3333 11.9999C20.3333 12.3681 20.572 12.6666 20.8666 12.6666H22.3333V14.1333C22.3333 14.4278 22.6317 14.6666 22.9999 14.6666C23.3681 14.6666 23.6666 14.4278 23.6666 14.1333V12.6666H25.1333C25.4278 12.6666 25.6666 12.3681 25.6666 11.9999C25.6666 11.6317 25.4278 11.3333 25.1333 11.3333L23.6666 11.3333V9.86659Z"/>
                                  <path d="M22.3333 11.3333L22.3333 12.8333L23.8333 12.8333V11.3333H22.3333ZM20.8666 11.3333L20.8666 9.83325H20.8666V11.3333ZM22.3333 12.6666H23.8333V11.1666H22.3333V12.6666ZM23.6666 12.6666V11.1666H22.1666V12.6666H23.6666ZM25.1333 11.3333V12.8333V11.3333ZM23.6666 11.3333H22.1666V12.8333H23.6666L23.6666 11.3333ZM22.9999 10.8333C22.8673 10.8333 22.6977 10.7915 22.5343 10.6608C22.3681 10.5278 22.1666 10.2566 22.1666 9.86659H25.1666C25.1666 8.44856 23.8669 7.83325 22.9999 7.83325V10.8333ZM23.8333 9.86659C23.8333 10.2566 23.6317 10.5278 23.4656 10.6608C23.3022 10.7915 23.1325 10.8333 22.9999 10.8333V7.83325C22.1329 7.83325 20.8333 8.44856 20.8333 9.86659H23.8333ZM23.8333 11.3333V9.86659H20.8333V11.3333H23.8333ZM20.8666 12.8333H22.3333L22.3333 9.83325L20.8666 9.83325L20.8666 12.8333ZM21.8333 11.9999C21.8333 12.1325 21.7915 12.3022 21.6608 12.4656C21.5278 12.6317 21.2566 12.8333 20.8666 12.8333V9.83325C19.4486 9.83325 18.8333 11.1329 18.8333 11.9999H21.8333ZM20.8666 11.1666C21.2566 11.1666 21.5278 11.3681 21.6608 11.5343C21.7915 11.6977 21.8333 11.8673 21.8333 11.9999H18.8333C18.8333 12.8669 19.4486 14.1666 20.8666 14.1666V11.1666ZM22.3333 11.1666H20.8666V14.1666H22.3333V11.1666ZM23.8333 14.1333V12.6666H20.8333V14.1333H23.8333ZM22.9999 13.1666C23.1325 13.1666 23.3022 13.2084 23.4656 13.3391C23.6317 13.472 23.8333 13.7432 23.8333 14.1333H20.8333C20.8333 15.5513 22.1329 16.1666 22.9999 16.1666V13.1666ZM22.1666 14.1333C22.1666 13.7432 22.3681 13.472 22.5343 13.3391C22.6977 13.2084 22.8673 13.1666 22.9999 13.1666V16.1666C23.8669 16.1666 25.1666 15.5513 25.1666 14.1333H22.1666ZM22.1666 12.6666V14.1333H25.1666V12.6666H22.1666ZM25.1333 11.1666H23.6666V14.1666H25.1333V11.1666ZM24.1666 11.9999C24.1666 11.8673 24.2084 11.6977 24.3391 11.5343C24.472 11.3681 24.7432 11.1666 25.1333 11.1666V14.1666C26.5513 14.1666 27.1666 12.8669 27.1666 11.9999H24.1666ZM25.1333 12.8333C24.7432 12.8333 24.472 12.6317 24.3391 12.4656C24.2084 12.3022 24.1666 12.1325 24.1666 11.9999H27.1666C27.1666 11.1329 26.5513 9.83325 25.1333 9.83325V12.8333ZM23.6666 12.8333L25.1333 12.8333V9.83325L23.6666 9.83325L23.6666 12.8333ZM22.1666 9.86659V11.3333H25.1666V9.86659H22.1666Z" fill="white" mask="url(#path-5-outside-1_2914_14607)"/>
                              </svg>
                          </PayButton>
                      </ToggleButton>
                      <ToggleButton classes={{
                          root: classes.root
                      }} sx={style} value="cash">
                          <PayButton isImage action={'Наличными'} >
                              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0447 20.75C18.0299 20.75 18.015 20.75 18 20.75L7.94799 20.75C7.04951 20.75 6.30029 20.75 5.70551 20.6701C5.07772 20.5857 4.51092 20.4 4.05545 19.9445C3.59998 19.4891 3.41431 18.9223 3.3299 18.2945C3.24994 17.6997 3.24996 16.9505 3.24999 16.052L3.24999 6.13333C3.24999 4.5409 4.5409 3.24999 6.13333 3.24999L18.3238 3.24999C18.3306 3.24999 18.338 3.24997 18.3459 3.24994C18.4194 3.24968 18.5369 3.24926 18.6473 3.26844C19.1673 3.3588 19.5745 3.76601 19.6649 4.286C19.6841 4.39642 19.6836 4.51389 19.6834 4.58742C19.6834 4.59531 19.6833 4.6027 19.6833 4.60952C19.6833 4.63525 19.6833 4.66059 19.6833 4.68557C19.6835 5.22279 19.6835 5.58884 19.628 5.90863C19.523 6.51287 19.2754 7.06634 18.9207 7.53348C19.0178 7.53972 19.1102 7.54826 19.1972 7.55996C19.5527 7.60775 19.9284 7.7202 20.2374 8.02922C20.5465 8.33825 20.6589 8.71397 20.7067 9.06945C20.7501 9.39226 20.75 9.78909 20.75 10.2219C20.75 10.2368 20.75 10.2517 20.75 10.2667V18C20.75 18.0149 20.75 18.0299 20.75 18.0447C20.75 18.4776 20.7501 18.8744 20.7067 19.1972C20.6589 19.5527 20.5465 19.9284 20.2374 20.2374C19.9284 20.5465 19.5527 20.6589 19.1972 20.7067C18.8744 20.7501 18.4776 20.75 18.0447 20.75ZM15.2762 9.01666C15.3019 9.01666 15.3273 9.01667 15.3522 9.01667C15.4013 9.01668 15.449 9.01669 15.4953 9.01666H18C18.4926 9.01666 18.7866 9.01825 18.9973 9.04658C19.0939 9.05956 19.1422 9.07486 19.164 9.08382C19.1691 9.08589 19.1724 9.08751 19.1743 9.08852L19.1768 9.0899L19.1781 9.09233C19.1791 9.09426 19.1808 9.09758 19.1828 9.10262C19.1918 9.1244 19.2071 9.17276 19.2201 9.26932C19.2484 9.48005 19.25 9.77405 19.25 10.2667V11.7833H17.7333C17.7184 11.7833 17.7035 11.7833 17.6886 11.7833C17.2558 11.7833 16.8589 11.7832 16.5361 11.8266C16.1806 11.8744 15.8049 11.9869 15.4959 12.2959C15.1869 12.6049 15.0744 12.9806 15.0266 13.3361C14.9832 13.6589 14.9833 14.0558 14.9833 14.4886C14.9833 14.5035 14.9833 14.5184 14.9833 14.5333V14.8C14.9833 14.8149 14.9833 14.8299 14.9833 14.8447C14.9833 15.2776 14.9832 15.6744 15.0266 15.9972C15.0744 16.3527 15.1869 16.7284 15.4959 17.0374C15.8049 17.3465 16.1806 17.4589 16.5361 17.5067C16.8589 17.5501 17.2558 17.55 17.6886 17.55C17.7035 17.55 17.7184 17.55 17.7333 17.55H19.25V18C19.25 18.4926 19.2484 18.7866 19.2201 18.9973C19.2071 19.0939 19.1918 19.1422 19.1828 19.164C19.1808 19.1691 19.1791 19.1724 19.1781 19.1743L19.1768 19.1768L19.1743 19.1781C19.1724 19.1791 19.1691 19.1808 19.164 19.1828C19.1422 19.1918 19.0939 19.2071 18.9973 19.2201C18.7866 19.2484 18.4926 19.25 18 19.25L7.99999 19.25C7.03598 19.25 6.38842 19.2484 5.90539 19.1835C5.44392 19.1214 5.24643 19.0142 5.11611 18.8839C4.98579 18.7536 4.87857 18.5561 4.81653 18.0946C4.75159 17.6116 4.74999 16.964 4.74999 16L4.74999 8.66377C5.16065 8.88874 5.63205 9.01666 6.13333 9.01666L15.2762 9.01666ZM15.2762 7.51666C15.9182 7.51666 16.1434 7.51387 16.3185 7.48344C17.2545 7.32081 17.9875 6.58783 18.1501 5.65184C18.1782 5.49017 18.1827 5.28575 18.1833 4.74999L6.13333 4.74999C5.36933 4.74999 4.74999 5.36933 4.74999 6.13333C4.74999 6.89732 5.36933 7.51666 6.13333 7.51666L15.2762 7.51666ZM19.25 16.05V13.2833H17.7333C17.2407 13.2833 16.9467 13.2849 16.736 13.3132C16.6394 13.3262 16.5911 13.3415 16.5693 13.3505C16.5642 13.3526 16.5609 13.3542 16.559 13.3552L16.5566 13.3566L16.5552 13.359C16.5542 13.3609 16.5526 13.3642 16.5505 13.3693C16.5415 13.3911 16.5262 13.4394 16.5132 13.536C16.4849 13.7467 16.4833 14.0407 16.4833 14.5333V14.8C16.4833 15.2926 16.4849 15.5866 16.5132 15.7973C16.5262 15.8939 16.5415 15.9422 16.5505 15.964C16.5526 15.9691 16.5542 15.9724 16.5552 15.9743L16.5566 15.9768L16.559 15.9781C16.5609 15.9791 16.5642 15.9808 16.5693 15.9828C16.5911 15.9918 16.6394 16.0071 16.736 16.0201C16.9467 16.0484 17.2407 16.05 17.7333 16.05H19.25ZM16.5566 13.3566C16.5561 13.357 16.5563 13.3569 16.5566 13.3566V13.3566ZM19.1768 9.0899C19.177 9.09023 19.1772 9.0903 19.1768 9.0899C19.1763 9.08944 19.1764 9.08961 19.1768 9.0899Z"/>
                              </svg>
                          </PayButton>
                      </ToggleButton>
                      {!Array.isArray(card) || card.map((item, index) => {
                          return (
                              <ToggleButton classes={{
                                  root: classes.root
                              }} sx={style} value={index} key={index}>
                                  <PayButton isImage action={item.name} >
                                      <span className="cardNum">{item.cardNum}</span>
                                  </PayButton>
                              </ToggleButton>
                          );
                      })}
                  </ToggleButtonGroup>
              </div>
          </section>
      </SectionWrapper>
  );
}

export default PaymentMethod;