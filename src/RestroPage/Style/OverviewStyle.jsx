import styled from "styled-components";
export const Wrapper = styled.div`
  * {
    font-family: Poppins;
    font-weight: 300;
  }
  .dish-heading{
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 3rem 0px 0.8rem;
  }
  .pop-dish{
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 0px;
    color: rgb(79, 79, 79);
  }
  .avg-cost{
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 3rem 0px 0.8rem;
  }
  .cost{
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 0px;
    color: rgb(79, 79, 79);
  }
  .desc{
    font-size: 1rem;
    line-height: 1.5;
    margin: 0px;
    color: rgb(156, 156, 156);
  }
  .calc-div{
    position: relative;
    display: inline-block;
    padding: 0px;
    cursor: pointer;
    width: max-content;
  }
  .calc{
    font-size: 0.7rem;
    line-height: 1.5;
    margin: 0px;
    color: rgb(207, 207, 207);
    border-bottom: 1px dashed rgb(207, 207, 207);
    width: fit-content;
    cursor: pointer;
  }
  .payment{
    font-size: 1.2rem;
    line-height: 1.5;
    margin: 1rem 0px 0px;
    color: rgb(79, 79, 79);
  }
  .info{
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 3rem 0px 0.8rem;
  }
  .info-div{
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
  }
  .info-name{
    position: relative;
    width: 100%;
    -webkit-box-flex: 0;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 50%;
    padding: 0px 5px 10px 0px;
    display: flex;
    align-items: flex-start;
  }
  .info-icons{
    margin: 0.2rem 0.5rem 0px 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit;
    color:rgb(44,194,159);
  }
  .info-text{
    font-size: 1rem;
    line-height: 1.5;
    margin: 0px;
    color: rgb(79, 79, 79);
  }
  .sponser-img{
      height:196px;
      width:347px;
      margin-right:10px;
      border-radius:20px;
  }
  .sponser{
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: 200;
   
    margin: 3rem 0px 0.8rem;
  }
  .sponser-text{
   font-size: 1.4rem;
  color: rgb(28, 28, 28);
  margin: 0.4rem 0px 0px;
  font-weight: 500;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  
  }
  .votes{
    display: flex;
    height: 2.4rem;
    
  }
  .votes-count{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 2.4rem;
  }
  .votes-icons1{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit;
  }
  .votes-icons2{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit;
    color:rgb(0,0,0);
  }
  .votes-rating{
    margin: 0px 0px 0px 0.4rem;
    color: rgb(28, 28, 28);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5;
  }
  .votes-number{
    font-size: 0.8rem;
    line-height: 1.5;
    margin: 0px 0px 0px 0.8rem;
    color: rgb(79, 79, 79);
  }
  .hr{
    margin: 0.5rem 1.2rem 0.3rem;
    border-left: 1px solid rgb(207, 207, 207);
  }
  .sponser-margin{
      margin-left:80px;
  }
  .blog{
    background-color: rgb(248, 248, 248);
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 1.5rem;
    border-radius: 0.6rem;
    margin-top: 4rem;
  }
  .blog-div{
    display: flex;
    flex-direction: column;
  }
  .blog-text{
    font-size: 1.4rem;
    line-height: 3.2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .blog-desc{
      display:flex
  }
  .blog-link{
    text-decoration: none;
    font-size: 1rem;
    color: rgb(0,0,0);
    margin-right: 0.4rem;
  }
  .icons{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit
    color: rgb(0,0,0);
  }
  .widget-div{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 0.6rem 0.6rem;
    background: rgb(237, 90, 107);
    border-radius: 0.6rem;
  }
  .widget-link{
    text-decoration: none;
    font-size: 1rem;
    color: rgb(255, 255, 255);
    margin-right: 0.4rem;
  }
  .widget-icons{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: inherit;
    color: rgb(255, 255, 255);
  }
  .exp-div{
    font-weight:400;
    margin-top:20px
  }
  .exp-icon{
    color:grey;
  }
  .review-note{
      color:rgb(0,0,0)
  }
  .highlights{
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 400;
    color: rgb(28, 28, 28);
    margin: 3rem 0px 0.8rem;
  }
  .highlight-div{
    border: 1px solid rgb(232, 232, 232);
    box-shadow: rgba(54, 54, 54, 0.06) 0px 1px 2px;
    display: inline-flex;
    margin: 0px 1rem 1rem 0px;
    border-radius: 2rem;
    padding: 0.6rem 1.2rem;
  }
  .main-footer {
    margin-top: 0px;
    width: 100%;
  }
  .logo-section {
    align-items: center;
    width: 100%;

    margin-bottom: 4rem;
  }
  .footer-div {
    max-width: 110rem;
    width: 110rem;
    padding: 2px;
    position: relative;
  }
  .footer-logo {
    margin-top: 50px;
    height: 28px;
  }

  .footer-div {
    position: relative;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    max-width: 19.3333%;
    padding: 0px;
  }
  .footer-heading: {
    font-weight: 500 !important;
    font-size: 1.4rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    margin: 0px 0px 1.2rem;
  }
  .footer-Link {
    text-decoration: none;
    color: rgb(77, 74, 74);
    font-size: 0.9rem;
    margin: 3.8px;
  }
  .social-link {
    margin-left: 0.6rem;
  }
  .icon-tag {
    text-decoration: none;
    margin-right: 0.8rem;
    color: white;
    height: 10px;
  }
  .social-icons {
    align-item: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: black;
  }
  .icon {
    height: 15px;
    border-radius: 50%;
  }
  .app-store {
    height: 50px;
    width: 150px;
  }
  .policy {
    font-size: 0.85rem;
    color: rgb(130, 130, 130);
    line-height: 1.7rem;
    margin-top: 2.3rem;
  }
  
  .help-text{
    letter-spacing: 0.6rem;
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
    font-weight:400;
  }
  .error-text{
    color: rgb(28, 28, 28);
    margin: 0px;
    margin-block-end: 0px;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.5;
  }
  .help-desc{
    font-size: 1rem;
    color: rgb(156, 156, 156);
  }
  .report-btn{
    min-width: auto;
    min-height: 36px;
    display: inline-flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    border-radius: 0.6rem;
    background: transparent;
    padding: 0px;
    border: none;
    cursor: pointer
  }
  .report-text{
    display: inline-flex;
    vertical-align: middle;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    min-width: auto;
    min-height: 36px;
    line-height: 36px;
    margin-top: 0px;
    margin-left: 0px;
    white-space: nowrap;
    font-size: 1.1rem;
    font-weight: 300;
    color: rgb(0,0,0);
    opacity: 1;
    background: border-box transparent;
    border-color: transparent;
    border-width: 0px;
    border-style: solid;
    border-radius: 0.6rem;
    padding: 0px 1.6rem;
    transition: transform 0.25s ease 0s, opacity 0.25s ease 0s, box-shadow 0.25s ease 0s;
    outline: none !important;
  }
  .report-icons{
    white-space: nowrap;
    font-size: 1.4rem;
    font-weight: 300;
    color: rgb(0,0,0);
  }
.img-div{
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  background: linear-gradient(to right, rgb(248, 248, 248) 0%, rgb(255, 255, 255) 10%, rgb(248, 248, 248) 40%, rgb(248, 248, 248) 100%) no-repeat rgb(248, 248, 248);
  opacity: 0;
  transition: opacity 0.25s ease-out 0s;
  will-change: opacity;
  border-radius: inherit;
  animation: 1.5s linear 0s infinite normal forwards running jCOzbu;
}
.img{
  width: 231px;
  height: 208px;
  object-fit: cover;
  transform: none;
  opacity: 1;
  will-change: transform, opacity;
  border-radius: 13px;
  transition: opacity 0.25s ease 0s, transform 0.25s ease 0s;
}
.loc-near-heading{
  line-height: 1.2;
  color: rgb(28, 28, 28);
  font-size: 1rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-weight: 500;
  margin: 0px 0px 1rem;
}
.loc-near-names{
  margin-bottom: 2.4rem;
}
.loc-near-link{
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 1.5;
  font-weight: 400;
  word-break: break-all;
  color: rgb(156, 156, 156);
}
.overviewWrapper{
  width: fit-content;
  margin: auto;
  position: relative;
}
.restaurantMapDiv{
  width: 350px;
  position: absolute;
  top: 0px;
  right: 10px;
}
.add {
  display: inline-flex;
  vertical-align: middle;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-width: auto;
  min-height: 36px;
  line-height: 36px;
  margin-top: 0px;
  margin-left: 0px;
  white-space: nowrap;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgb(0,0,0);
  opacity: 1;

  border-color: rgb(28, 28, 28);
  border-width: 0px;
  border-style: solid;
  border-radius: 0.6rem;
  padding: 0px 1.6rem;
  transition: transform 0.25s ease 0s, opacity 0.25s ease 0s,
    box-shadow 0.25s ease 0s;
  outline: none !important;
}
.btn {
  margin-right: 1rem;
  min-width: auto;
  min-height: 36px;
  display: inline-flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  border-radius: 0.6rem;
  background: transparent;
  padding: 0px;
  border: 1px solid rgb(120,200,120);
  cursor: pointer;
  }
}
`;
